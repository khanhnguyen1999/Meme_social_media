import {parseJwt} from './index'

const keyToken = "ACCESS_TOKEN"
const Storage = {
    setToken(token){
        localStorage.setItem(keyToken,token)
    },
    getToken(){
        const token = localStorage.getItem(keyToken)
        try{
            const parseObj = parseJwt(token)
            if(parseObj && parseObj.id){
                return {
                    token
                }
            }
            return ""
        }
        catch(e){
            return ""
        }
    }
}
export default Storage;