import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers'
import thunk from 'redux-thunk'

const userInfoFromStorage = localStorage.getItem('loggedInUser')
  ? JSON.parse(localStorage.getItem('loggedInUser'))
  : null

const initialState = {
  loggedInUser: userInfoFromStorage,
}

const middleware = [thunk]

const reducer = combineReducers({
  loggedInUser: userLoginReducer,
})
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
