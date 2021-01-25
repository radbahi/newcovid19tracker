import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions.js'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
      {userInfo ? (
        <h3>Welcome, ${userInfo.username}</h3>
      ) : (
        <h3>You are not logged in</h3>
      )}
    </div>
  )
}

export default LoginScreen
