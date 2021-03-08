import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { updateUser } from '../actions/userActions.js'
import styled from 'styled-components'

import axios from 'axios'

import DiseaseGraph from './DiseaseGraph'
import WorldMap from './WorldMap'
import StoryBox from './StoryBox'

const StyledGraphAndMap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
`
const StyledDropdown = styled.div``

const GraphAndMap = () => {
  const dispatch = useDispatch()

  const [diseaseData, setDiseaseData] = useState([])
  const [selectedLocation, setSelectedLocation] = useState({})
  const [showStories, setShowStories] = useState(false)
  const [stories, setStories] = useState([])
  const [worldData, setWorldData] = useState({})

  const userState = useSelector((state) => state.userState)

  useEffect(() => {
    const addDiseaseData = async () => {
      const { data } = await axios.get('http://localhost:3000/locations')
      setDiseaseData(data)
      setWorldData(data[58])
    }
    addDiseaseData()
    console.log('addDiseaseData done')

    userState && setSelectedLocation(userState.location)

    const addStories = async () => {
      const { data } = await axios.get('http://localhost:3000/stories')
      setStories(data)
    }
    addStories()
    console.log('setStories done')
  }, [userState])

  const selectLocationHandler = (location) => {
    dispatch(updateUser({ id: userState.id, location: [location] }))
    // setSelectedLocation(location)
    console.log(location.country)
  }

  // PASS SELECTED LOCATION AS PROP INTO DISEASEGRAPH AND JUST PASS ALL DATA INTO WORLD MAP
  // CREATE FUNCTION TO MAKE A SELECTED LOCATION ONCLICK TO THE DROPDOWN ITEMS
  return (
    <div>
      <div className='bizmarquee'>
        <h1 className='marquee'>
          Global Active: {worldData.active}, Global Deaths: {worldData.deaths},
          Global Confirmed Recovered: {worldData.recovered}, Global
          Vaccinations: {worldData.vaccinations}
        </h1>
      </div>
      <StyledGraphAndMap>
        <WorldMap selectedLocation={selectedLocation} />
        {showStories ? (
          <div>
            <button onClick={() => setShowStories(!showStories)}>
              Switch to graph
            </button>
            <StoryBox stories={stories} />
          </div>
        ) : (
          <div>
            <button onClick={() => setShowStories(!showStories)}>
              Switch to stories
            </button>
            <StyledDropdown>
              <Dropdown
                menualign='right'
                title='Select a location'
                id='dropdown-menu-align-right'
              >
                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  Select a location
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {diseaseData.map((location) => {
                    return (
                      <Dropdown.Item
                        onClick={() => selectLocationHandler(location)}
                        key={location.country}
                      >
                        {location.country}
                      </Dropdown.Item>
                    )
                  })}
                </Dropdown.Menu>
              </Dropdown>
              {selectedLocation
                ? `${selectedLocation.country}`
                : 'Please select a country'}
              <DiseaseGraph selectedLocation={selectedLocation} />
            </StyledDropdown>
          </div>
        )}
      </StyledGraphAndMap>
    </div>
  )
}

export default GraphAndMap
