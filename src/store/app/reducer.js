
import {
    SHOW_LOADING,
    HIDE_LOADING
} from './action'

const initialState = {
    isLoading: false
}
export default function AppReducer(state=initialState,action){
    switch (action.type){
        case SHOW_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case HIDE_LOADING:
            return {
                ...state,
                isLoading:false
            }
        default:
            return state;
    }
}