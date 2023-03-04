import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function BikeUpdate() {
const bikeId = useParams().bikeid
console.log(bikeId)

const fetchBike = async () => {
    try{
     const response = await axios.get(`http://localhost:5005/bicycles/${bikeId}`)
     console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBike();
    console.log("fetching bike");
  }, []);




  return (
    <div>

    </div>
  )
}

export default BikeUpdate