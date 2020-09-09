import React from 'react'
import {SectionItem} from '../SectionItem'
// import {useSelector} from 'react-redux'

export default function SectionList({listPosts}){
    // const listPosts = useSelector(state=>state.Post.listNewsItem)
    //Trong lifecycle get api lấy danh sách post về
    //truyền từng post vào trong props của sectionitem
    return (
        <div className="ass1-section__list">
            {
                listPosts && listPosts.map((post)=>{
                    return (<SectionItem key={post.PID} post={post}/>)
                })
            }
        </div>
    )
}