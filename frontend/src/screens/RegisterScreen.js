import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions.js'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const Title = styled.h1`
  padding: 10px;
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-weight: bold;
`

const Form = styled.form`
  padding: 10px;
  font-size: 1em;
  text-align: left;
  color: black;
`

const RegDiv = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  border-radius: 25px;
  width: 300px;
  position: center;
  justify-content: center;
  box-shadow: 0px 0px 5px 7px #ced1db;
  padding: 10px;
`

const RegWrapper = styled.div`
  margin: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: line;
  border-color: black;
`
const SubMessage = styled.h2`
  padding: 5px;
  color: #c6d0df;
  font-size: 22px;
  text-align: center;
`

const RegisterScreen = ({ history, registerError }) => {
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
    <RegWrapper>
      <RegDiv>
        {registerError && registerError}
        <Title>New user? Register</Title>
        <Form onSubmit={submitRegisterHandler}>
          <label>Username</label>
          <div></div>
          <input
            type='text'
            name='usernameRegister'
            value={usernameRegister}
            onChange={(e) => setUsernameRegister(e.target.value)}
          />
          <div></div>
          <label>Password </label>
          <div></div>
          <input
            type='password'
            name='passwordRegister'
            value={passwordRegister}
            onChange={(e) => setPasswordRegister(e.target.value)}
          />
          <div></div>
          <div className='logregbutt'>
            <input type='submit' value='Submit' />
          </div>
        </Form>
        <SubMessage>Already a member?</SubMessage>
        <div className='screen-switch-butt'>
          <Button href='/login'>Login to your account</Button>
        </div>
      </RegDiv>
    </RegWrapper>
  )
}

export default RegisterScreen
