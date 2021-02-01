import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../actions/userActions.js'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const submitLoginHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
    console.log(userInfo)
  }

  const logoutHandler = () => {
    dispatch(logout())
    console.log(userInfo)
  }

  //PULL FROM LOCALSTORAGE INSTEAD
  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  return (
    <div>
      {userInfo ? (
        <div>
          {/* <h3>Welcome, {userInfo.user.username}</h3> */}
          <button onClick={logoutHandler}>LOGOUT</button>
        </div>
      ) : (
        <div>
          <h3>You are not logged in</h3>
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
        </div>
      )}
    </div>
  )
}

export default LoginScreen
