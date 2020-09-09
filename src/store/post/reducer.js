import {SET_LIST_POST,SET_SEARCH_RESULT} from './actions'
const initialState = {
    listNewsItem : [],
    searchResult : []
}
// thay thế luôn array cũ
// hay là push vào và giữ nguyên data cũ
export default function PostReducer(state=initialState,action){
    switch(action.type){
        case SET_LIST_POST:
            const newPosts = action.payload.posts
            // trang home load được 10 pages
            // truy cap vao 1 page khac
            // quay lai trang home => currentpage quay lai 1
            // nhưng da co 10 pages roi
            // get list page 1 -> noi vao 10 page cu -> dư data -> không đúng
            return {
                state,
                listNewsItem:[
                    ...state.listNewsItem,
                    ...newPosts
                ]
            }
        case SET_SEARCH_RESULT:
            const newPost1 = action.payload.posts
            return {
                ...state,
                searchResult:newPost1
            }
        default:
            return state; 
    }
    return state;
}