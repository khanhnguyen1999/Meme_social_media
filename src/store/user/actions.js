const nameSpace = "user:"
export const SET_USER_INFO = `${nameSpace}SET_USER_INFO`

export const actSetUserInfo = ({user})=>{
    return {
        type:SET_USER_INFO,
        payload:{
            user
        }
    }
}