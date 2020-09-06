import {api} from './'


const userService = {
    getUserById({userid}){
       return api
            .callWithAuth()
            .get(`/member/member.php?userid=${userid}`)
    }
}
export default userService