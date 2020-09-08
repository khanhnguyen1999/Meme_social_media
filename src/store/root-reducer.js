import {combineReducers} from 'redux'

import AppReducer from './app/reducer'
import UserReducer from './user/reducer'
import AuthReducer from './auth/reducer'
import PostReducer from './post/reducer'

const MemeApp = combineReducers({
    User:UserReducer,
    Auth:AuthReducer,
    App:AppReducer,
    Post:PostReducer
})
export default MemeApp