import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, register } from '../actions/userActions.js'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [usernameRegister, setUsernameRegister] = useState('')

  const [passwordRegister, setPasswordRegister] = useState('')

  const submitLoginHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
    console.log(userInfo)
  }

  const submitRegisterHandler = (e) => {
    e.preventDefault()
    dispatch(register(username, password))
    console.log(userInfo)
  }

  const logoutHandler = () => {
    dispatch(logout())
    console.log(userInfo)
  }

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  return (
    <div>
      {userInfo ? (
        <div>
          <h3>Welcome, {userInfo.data.user.username}</h3>
          <button onClick={logoutHandler}>LOGOUT</button>
        </div>
      ) : (
        <div>
          <h3>You are not logged in</h3>
          <form onSubmit={submitLoginHandler}>
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
          <form onSubmit={submitRegisterHandler}>
            <h1>New user? Register</h1>
            <label htmlFor='usernameRegister'>Username:</label>
            <input
              type='text'
              name='usernameRegister'
              value={usernameRegister}
              onChange={(e) => setUsernameRegister(e.target.value)}
            />
            <label htmlFor='passwordRegister'>Password:</label>
            <input
              type='password'
              name='passwordRegister'
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginScreen
