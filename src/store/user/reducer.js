import {SET_USER_INFO,SET_USER_DETAIL} from './actions'

const initialState = {
    currentUser:null,
    hashUserData:{},
    hashUserPostsData: {}
}

export default function UserReducer(state=initialState,action){
    switch(action.type){
        case SET_USER_INFO:
            return {
                ...state,
                currentUser:action.payload.user
            }
        case SET_USER_DETAIL:
            const { user, userPosts } = action.payload;
            let newHashUserData = state.hashUserData
            let newHashUserPostsData = state.hashUserPostsData;
            if (user) {
                newHashUserData = {
                ...state.hashUserData,
                [user.USERID]: user
                }
            }
            if (userPosts) {
                newHashUserPostsData = {
                ...state.hashUserPostsData,
                [user.USERID]: userPosts
                }
            }

            return {
                ...state,
                hashUserData: newHashUserData,
                hashUserPostsData: newHashUserPostsData,
            }
        default:
            return state; 
    }
    return state;
}