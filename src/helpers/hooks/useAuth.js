import {useEffect} from 'react'
import {useLocation,useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {PATHS} from '../../constants'
//custom hook

//không đăng nhập thì mới được vào trang này
export default function useAuth(){
    const location = useLocation()
    const history = useHistory()
    const token = useSelector(state=>state.Auth.ACCESS_TOKEN)

    // lắng nghe sự thay đổi của localtion
    // mỗi lần đường dẫn url thay đổi mình phải check
    useEffect(()=>{
        if(!token){
            // chưa đăng nhập không cho phép vào
            history.push(PATHS.LOGIN)
        }
    },[location,history,token])
}
// thay thế cho cơ chế HOC hồi xưa.thường dùng trong class component - vẫn dùng được trong hook