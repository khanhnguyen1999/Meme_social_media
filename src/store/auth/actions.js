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