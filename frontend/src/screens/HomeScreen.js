import { useState, useEffect } from 'react'
import StoryBox from '../components/StoryBox'
import GraphAndMap from '../components/GraphAndMap'
import { Button } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <div>
      <Button href='/login'>Login</Button>
      <Button href='/register'>Register</Button>
      <GraphAndMap />
      <StoryBox />
    </div>
  )
}

export default HomeScreen
