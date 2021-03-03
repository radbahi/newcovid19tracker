import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../actions/userActions.js'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-weight: bold;
`

const Form = styled.form`
  font-size: 1em;
  text-align: center;
  color: white;
  background-color: #317cf7;
`

const RegLink = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color: #317cf7;
  font-weight: bold;
`

const LoginDiv = styled.div`
  border-radius: 25px;
  border: 2px solid;
  width: 300px;
  position: center;
  justify-content: center;
  box-shadow: 0px 0px 5px 7px #ced1db;
`

const LoginWrapper = styled.div`
  margin: 200px;
  margin-left: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: line;
  border-color: black;
`

// button currently uses bootstrap
// const RegButton = styled.button`
// color: palevioletred;
// background-color: purple;
// `

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
  return (
    <LoginWrapper>
      <LoginDiv>
        {loginError && loginError}
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
        <RegLink>Don't have an account? Click below</RegLink>
        <Button href='/register'>Register a new account</Button>
      </LoginDiv>
    </LoginWrapper>
  )
}

export default LoginScreen
