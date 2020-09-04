import { createStore,applyMiddleware } from 'redux'
import MemeApp from './root-reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//---------- LOGGER VIẾT THEO MẪU-----------
// const logger = store => next => action =>{
//     console.log("dispatch: ",action)
//     let result = next(action) // nhảy qua reducer
//     console.log("next props: ",store.getState())
//     // nếu gọi hàm next và truyền action vào tức là cho phép đi qua reducer
//     return result;
// }


// ------------ VIẾT REDUX THUNK TRUYỀN THỐNG-------------
// const myThunkMiddleware = store => next => action =>{
//     if(action && typeof action === 'function'){
//         //Không cho chạy qua reducer
//         const dispatch = store.dispatch;
//         const getGlobalState = store.getState;
//         const extraParams = {
//             title:'truyen them'
//         }
//         action(dispatch,getGlobalState,extraParams)
//     }
//     else{
//         // Nó là plain object -> tiến hành gọi hàm next
//         next(action);
//     }
//     // Khi nó chạy vào middleware -> check xem action có phải là một Promise hay không?
//     // 1. Hoặc là Promise
//     // 2. Hoặc là plain object { type,payload,..}
// }

const store = createStore(
    MemeApp,
    applyMiddleware(thunk,logger),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(()=>{
    console.log("Get state",store.getState())
})

export default store