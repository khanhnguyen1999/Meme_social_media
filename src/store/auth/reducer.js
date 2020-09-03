import {LOGIN_SUCCESS} from './actions'
const initialState = {
    ACCESS_TOKEN:""
}

export default function AuthReducer(state=initialState,action){
    switch (action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                ACCESS_TOKEN:action.payload.token
            }
        default:
            return state;
    }
}