import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { UserDetailInfo, UserDetailPosts } from "../../components/UserDetail";
import {asyncGetUserDetail} from '../../store/user/actions'

export default function UserDetail() {
  const {user_id} = useParams()
  const dispatch = useDispatch()
  const [user,setUser] = useState(null)
  const [userPost,setUserPost] = useState(null)
  useEffect(()=>{
    dispatch(asyncGetUserDetail({userid:user_id}))
      .then(res=>{
        if(res.ok){
          setUser(res.user)
          setUserPost(res.userPosts)
        }
        else{
          alert(res.error)
        }
      })
  },[user_id,dispatch])
  return (
    <main>
    <div className="container">
      <UserDetailInfo user={user} userPost={userPost}/>
      <UserDetailPosts  userPost={userPost}/>
    </div>
  </main>
  )
}