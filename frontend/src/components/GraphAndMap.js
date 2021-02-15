import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { updateUser } from '../actions/userActions.js'

import axios from 'axios'

import DiseaseGraph from './DiseaseGraph'
import WorldMap from './WorldMap'

const GraphAndMap = () => {
  const dispatch = useDispatch()
  const [diseaseData, setDiseaseData] = useState([])

  const [selectedLocation, setSelectedLocation] = useState({})
  // HIGHLIGHT SELECTEDLOCATION ON MAP
  //MAYBE JUST DISPATCH TO USER'S LOCATION BACKEND?

  const userState = useSelector((state) => state.userState)

  const { userInfo } = userState

  useEffect(() => {
    const addDiseaseData = async () => {
      const { data } = await axios.get('http://localhost:3000/locations')
      setDiseaseData(data)
    }

    addDiseaseData()

    userInfo && setSelectedLocation(userInfo.user.location)
  }, [userInfo])

  const selectLocationHandler = (location) => {
    dispatch(updateUser({ id: userInfo.user.id, location: [location] }))
    setSelectedLocation(location)
  }

  // PASS SELECTED LOCATION AS PROP INTO DISEASEGRAPH AND JUST PASS ALL DATA INTO WORLD MAP
  //CREATE FUNCTION TO MAKE A SELECTED LOCATION ONCLICK TO THE DROPDOWN ITEMS
  return (
    <div>
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
      <WorldMap selectedLocation={selectedLocation} />
    </div>
  )
}

export default GraphAndMap
