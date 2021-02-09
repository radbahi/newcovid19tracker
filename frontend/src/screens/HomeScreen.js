import StoryBox from '../components/StoryBox'
import GraphAndMap from '../components/GraphAndMap'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions.js'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const loggedInUser = useSelector((state) => state.loggedInUser)

  const logoutHandler = () => {
    dispatch(logout())
    console.log(loggedInUser)
  }
  return (
    <div>
      <Button onClick={logoutHandler}>LOGOUT</Button>
      <GraphAndMap />
      <StoryBox />
    </div>
  )
}

export default HomeScreen
