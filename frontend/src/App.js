import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { persistUser } from './actions/userActions'

import './App.css'

function App() {
  const userState = useSelector((state) => state.userState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(persistUser())
  }, [dispatch])

  // const { userInfo } = userState
  return (
    <Router>
      <Route exact path='/'>
        {!userState || userState.error === "Request failed with status code 500" ? <Redirect to='/login' /> : <HomeScreen />}
      </Route>
      <Route exact path='/login'>
        {userState && !userState.error ? <Redirect to='/' /> : <LoginScreen />}
      </Route>
      <Route exact path='/register' component={RegisterScreen} />
    </Router>
  )
}

export default App
