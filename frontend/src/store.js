import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from './reducers/userReducers'
import thunk from 'redux-thunk'

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

// REVISIT IF LOCALSTORAGE ADDS A KEY OF USERINFO TO STATE. WE DO NOT WANT THIS.
const initialState = {
  userState: userInfoFromStorage,
}

const middleware = [thunk]

// how to pass in multiple reducers into one state?
const reducer = combineReducers({
  userState: [userLoginReducer, userRegisterReducer, userUpdateReducer],
})
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
