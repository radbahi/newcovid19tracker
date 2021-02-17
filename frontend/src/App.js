import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css'

function App() {
  const userState = useSelector((state) => state.userState)

  // const { userInfo } = userState
  return (
    <Router>
      <Route exact path='/'>
        {!userState ? <Redirect to='/login' /> : <HomeScreen />}
      </Route>
      {console.log("HELP IM STUCK")}
      <Route exact path='/login'>
        {userState ? <Redirect to='/' /> : <LoginScreen />}
      </Route>
      <Route exact path='/register' component={RegisterScreen} />
    </Router>
  )
}

export default App
