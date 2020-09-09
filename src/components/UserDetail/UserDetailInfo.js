import React from 'react'
import { Link } from "react-router-dom";
import {PATHS} from '../../constants'
import {useUserId} from '../../helpers'

export default function UserDetailInfo({user,userPosts}){
    const userId = useUserId()
    return (
        <div className="ass1-head-user">
        <div className="ass1-head-user__content">
          <div className="ass1-head-user__image">
            <a href="/">
              <img alt="" src={user?.profilepicture} />
            </a>
          </div>
          <div className="ass1-head-user__info">
            <div className="ass1-head-user__info-head">
              <div className="ass1-head-user__name">
                <span>{user?.fullname}</span>
                <i><img src="fonts/emotion/svg/Verified.svg" alt="" /></i>
              </div>
              <div className="w-100" />
                {
                    userId !== user?.USERID ? 
                    <a className="ass1-head-user__btn-follow  ass1-btn"><i className="icon-Followers" /><span>Theo dõi: 99999</span></a>
                    :
                    <>
                        <Link to={PATHS.CHANGE_PASSWORD} className="ass1-head-user__btn-follow ass1-btn">Đổi mật khẩu</Link>
                        <Link to={PATHS.USER_PROFILE} className="ass1-head-user__btn-follow ass1-btn">Profile</Link>
                    </>
                }
            </div>
            <div className="ass1-head-user__info-statistic">
              <div className="ass1-btn-icon"><i className="icon-Post" /><span>Bài viết: {userPosts?.length || 0}</span></div>
              <div className="ass1-btn-icon"><i className="icon-Upvote"></i><span>Up Vote: 999999</span></div>
            </div>
            <p>{user?.description}</p>
          </div>
        </div>
      </div>
    )
}