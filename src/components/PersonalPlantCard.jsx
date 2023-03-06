import React from 'react'
import { Button } from '@mantine/core'
import axios from 'axios'
import { useEffect , useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useContext } from 'react';

function PersonalPlantCard({plant , setPersonalPlants, personalPlants }) {

  const navigate = useNavigate();


    const deletePlant = async () => {    
        try{
          await axios.get(`http://localhost:5005/plants/delete/${plant._id}`)
          setPersonalPlants(personalPlants.filter(plants => plants._id !== plant._id))
        } catch (error) {
          console.log(error)
        } 
      }




  return (
    <div className="singleCard">
    <div>
      <img
        src='/./monstera.jpg'
        alt={plant.name}
        style={{ height: "150px" }}
      />
    </div>
    <div className="singleCardText">
      <h2>{plant.variety}</h2>
      <h2>{plant.size}</h2>
      <h3>{plant.age}</h3>
      <h4>{plant.description}</h4>
      <h4>{plant.price}</h4>
      {/* <h4>{plant.owner}</h4> */}
    </div>
    <div>
    <Button component={Link} to={`/plant/${plant._id}`} variant='subtle' color='cyan'>Update</Button>
    <Button type='submit' variant='subtle' color='cyan' onClick={deletePlant}>Delete</Button>
    </div>
  </div>    
  )
}

export default PersonalPlantCard