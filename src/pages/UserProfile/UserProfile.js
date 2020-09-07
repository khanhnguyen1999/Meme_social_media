import React,{useEffect,useState,useMemo} from "react";
import {useSelector,useDispatch} from 'react-redux'
import {useAuth} from '../../helpers'
import {useUserId } from '../../helpers'
import {asyncGetUserById,asyncUpdateProfile } from '../../store/user/actions'
import defaultImage from '../../assets/images/765-default-avatar.png'
import {UserProfileView} from './UserProfile.view'

const initialState = {
  file:null,
  previewAvatar:""
}

export default function UserProfile() {
  useAuth() 
  const userid = useUserId()
  const dispatch = useDispatch()
  const [userInfor,setUserInfor] = useState(null)
  const [objectFile,setObjectFile] = useState(initialState)
  const currentUser = useSelector(state=>state.User.currentUser)


  useEffect(()=>{
    console.log("curren ",currentUser)
    setUserInfor(currentUser)
  },[currentUser])
  useEffect(()=>{
    console.log("userid ",userid)
    // Gọi api để lấy thông tin của currrent user dựa vào token
    dispatch(asyncGetUserById({userid}))
      .then(response => {
        if(!response.ok){
          // lấy thông tin profile không thành công
          // không có được thông tin profile của user
          // không cho phép truy cập vào trang profile
          alert("error")
        }
      })
  },[userid,dispatch])

  const finalAvatar = useMemo(()=>{
    // 1. Nếu user chưa chọn avatar mới -> hiển thị avatar cũ
    if(!objectFile.file){
      return userInfor?.profilepicture || defaultImage
    } 
    if(objectFile.file && objectFile.previewAvatar){
      return objectFile.previewAvatar
    }
    // 2. nếu user đã chọn avatar mới để xem -> hiển thị avatar review
    // 3. Nếu không có giá trị ở trong bước 1, 2 thì show avatar mặc định
    return defaultImage
  },[userInfor,objectFile])
// sau này data truyền vào form sẽ thay đổi
// bắt buộc phải có onchange để thay đổiđổi
// nếu mình lấy data trực tiếp từ redux -> vô tình thay đổi trực tiếp data trong redux
const onChangeData = (key)=> (e)=>{
  setUserInfor({
    ...userInfor,
    [key]:e.target.value
  })
}
const handleChangeFile = (evt)=>{
  // khi user chọn vào hình -> cho người dùng xem trước vào thẻ img ở bên dưới
  // user được quyền chọn đi chọn lại nhiều tấm
  // trong quá trình user chọn thay đổi.không có lưu trên server (chưa gọi api)
  // base64 -> mã hoá object file của hình ảnh ra dạng base64 url cho người dùng xem trước
  const listFiles = evt.target.files;
  if(listFiles.length){
    const file = listFiles[0];
    // check xem có phải ảnh hay không  
    let reader = new FileReader();
    reader.onloadend = ()=>{
      console.log(reader.result)
      setObjectFile({
        file:file,
        previewAvatar:reader.result
      })
    }
    reader.readAsDataURL(file)
  }
}
const onShowInpuFile = ()=>{
  // dùng useRef của Hooks truy cập DOM luôn vào ô input mà không cần dùng id
  const inputFile = document.getElementById("fileAvatar")
  if(inputFile && inputFile.click){
    inputFile.click()
  }
}
  const handlSubmit = (e) =>{
    e.preventDefault()
    const data = {
      avatar:objectFile.file,
      fullname:userInfor.fullname,
      description:userInfor.description,
      gender:userInfor.gender
    }
    console.log("submit: ",data)
    dispatch(asyncUpdateProfile(data))
      .then(res=>{
        console.log("res",res)
        if(res.ok){
          // gọi api thành công -> reset lại previewimage và objectfile đã chọn trước đó về null
          setObjectFile(initialState)
        }
      })
  }
    const injectedProps = {
      userInfor,
      onShowInpuFile,
      finalAvatar,
      onChangeData,
      handleChangeFile,
      currentUser,
      handlSubmit
    }
  return (
    <UserProfileView {...injectedProps}/>
  )
}