import { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import axios from 'axios'

import DiseaseGraph from './DiseaseGraph'

const GraphAndMap = () => {
  const [diseaseData, setDiseaseData] = useState([])

  useEffect(() => {
    const addDiseaseData = async () => {
      const { data } = await axios.get('http://localhost:3000/locations')
      setDiseaseData(data)
    }
    addDiseaseData()
  }, [])

  // PASS SELECTED LOCATION AS PROP INTO DISEASEGRAPH AND JUST PASS ALL DATA INTO WORLD MAP
  //CREATE FUNCTION TO MAKE A SELECTED LOCATION ONCLICK TO THE DROPDOWN ITEMS
  return (
    <div>
      <Dropdown
        menuAlign='right'
        title='Select a location'
        id='dropdown-menu-align-right'
      >
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Select a location
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {diseaseData.map((location) => {
            return (
              <Dropdown.Item href='#/action-1'>
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
