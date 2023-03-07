import React from 'react'
import { Button } from '@mantine/core'
import axios from 'axios'
import { useEffect , useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';

function PersonalBikeCard({bike , setPersonalBikes , personalBikes , user}) {

  const navigate = useNavigate();
  //console.log(user)

    const deleteBike = async () => {
      const grabToken = window.localStorage.getItem("bearer");
       
        try{
          await axios.get(`http://localhost:5005/bicycles/delete/${bike._id}`, {
            headers : {
              authorization: `Bearer ${grabToken}`
          },
          });
          setPersonalBikes(personalBikes.filter(bicycle => bicycle._id !== bike._id))
          //let filteredBicycles = personalBikes.filter(bicycle => bicycle.owner === user)
          //setPersonalBikes(filteredBicycles)
        } catch (error) {
          console.log(error)
        }
      }



  return (
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
    </div>
    <div>
    <Button type='submit' variant='subtle' color='cyan' >Save</Button>
    <Button component={Link} to={`/bicycle/${bike._id}`} variant='subtle' color='cyan'>Update</Button>
    <Button type='submit' variant='subtle' color='cyan' onClick={deleteBike}>Delete</Button>
    </div>
  </div>      
  )
}

export default PersonalBikeCard