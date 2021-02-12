import StoryBox from '../components/StoryBox'
import GraphAndMap from '../components/GraphAndMap'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/userActions.js'

const HomeScreen = () => {
  const dispatch = useDispatch()

  // const userState = useSelector((state) => state.userState)

  // const { userInfo } = userState

  const logoutHandler = () => {
    dispatch(logout())
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
