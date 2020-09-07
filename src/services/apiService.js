import axios from 'axios'
import {Storage} from '../helpers'

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
    callWithAuth(headers = {}){
        const token = Storage.getToken();
        // cấu hình header
        return axios.create({
            baseURL,
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token.token}`,
                ...headers
                // 'accept': 'multipart/form-data' // tuỳ vào api / chỉ những api tương tác với file 
            }
        })
    }
}
export default api