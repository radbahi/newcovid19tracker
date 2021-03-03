import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions.js'
import { Button } from 'react-bootstrap'
import { Title } from './LoginScreen.js'

const RegisterScreen = ({ history }) => {
  const dispatch = useDispatch()

  const [usernameRegister, setUsernameRegister] = useState('')

  const [passwordRegister, setPasswordRegister] = useState('')

  const userState = useSelector((state) => state.userState)

  useEffect(() => {
    if (userState) {
      history.push('/login')
    }
  }, [userState, history])

  const submitRegisterHandler = (e) => {
    e.preventDefault()
    dispatch(register(usernameRegister, passwordRegister))
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
      <h2>Already have an account? Click below</h2>
      <Button href='/login'>Login to your account</Button>
    </div>
  )
}

export default RegisterScreen
