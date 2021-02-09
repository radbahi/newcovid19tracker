import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions.js'
import { Button } from 'react-bootstrap'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  //PULL FROM LOCALSTORAGE INSTEAD for persistence?
  const loggedInUser = useSelector((state) => state.loggedInUser)

  // LOGS IN BUT DOES NOT REDIRECT TO ROOT URL. STAYS /login
  const submitLoginHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
    console.log(loggedInUser)
  }

  return (
    <div>
      <h3>Please login</h3>
      <form onSubmit={submitLoginHandler}>
        <h1>Login</h1>
        <label>Username:</label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
      <h2>Don't have an account? Click below</h2>
      <Button href='/register'>Register a new account</Button>
    </div>
  )
}

export default LoginScreen
