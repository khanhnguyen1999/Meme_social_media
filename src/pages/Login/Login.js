import React from "react";
import {LoginHeader} from '../../components/Login'
import {useDispatch} from 'react-redux'
import {LoginForm} from '../../components/Login'
import {api} from '../../services'
import {actLoginSuccess,asyncHandleLogin } from '../../store/auth/actions'
import {useHistory} from 'react-router-dom'
import {PATHS} from '../../constants'
import {useNotAuth} from '../../helpers'
import { notification } from 'antd';


export default function Login() {
  useNotAuth();
  const dispatch = useDispatch()
  const history = useHistory()


  // --------- NOTIFICATION------------

  const openNotification = (type,err) => {
    notification[type]({
      message: 'Lỗi',
      description:err,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  // ------- THUNK MIDDLEWARE----------

  const handleLogin = (formData)=>{
    const {email,password} = formData;
    dispatch(asyncHandleLogin({email,password}))
      .then(res=>{
        if(res.ok){
          history.push(PATHS.HOMEPAGE)
        }
        else {
          openNotification('error',res.error)
          console.log(res.error)
        }
      })
  }

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
// const handleLogin = async (formData)=>{
//   try{
//       console.log("data",formData)
//       const {email,password} = formData;
//       const data = {email,password}
//       // trước khi gọi api thì cho show loading
//       dispatch(actShowLoading());
//       const response = await api.call().post('/member/login.php',data)
//       dispatch(actHideLoading())
//       if(response.data.status!==200){
//         // lỗi phía server
//         alert(response.data.error)
//       }
//       else{
//         // login thành công
//         const token = response.data.token;
//         const user = response.data.user
//         dispatch(actLoginSuccess({token}))
//         dispatch(actSetUserInfo({user}))
//       }
//     } catch(err){
//       console.log("err",err)
//       dispatch(actHideLoading())
//     }
//   }
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
// Action có 2 dạng
// - Pure function -> Dispatch chạy ngay tới Reducer
// - Dạng async function -> Không có chạy ngay tới Reducer mà chờ xử lý hoàn tất -> Mới dispatch tới một action khác