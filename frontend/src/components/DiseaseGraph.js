import { useEffect, useState } from 'react'
import axios from 'axios'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts'

const DiseaseGraph = ({ diseaseData }) => {
  const [data, setData] = useState([])
  const [selectedLocation, setSelectedLocation] = useState({})
  console.log(diseaseData)

  //   useEffect(() => {
  //     const addData = async () => {
  //       const { data } = await axios.get('http://localhost:3000/locations')
  //       setData(data)
  //     }
  //     addData()
  //   })

  //   const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }]

  return (
    <div>
      <BarChart width={600} height={300} data={diseaseData}>
        <XAxis dataKey='name' stroke='#8884d8' />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: '#f5f5f5',
            border: '1px solid #d5d5d5',
            borderRadius: 3,
            lineHeight: '40px',
          }}
        />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <Bar dataKey='uv' fill='#8884d8' barSize={30} />
      </BarChart>
    </div>
  )
}

export default DiseaseGraph
