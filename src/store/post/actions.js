import {postService} from '../../services'
import { actHideLoading, actShowLoading } from '../app/action'

// const nameSpace = 'post:'; 
// export const GET_LIST_POST_PAGING = `${nameSpace}GET_LIST_POST_PAGING`

export const asyncGetListNews = ({pagesize=3,currPage=1}={})=>{
    return async(dispatch)=>{
        try{
            dispatch(actShowLoading())
            const response = await postService.getListNews({pagesize,currPage})
            dispatch(actHideLoading())
            console.log("response ",response)
        }
        catch(e){
            dispatch(actHideLoading())
            return{ok:false,err:e.message}
        }
    }
}