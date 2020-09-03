import {combineReducers} from 'redux'

import AppReducer from './app/reducer'
import UserReducer from './user/reducer'
import AuthReducer from './auth/reducer'

const MemeApp = combineReducers({
    User:UserReducer,
    Auth:AuthReducer,
    App:AppReducer
})
export default MemeApp