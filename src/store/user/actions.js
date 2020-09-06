import {userService} from '../../services'
import { actHideLoading, actShowLoading } from '../app/action'



const nameSpace = "user:"
export const SET_USER_INFO = `${nameSpace}SET_USER_INFO`
export const GET_USER_BY_ID = `${nameSpace}GET_USER_BY_ID`

export const actSetUserInfo = ({user})=>{
    return {
        type:SET_USER_INFO,
        payload:{
            user
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