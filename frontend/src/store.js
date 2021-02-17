import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducers'
import thunk from 'redux-thunk'

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

// REVISIT IF LOCALSTORAGE ADDS A KEY OF USERINFO TO STATE. WE DO NOT WANT THIS.
const initialState = {
  userState: userInfoFromStorage,
}

const middleware = [thunk]

// combine all the user reducers to be able to pass in as one into rootReducer...
// const userReducers = combineReducers({
//   userLoginReducer,
//   userRegisterReducer,
//   userUpdateReducer,
// })

// ...obviously all userState related things should point to all the user reducers
const rootReducer = combineReducers({
  userState: userReducer,
})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
