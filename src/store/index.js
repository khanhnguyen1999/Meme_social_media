import { createStore,applyMiddleware } from 'redux'
import MemeApp from './root-reducer'
import logger from 'redux-logger'
//---------- LOGGER VIẾT THEO MẪU-----------
// const logger = store => next => action =>{
//     console.log("dispatch: ",action)
//     let result = next(action) // nhảy qua reducer
//     console.log("next props: ",store.getState())
//     // nếu gọi hàm next và truyền action vào tức là cho phép đi qua reducer
//     return result;
// }


const store = createStore(
    MemeApp,
    applyMiddleware(logger),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(()=>{
    console.log("Get state",store.getState())
})

export default store