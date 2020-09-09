import {api} from './'


const userService = {
    getUserById({userid}){
       return api
            .callWithAuth()
            .get(`/member/member.php?userid=${userid}`)
    },
    updateProfile(formData){
        return api
            .callWithAuth({'accept':'multipart/form-data'})
            .post('/member/update.php',formData)
    },
    getListPostsByUserId({userid}){
        return api
            .callWithAuth()
            .get(`/post/getListPostUserID.php?userid=${userid}`)

    }
}
export default userService