import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css'

function App() {
  const loggedInUser = useSelector((state) => state.loggedInUser)
  return (
    <Router>
      <Route exact path='/'>
        {!loggedInUser.userInfo ? <Redirect to='/login' /> : <HomeScreen />}
      </Route>
      {/* {!userInfo || error === 'oh fuck' ? (
          <Redirect to='/login' />
        ) : (
          <HomeScreen />
        )} */}
      <Route exact path='/login'>
        {loggedInUser.userInfo ? <Redirect to='/' /> : <LoginScreen />}
      </Route>
      <Route exact path='/register' component={RegisterScreen} />
    </Router>
  )
}

export default App
