import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
    </Router>
  )
}

export default App
