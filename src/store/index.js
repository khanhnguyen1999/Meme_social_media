import { createStore } from 'redux'
import MemeApp from './root-reducer'
const store = createStore(MemeApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store