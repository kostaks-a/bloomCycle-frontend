import { AppShell, Box, Button, Header } from '@mantine/core'

import { Link , NavLink , useNavigate } from "react-router-dom";
import axios from 'axios';
import { useContext , useState} from 'react';



function DisplayBike({bike, bicycles , setBicycles , token , currentUser}) {
  // const [saveButton, setSaveButton] = useState('');

  let saveButton = false

  if (bike.owner !== currentUser._id) {
    saveButton = true;
  }

  console.log(saveButton)

  const handleSaveButton = () => {
    preventDefault()
    saveBikeAd()
  };

  

const saveBikeAd = async () => {
  try{
    await axios.get(`http://localhost:5005/bicycles/${bike._id}/save` , {
      headers : {
        Authorization: `Bearer ${token}`
    },
    })
  } catch (error) {
    console.log(error)
  }
}

const unsaveBikeAd = async () => {
  try{
    await axios.get(`http://localhost:5005/bicycles/${bike._id}/remove` , {
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
                    <Button type='submit' variant='subtle' color='cyan' onClick={saveButton ? saveBikeAd : unsaveBikeAd} >{saveButton ? 'Save' : 'Remove from saved'}</Button>
                    </div>
                  </div>
        </>
  )

}

export default DisplayBike