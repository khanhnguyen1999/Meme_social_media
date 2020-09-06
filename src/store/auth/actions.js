import {api} from '../../services'
import {authService} from '../../services/index'
import {actShowLoading,actHideLoading} from '../app/action'
import {actSetUserInfo} from '../user/actions'
import {Storage} from '../../helpers'



const nameSpace = "auth:"
export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`

export const actLoginSuccess = ({token})=>{
    return {
        type:LOGIN_SUCCESS,
        payload:{
            token
        }
    }
}
 
//View -> Login.js

// asynchandlelogin là 1 function return về một function khác
export const asyncHandleLogin = ({email,password})=>{
    console.log("email ",email," password",password)
    // làm sao có thể sử dụng được dispatch ở trong asynchandlelogin
    return async (dispatch,getGlobalState)=>{
        console.log("getGlobalState",getGlobalState())
        try{
            const data = {email,password}
            // trước khi gọi api thì cho show loading
            dispatch(actShowLoading());
            const response = await authService.login({email,password})
            dispatch(actHideLoading())
            if(response.data.status!==200){
            // lỗi phía server
                // alert(response.data.error)
                return {ok:false,error:response.data.error}
            }
            else{
            // login thành công
                const token = response.data.token;
                const user = response.data.user
                Storage.setToken(token)
                dispatch(actLoginSuccess({token}))
                dispatch(actSetUserInfo({user}))
                return {ok:true}
            }
        } catch(err){
            console.log("err",err)
            dispatch(actHideLoading())
            return {ok:false,error:err.message}
        }
    }
}

/*
    Khi dispatch 1 action
        1. plain object {type,payload}
            action = {type,payload}
        2. Async function
            action = async(params)=>{

            }

    Action này nó sẽ được gửi qua middleware
        1. Nếu nó là 1 function -> gọi function đó
            action("truyền params")

        2. Nếu nó là 1 plain object {type,payload}
            -> Gọi hàm next() để gửi plain object này sang reducer
*/