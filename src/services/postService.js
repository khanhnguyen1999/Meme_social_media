import {api} from './'


const postService = {
    getListNews({pagesize,currPage}){
       return api
            .call()
            .get(`/post/getListPagination.php?pagesize=${pagesize}&currPage=${currPage}`)
    }
}
export default postService