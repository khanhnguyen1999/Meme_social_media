import React from "react";
import {LoginHeader} from '../../components/Login'
import {useDispatch} from 'react-redux'
import {LoginForm} from '../../components/Login'
import {api} from '../../services'
import {actLoginSuccess } from '../../store/auth/actions'
import {actShowLoading,actHideLoading} from '../../store/app/action'
import {actSetUserInfo} from '../../store/user/actions'

export default function Login() {
  const dispatch = useDispatch()
  //--------- CÁCH 1----------
  // const handleLogin = (formData)=>{
  //   console.log("data",formData)
  //   const {email,password} = formData;
  //   const data = {email,password}
  //   // trước khi gọi api thì cho show loading
  //   dispatch(actShowLoading());
  //   api.call()
  //     .post('/member/login.php',data)
  //     .then(response=>{
  //       console.log("response",response);
  //       dispatch(actHideLoading())
  //     })
  //     .catch(err=>{
  //       console.log("err",err)
  //       dispatch(actHideLoading())
  //     })
  // }

  //-------- CÁCH 2 ------------
const handleLogin = async (formData)=>{
  try{
      console.log("data",formData)
      const {email,password} = formData;
      const data = {email,password}
      // trước khi gọi api thì cho show loading
      dispatch(actShowLoading());
      const response = await api.call().post('/member/login.php',data)
      dispatch(actHideLoading())
      if(response.data.status!==200){
        // lỗi phía server
        alert(response.data.error)
      }
      else{
        // login thành công
        const token = response.data.token;
        const user = response.data.user
        dispatch(actLoginSuccess({token}))
        dispatch(actSetUserInfo({user}))
      }
    } catch(err){
      console.log("err",err)
      dispatch(actHideLoading())
    }
  }
  return (
    <main>
        <div className="ass1-login">
            <LoginHeader/>
            <LoginForm handleLogin={handleLogin}/>
        </div>
    </main>
  )
}

// redux Action và Reducer phải là một pure function 
// 1. Cách 1: làm thuần đặt phần gọi api bên trong component
// -> sau khi gọi xong dispatch kết quả vào action và reducer
// 2. Cách 2: sử dụng middleware trong redux cho phép gọi bất đồng bộ trong action