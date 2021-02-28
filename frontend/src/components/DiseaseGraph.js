import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts'

const DiseaseGraph = ({ selectedLocation }) => {
  const data = [
    {
      name: 'Active',
      uv: selectedLocation
        ? Math.round(selectedLocation.active / 6)
        : 'Please select a country above',
      pv: selectedLocation
        ? selectedLocation.active
        : 'Please select a country above',
      amt: selectedLocation
        ? selectedLocation.active
        : 'Please select a country above',
    },
    {
      name: 'Confirmed',
      uv: selectedLocation
        ? Math.round(selectedLocation.confirmed / 6)
        : 'Please select a country above',
      pv: selectedLocation
        ? selectedLocation.confirmed
        : 'Please select a country above',
      amt: selectedLocation
        ? selectedLocation.confirmed
        : 'Please select a country above',
    },
    {
      name: 'Deaths',
      uv: selectedLocation
        ? Math.round(selectedLocation.deaths / 6)
        : 'Please select a country above',
      pv: selectedLocation
        ? selectedLocation.deaths
        : 'Please select a country above',
      amt: selectedLocation
        ? selectedLocation.deaths
        : 'Please select a country above',
    },
    {
      name: 'Recovered',
      uv: selectedLocation
        ? Math.round(selectedLocation.recovered / 6)
        : 'Please select a country above',
      pv: selectedLocation
        ? selectedLocation.recovered
        : 'Please select a country above',
      amt: selectedLocation
        ? selectedLocation.recovered
        : 'Please select a country above',
    },
    {
     name: 'Vaccinations',
      uv: selectedLocation
        ? Math.round(selectedLocation.vaccinations / 6)
        : 'Please select a country above',
      pv: selectedLocation
        ? selectedLocation.vaccinations
        : 'Please select a country above',
      amt: selectedLocation
        ? selectedLocation.vaccinations
        : 'Please select a country above',
    }
  ]

  //CHART SCALES WITH EACH COUNTRY DUE TO LARGE DIFFERENCES BETWEEN COUNTRY DATA
  // MAKE USER KNOWN TO THIS FACT

  return (
    <div>
      <BarChart width={600} height={300} data={data}>
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
