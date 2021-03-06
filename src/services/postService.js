import {api} from './'


const postService = {
    getListNews({pagesize,currPage}){
       return api
            .call()
            .get(`/post/getListPagination.php?pagesize=${pagesize}&currPage=${currPage}`)
    },
    searchListNews({query}){
        return api
            .call()
            .get(`/post/search.php?query=${query}`)
    }
}
export default postService