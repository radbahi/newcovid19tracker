import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { updateUser } from '../actions/userActions.js'
import styled from 'styled-components'

import axios from 'axios'

import DiseaseGraph from './DiseaseGraph'
import WorldMap from './WorldMap'

const StyledGraphAndMap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const StyledDropdown = styled.div``

const GraphAndMap = () => {
  const dispatch = useDispatch()

  const [diseaseData, setDiseaseData] = useState([])
  const [selectedLocation, setSelectedLocation] = useState({})

  const [worldData, setWorldData] = useState({})

  const userState = useSelector((state) => state.userState)

  useEffect(() => {
    const addDiseaseData = async () => {
      const { data } = await axios.get('http://localhost:3000/locations')
      setDiseaseData(data)
      setWorldData(data[58])
    }
    addDiseaseData()

    console.log('re-render this component')
    userState && setSelectedLocation(userState.location)
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
      </StyledGraphAndMap>
    </div>
  )
}

export default GraphAndMap
