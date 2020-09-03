import axios from 'axios'
const baseURL = "http://api-meme-zendvn-01.herokuapp.com/api/"


const api = {
    call(){
        // không cấu hình header
        return axios.create({
            baseURL,
            headers: {
                'Content-Type':'application/json'
            }
        })
    },
    callWithAuth(){
        // cấu hình header
        return axios.create({
            baseURL,
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer my-token'
            }
        })
    }
}
export default api