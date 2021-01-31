import { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import axios from 'axios'

import DiseaseGraph from './DiseaseGraph'

const GraphAndMap = () => {
  const [diseaseData, setDiseaseData] = useState([])

  const [selectedLocation, setSelectedLocation] = useState({})

  useEffect(() => {
    const addDiseaseData = async () => {
      const { data } = await axios.get('http://localhost:3000/locations')
      setDiseaseData(data)
    }
    addDiseaseData()
  }, [])

  const selectLocationHandler = (e) => {
    console.log(e)
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
                onClick={(e) => selectLocationHandler(location)}
                key={location.country}
              >
                {location.country}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
      <DiseaseGraph diseaseData={diseaseData} />
    </div>
  )
}

export default GraphAndMap
