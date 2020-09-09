import {userService} from '../../services'
import { actHideLoading, actShowLoading } from '../app/action'



const nameSpace = "user:"
export const SET_USER_INFO = `${nameSpace}SET_USER_INFO`
export const GET_USER_BY_ID = `${nameSpace}GET_USER_BY_ID`
export const SET_USER_DETAIL = `${nameSpace}SET_USER_DETAIL`


export const actSetUserInfo = ({user})=>{
    return {
        type:SET_USER_INFO,
        payload:{
            user
        }
    }
}
export const actSetUserDetailData = ({user,userPosts})=>{
    return {
        type:SET_USER_DETAIL,
        payload: {
            user,
            userPosts
        }
    }
}
export const asyncGetUserById = ({userid})=>{
    return async (dispatch)=>{
        try{
            dispatch(actShowLoading())
            const response = await userService.getUserById({userid})
            dispatch(actHideLoading())
            if(response?.data?.status===200){
                const user = response.data.user
                dispatch(actSetUserInfo({user}))
                dispatch(actSetUserDetailData({user}))  
                return {
                    ok:true,
                    user:user
                }
            }
            return { ok:false,error:response?.data?.error}
        }
        catch(e){
            dispatch(actHideLoading());
            return { ok:false,error:e.message}
        }
    }
}

export const asyncUpdateProfile = ({avatar,gender,fullname,description})=>{
    return async (dispatch)=>{
        try{    
            let formData = new FormData();
            formData.append('gender',gender)
            formData.append('fullname',fullname)
            formData.append('description',description)
            if(avatar){
                formData.append('avatar',avatar)
            }
            dispatch(actShowLoading())
            const response = await userService.updateProfile(formData)
            dispatch(actHideLoading())
            if(response?.data?.status===200){
                const user = response.data.user
                dispatch(actSetUserInfo({user}))
                return {
                    ok:true,
                    user:user
                }
            }
        }
        catch(e){
            dispatch(actHideLoading());
            return { ok:false,error:e.message}
        }
    }
}


export const asyncGetUserDetail = ({userid})=>{
    return async (dispatch,getGlobalState)=>{
        try{
            const state = getGlobalState()
            const hashUserData = state.User.hashUserData;
            const hashUserPostsData = state.User.hashUserPostsData;
            // check xem userid đã có tồn tại data trong redux hay chưa
            // nếu chưa - > undefined - > call api
            // nếu có rồi -> trả về object -> không cần call
            if(hashUserData[userid] && hashUserPostsData[userid]){
                // có data rồi -> đã call api rồi
                const user = hashUserData[userid]
                const userPosts = hashUserPostsData[userid]
                return {
                    ok:true,
                    user,userPosts
                }
            }
            else{
                const p1 = userService.getUserById({userid})
                const p2 = userService.getListPostsByUserId({userid}) 
                dispatch(actShowLoading())
                const [userRes,userPostsRes] = await Promise.all([p1,p2])
                /*
                    Get user - get list post -> promise.all để api chạy song song 
                    api1 --> chạy 3s
                    api2 ==> chạy 2s
                    ->chạy tuần tự mất 5s
                    -> chạy song song mất 3s
                */
                dispatch(actHideLoading());
                if(userRes?.data?.status === 200 && userPostsRes?.data?.status === 200){
                    const user = userRes.data.user;
                    const userPosts = userPostsRes.data.posts
                    console.log("user ",user)
                    console.log("userPosts ",userPosts)
                    dispatch(actSetUserDetailData({user,userPosts}));
                    return {
                        ok:true,
                        user,
                        userPosts
                    }
                }
            }
            return { ok:false,error:'response?.data?.error'}
        }
        catch(e){
            dispatch(actHideLoading());
            return { ok:false,error:e.message}
        }
    }
}
