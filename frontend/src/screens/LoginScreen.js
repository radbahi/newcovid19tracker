import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../actions/userActions.js'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const LoginScreen = ({ loginError }) => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  // LOGS IN BUT DOES NOT REDIRECT TO ROOT URL. STAYS /login
  const submitLoginHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  //PULL FROM LOCALSTORAGE INSTEAD for persistence?
  // const userState = useSelector((state) => state.userState)

  // const { userInfo } = userState
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    background-color: purple`

  const Form = styled.form`
    font-size: 1em;
    text-align: center;
    color: palevioletred;
    background-color: purple`
  
  const RegLink = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: purple`

  // button currently uses bootstrap
  const RegButton = styled.button`
  color: palevioletred;
  background-color: purple;
  `

  return (
    <div>
      {loginError && loginError}
      <Form>
      <form onSubmit={submitLoginHandler}>
        <Title>Login</Title>
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
      </Form>
      <RegLink>Don't have an account? Click below</RegLink>
      <Button href='/register'>Register a new account</Button>
    </div>
  )
}

export default LoginScreen
