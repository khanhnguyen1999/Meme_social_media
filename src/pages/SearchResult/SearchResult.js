import React,{useMemo,useEffect} from 'react'
import {useHistory,useLocation} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import queryString from 'query-string'
import {SectionList} from '../../components/HomePage'
import {Sidebar} from '../../components/Sidebar'
import {SectionItem} from '../../components/SectionItem'
import {PATHS} from '../../constants'
import {asyncGetListSearch} from '../../store/post/actions'

export default function SearchResult(){
    const history = useHistory()
    const dispatch = useDispatch()
    const location = useLocation()
    const searchResult = useSelector(state=>state.Post.searchResult)
    const query = useMemo(()=>{
        const parsed = queryString.parse(location.search)
        console.log("parsed ",parsed)
        if("acb",parsed.q)
        {
            console.log(parsed.q)
            return parsed.q;
        }
        else{
            history.push(PATHS.HOMEPAGE)
        }
    },[history,location])
    useEffect(()=>{
        dispatch(asyncGetListSearch({query}))
          .then((res)=>{
            // đã gọi xong
            // if(res.ok && res.data.length===0){
            //   setIsEmpty(true)
            // }
          })
      },[dispatch,query])
    // console.log("localtion ",location)
    return(
      <main>
		  <div className="container">
        <div className="row">
          <div className="col-lg-8">
          <h3>Search Result:</h3>
              <SectionList listPosts={searchResult}/>
          </div>
          <div className="col-lg-4">
              <Sidebar/>
          </div>
        </div>
      </div>
    </main>
    )
}