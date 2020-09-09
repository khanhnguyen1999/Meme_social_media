import React,{useState,useEffect,useCallback} from "react";
import {SectionList} from '../../components/HomePage'
import {Sidebar} from '../../components/Sidebar'
import {useDispatch,useSelector} from 'react-redux'
import {asyncGetListNews} from '../../store/post/actions'
import {useScrollEndPage} from '../../helpers'


export default function HomePage() {
  const dispatch = useDispatch()
  const [currPage,setCurrPage] = useState(1)
  const [isCallingAPI,setIsCallingAPI] = useState(false)
  const [isEmpty,setIsEmpty]=useState(false)
  const [pagesize,setPagesize] = useState(5)
  const listPosts = useSelector(state=>state.Post.listNewsItem)
  useEffect(()=>{
    setIsCallingAPI(true)
    dispatch(asyncGetListNews({currPage,pagesize}))
      .then((res)=>{
        // đã gọi xong
        if(res.ok && res.data.length===0){
          setIsEmpty(true)
        }
        setIsCallingAPI(false)
      })
  },[currPage,pagesize])

  const handleScrollEndPage = useCallback(()=>{
    if(!isCallingAPI && isEmpty===false){
      setCurrPage(()=>{
        return currPage+1;
      })
    }
  },[currPage,isCallingAPI,isEmpty])
  useScrollEndPage(handleScrollEndPage)
  return (
    <main>
		  <div className="container">
        <div className="row">
          <div className="col-lg-8">
              <SectionList listPosts={listPosts}/>
          </div>
          <div className="col-lg-4">
              <Sidebar/>
          </div>
        </div>
      </div>
    </main>
  )
}