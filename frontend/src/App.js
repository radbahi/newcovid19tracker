import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import { useSelector } from 'react-redux'
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
      {/* {!userState || error === 'oh fuck' ? (
          <Redirect to='/login' />
        ) : (
          <HomeScreen />
        )} */}
      <Route exact path='/login'>
        {userState ? <Redirect to='/' /> : <LoginScreen />}
      </Route>
      <Route exact path='/register' component={RegisterScreen} />
    </Router>
  )
}

export default App
