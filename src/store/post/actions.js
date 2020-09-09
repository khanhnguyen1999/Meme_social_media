import {postService} from '../../services'
import { actHideLoading, actShowLoading } from '../app/action'

const nameSpace = 'post:'; 
export const SET_LIST_POST = `${nameSpace}SET_LIST_POST`
export const SET_SEARCH_RESULT = `${nameSpace}SET_SEARCH_RESULT`

export const actSetListPost = ({posts})=>({
    type:SET_LIST_POST,
    payload:{
        posts
    }
})

export const actSetSearchResult = ({posts})=>({
    type:SET_SEARCH_RESULT,
    payload:{
        posts
    }
})

export const asyncGetListNews = ({pagesize=5,currPage=1}={})=>{
    return async(dispatch)=>{
        try{
            dispatch(actShowLoading())
            const response = await postService.getListNews({pagesize,currPage})
            dispatch(actHideLoading())
            if(response?.data?.status === 200){
                const posts = response.data.posts;
                dispatch(actSetListPost({posts}))
                return {ok:true,data:response.data.posts}
            }
            return{ok:false,err:response.data.message}
            // console.log("response ",response)
        }
        catch(e){
            dispatch(actHideLoading())
            return{ok:false,err:e.message}
        }
    }
}

export const asyncGetListSearch = ({query}={})=>{
    return async(dispatch)=>{
        try{
            dispatch(actShowLoading())
            const response = await postService.searchListNews({query})
            dispatch(actHideLoading())
            if(response?.data?.status === 200){
                const posts = response.data.posts;
                dispatch(actSetSearchResult({posts}))
                return {ok:true,data:response.data.posts}
            }
            return{ok:false,err:response.data.message}
            // console.log("response ",response)
        }
        catch(e){
            dispatch(actHideLoading())
            return{ok:false,err:e.message}
        }
    }
}