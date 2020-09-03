import {SET_USER_INFO} from './actions'

const initialState = {
    currentUser:null
}

export default function UserReducer(state=initialState,action){
    switch(action.type){
        case SET_USER_INFO:
            return {
                ...state,
                currentUser:action.payload.user
            }
        default:
            return state; 
    }
    return state;
}