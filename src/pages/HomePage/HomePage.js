import React,{useEffect} from "react";
import {SectionList} from '../../components/HomePage'
import {Sidebar} from '../../components/Sidebar'
import {useDispatch} from 'react-redux'
import {asyncGetListNews} from '../../store/post/actions'

export default function HomePage() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncGetListNews())
  },[])
  return (
    <main>
		  <div className="container">
        <div className="row">
          <div className="col-lg-8">
              <SectionList/>
          </div>
          <div className="col-lg-4">
              <Sidebar/>
          </div>
        </div>
      </div>
    </main>
  )
}