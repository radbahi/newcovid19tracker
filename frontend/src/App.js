import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css'

function App() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log(userInfo)
  return (
    <Router>
      <Route path='/' exact>
        {!userInfo ? <Redirect to='/login' /> : <HomeScreen />}
      </Route>
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
    </Router>
  )
}

export default App
