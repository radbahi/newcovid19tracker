import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { updateUser } from '../actions/userActions.js'

import axios from 'axios'

import DiseaseGraph from './DiseaseGraph'

const GraphAndMap = () => {
  const dispatch = useDispatch()
  const [diseaseData, setDiseaseData] = useState([])

  const [selectedLocation, setSelectedLocation] = useState({})
  // HIGHLIGHT SELECTEDLOCATION ON MAP
  //MAYBE JUST DISPATCH TO USER'S LOCATION BACKEND?

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  useEffect(() => {
    const addDiseaseData = async () => {
      const { data } = await axios.get('http://localhost:3000/locations')
      setDiseaseData(data)
    }
    addDiseaseData()
    setSelectedLocation(userInfo.data.user.locations)
  }, [])

  const selectLocationHandler = (location) => {
    dispatch(updateUser({ id: userInfo, location }))
    setSelectedLocation(location)
    //USEDISPATCH HOOK TO UPDATE USER LOCATION HERE
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
      <DiseaseGraph selectedLocation={selectedLocation} />
    </div>
  )
}

export default GraphAndMap
