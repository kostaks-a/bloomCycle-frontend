import { AppShell, Box, Button, Header } from '@mantine/core'
import { useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";



function DisplayPlant({plant , plants , setPlants , token }) {



  const savePlantAd = async () => {
    try{
      await axios.get(`http://localhost:5005/plants/${plant._id}/save` , {
        headers : {
          Authorization: `Bearer ${token}`
      },
      })
    } catch (error) {
      console.log(error)
    }
  }

 const unsavePlantAd = async () => {
  try{
    await axios.get(`http://localhost:5005/plants/${plant._id}/remove` , {
      headers : {
        Authorization: `Bearer ${token}`
    },
    })
  } catch (error) {
    console.log(error)
  }
 }


  return (
        <>
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
                      <h3>{plant.age}</h3>
                      <h4>{plant.description}</h4>
                      <h4>{plant.price}</h4>
                      {/* <h4>{plant.owner}</h4> */}
                    </div>
                    <div>
                    <Button type='submit' variant='subtle' color='cyan' onClick={savePlantAd} >Save</Button>
                    <Button type='submit' variant='subtle' color='cyan' onClick={unsavePlantAd} >unSave</Button>
                    </div>
                  </div>
        </>
  )

}

export default DisplayPlant