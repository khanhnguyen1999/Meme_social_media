import React from 'react'
import {PATHS} from '../../constants'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import locale_vi from 'dayjs/locale/vi'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default function SectionItem({post}){
    if(!post) return null;
    const timer = dayjs(new Date(post.time_added)).locale('vi').fromNow()
    return(
        <div className="ass1-section__item">
                <div className="ass1-section">
                    <div className="ass1-section__head">
                        <Link to={PATHS.USER_DETAIL} className="ass1-section__avatar ass1-avatar"><img src={post.profilepicture} alt="" /></Link>
                        <div>
                        <Link to={PATHS.USER_DETAIL} className="ass1-section__name">{post.fullname}</Link>
                        <span className="ass1-section__passed">{timer}</span>
                        </div>
                    </div>
                    <div className="ass1-section__content">
                        <p>{post.post_content}</p>
                        <div className="ass1-section__image">
                        <Link to={PATHS.POST_DETAIL} ><img src={post.url_image} alt="" /></Link>
                        </div>
                    </div>
                    <div className="ass1-section__footer">
                        <Link to={PATHS.POST_DETAIL}><i className="icon-Comment_Full" /><span>{post.count}</span></Link>
                    </div>
                </div>
        </div>
    )
}