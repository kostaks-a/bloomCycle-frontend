import { AppShell, Box, Button, Header } from '@mantine/core'
import { useEffect } from 'react'
import { Link , NavLink , useNavigate } from "react-router-dom";
import axios from 'axios';


function DisplayBike({bike, bicycles , setBicycles}) {

const navigate = useNavigate();


const deleteBike = async () => {
  console.log('delete done')
  try{
    await axios.get(`http://localhost:5005/bicycles/delete/${bike._id}`)
    let filteredBicycles = bicycles.filter(bicycle => bicycle._id !== bike._id)
    setBicycles(filteredBicycles)
  } catch (error) {
    console.log(error)
  }
  
}


  return (
        <>
        <div className="singleCard">
                    <div>
                      <img
                        src='/./bicycle.jpg'
                        alt={bike.name}
                        style={{ height: "150px" }}
                      />
                    </div>
                    <div className="singleCardText">
                      <h2>{bike.type}</h2>
                      <h3>{bike.description}</h3>
                      <h4>{bike.condition}</h4>
                      <h4>{bike.price}</h4>
                      <h4>{bike.owner}</h4>
                    </div>
                    <div>
                    <Button type='submit' variant='subtle' color='cyan'>Save</Button>
                    <Button component={Link} to={`/bicycle/${bike._id}`} variant='subtle' color='cyan'>Update</Button>
                    <Button type='submit' variant='subtle' color='cyan' onClick={deleteBike}>Delete</Button>
                    </div>
                  </div>
        </>
  )

}

export default DisplayBike