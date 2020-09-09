import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { Button, notification } from 'antd';
import HeaderSearch from './HeaderSearch'
import {useHistory,useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {PATHS,CATEGORIES} from '../../constants'
import $ from 'jquery'
import {useUserId } from '../../helpers'
import {asyncGetUserById } from '../../store/user/actions'
// import {Storage} from '../../helpers'

export default function Header() {
  const token = useSelector(state=>state.Auth.ACCESS_TOKEN)
  console.log("token ",token.token)
  const userid = useUserId()
  const dispatch = useDispatch()
  const currentUser = useSelector(state=>state.User.currentUser)
  const history = useHistory()
  const handleDelete = ()=>{
    // console.log("")
    if(localStorage){
      localStorage.removeItem("ACCESS_TOKEN");
      history.push(PATHS.HOMEPAGE)
      window.location.reload()
    }
  }
  const location = useLocation()
  useEffect(()=>{
    document.querySelector(".ass1-header__nav").style.display="none"
  },[location])
  useEffect(()=>{
    $(".ass1-header__menu > li > a").click(function (e) {
      // $(".ass1-header__nav").hide();
      e.preventDefault()
      $(this).parent().find(".ass1-header__nav").slideToggle(300, 'swing');
  });
  },[])
  useEffect(()=>{
    console.log("userid ",userid)
    // Gọi api để lấy thông tin của currrent user dựa vào token
    dispatch(asyncGetUserById({userid}))
      // .then(response => {
      //   if(!response.ok){
      //     // lấy thông tin profile không thành công
      //     // không có được thông tin profile của user
      //     // không cho phép truy cập vào trang profile
      //     alert("error")
      //   }
      // })
  },[userid,dispatch])
  return (
    <header>
        <div className="ass1-header">
          <div className="container">
            <Link to={PATHS.HOMEPAGE} className="ass1-logo">
              TCL Meme
            </Link>
            <nav>
              <ul className="ass1-header__menu">
                <li>
                  <a href="#">Danh mục</a>
                  <div className="ass1-header__nav" style={{display: 'none'}}>
                    <div className="container">
                      <ul>
                        {
                          CATEGORIES.map(cate=>{
                            const url = PATHS.POST_LIST_CATEGORY.replace(":category_id",cate.id)
                            return (
                                <li key={cate.id}><Link to={url}>{cate.text}</Link></li>
                            )
                          })
                        }
                      </ul>
                    </div>
                    <div className="ass1-header__menu-transition" />
                  </div>
                </li>
              </ul>
            </nav>
            <HeaderSearch/>
            {
              currentUser ? <> 
              <Link to={PATHS.POST_CREATE} className="ass1-header__btn-upload ass1-btn">
              <i className="icon-Upvote" /> Upload
              </Link>
              <Link to={PATHS.USER_PROFILE} className="ass1-header__btn-upload ass1-btn">
              <i className="icon-Upvote" /> Update Profile
              </Link>
              <p>{currentUser.fullname}</p> 
              <a onClick={handleDelete} style={{color:"#fff"}} className="ass1-header__btn-upload ass1-btn">
              LogOut
              </a>
              </> :<Link to={PATHS.LOGIN} className="ass1-header__btn-upload ass1-btn">
              Login
            </Link>
            }
          </div>
        </div>
      </header>
  )
}