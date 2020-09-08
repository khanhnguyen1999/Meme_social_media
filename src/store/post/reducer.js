import {SET_LIST_POST} from './actions'
const initialState = {
    listNewsItem : []
}
// thay thế luôn array cũ
// hay là push vào và giữ nguyên data cũ
export default function PostReducer(state=initialState,action){
    switch(action.type){
        case SET_LIST_POST:
            const newPosts = action.payload.posts
            return {
                state,
                listNewsItem:[
                    ...state.listNewsItem,
                    ...newPosts
                ]
            }
        default:
            return state; 
    }
    return state;
}