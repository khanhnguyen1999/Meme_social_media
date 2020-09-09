import React,{useMemo} from 'react'
import {PATHS} from '../../constants'
import {Link, useRouteMatch,useLocation} from 'react-router-dom'
import dayjs from 'dayjs'
import queryString from 'query-string'
import locale_vi from 'dayjs/locale/vi'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default function SectionItem({post}){
    const match = useRouteMatch(PATHS.SEARCH_RESULT)
    // component sectionitem dùng chung cho cả homepage và search result 
    // check điều kiện route hiện tại có khớp với đường dẫn search hay không

    
    const timer = dayjs(new Date(post.time_added)).locale('vi').fromNow()
    const location = useLocation()
    const query = useMemo(()=>{
        const parsed = queryString.parse(location.search)
        console.log("parsed ",parsed)
        if("acb",parsed.q)
        {
            console.log(parsed.q)
            return parsed.q.toLowerCase();
        }
    },[location])
    const formatFullname = useMemo(()=>{
        if(match && query){
            const textHTML = post.fullname.toLowerCase().split(query).join(`<mark>${query}</mark>`)
            return <Link to={PATHS.USER_DETAIL} className="ass1-section__name" dangerouslySetInnerHTML={{__html:textHTML}}/>
        }
        return <Link to={PATHS.USER_DETAIL} className="ass1-section__name">{post.fullname}</Link>
    },[match,query])
    const formatContent = useMemo(()=>{
        if(match && query){
            const textHTML = post.post_content.toLowerCase().split(query).join(`<mark>${query}</mark>`)
            return <p dangerouslySetInnerHTML={{__html:textHTML}}/>
        }
        return <p>{post.post_content}</p>
    },[match,query])
    if(!post) return null;
    return(
        <div className="ass1-section__item">
                <div className="ass1-section">
                    <div className="ass1-section__head">
                        <Link to={PATHS.USER_DETAIL} className="ass1-section__avatar ass1-avatar"><img src={post.profilepicture || "/assets/images/765-default-avatar.png"} alt="" /></Link>
                        <div>
                        {formatFullname}
                        <span className="ass1-section__passed">{timer}</span>
                        </div>
                    </div>
                    <div className="ass1-section__content">
                        {formatContent}
                        <div className="ass1-section__image">
                        <Link to={PATHS.POST_DETAIL} ><img src={post.url_image} alt="" /></Link>
                        </div>
                    </div>
                    <div className="ass1-section__footer">
                        <Link to={PATHS.POST_DETAIL}><i className="icon-Comment_Full" /><span>{post.count || 0}</span></Link>
                    </div>
                </div>
        </div>
    )
}