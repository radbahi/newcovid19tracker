import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions.js'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const [usernameRegister, setUsernameRegister] = useState('')

  const [passwordRegister, setPasswordRegister] = useState('')

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  const submitRegisterHandler = (e) => {
    e.preventDefault()
    dispatch(register(usernameRegister, passwordRegister))
    console.log(userInfo)
  }

  return (
    <div>
      <h1>New user? Register</h1>
      <form onSubmit={submitRegisterHandler}>
        <label>Username:</label>
        <input
          type='text'
          name='usernameRegister'
          value={usernameRegister}
          onChange={(e) => setUsernameRegister(e.target.value)}
        />
        <label>Password:</label>
        <input
          type='password'
          name='passwordRegister'
          value={passwordRegister}
          onChange={(e) => setPasswordRegister(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default LoginScreen
