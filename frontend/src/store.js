import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducers'
import { useEffect } from 'react'
import thunk from 'redux-thunk'
import axios from 'axios'

//GOING TO HAVE TO SET UP GET PERSIST HERE WITH TOKEN TO GET USER INFO AND THEN SET THAT USER INFO TO STATE


// const localStorageToken = localStorage.getItem('token')
//   ? JSON.parse(localStorage.getItem('token'))
//   : null

// Pass in localStorageToken to get userInfo from /persist route and pass that response to inital state 8) 
// REVISIT IF LOCALSTORAGE ADDS A KEY OF USERINFO TO STATE. WE DO NOT WANT THIS.
const initialState = {
  userState: null,
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
