import { AppShell, Box, Button, Header } from '@mantine/core'

import { Link , NavLink , useNavigate } from "react-router-dom";
import axios from 'axios';
import { useContext , useState} from 'react';



function DisplayBike({bike, bicycles , setBicycles , token , currentUser}) {
  // const [saveButton, setSaveButton] = useState('');



const saveBikeAd = async () => {
  const grabToken = window.localStorage.getItem("bearer");
  try{    
    const response = await axios.get(`http://localhost:5005/bicycles/${bike._id}/save` , {
      headers : {
        'Authorization': `Bearer ${grabToken}`
    },
    })
    console.log(response.data)
    //setBicycles(bicycles.filter(bicycle => bicycle._id === bike._id))
  } catch (error) {
    console.log(error)
  }
}

const unsaveBikeAd = async () => {
  try{
    const grabToken = window.localStorage.getItem("bearer");
    const response = await axios.get(`http://localhost:5005/bicycles/${bike._id}/remove` , {
      headers : {
        'Authorization': `Bearer ${grabToken}`
    },
    })
    console.log(response.data)
    //setBicycles(bicycles.filter(bicycle => bicycle._id !== bike._id))
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
                      <h2>Type: {bike.type}</h2>
                      <h3>Description: {bike.description}</h3>
                      <h4>Condition: {bike.condition}</h4>
                      <h4>Price: {bike.price}</h4>
                      <h4>Owner: {bike.owner.username}</h4>
                      <h4>Why</h4>
                    </div>
                    <div>
                    <Button type='submit' variant='subtle' color='cyan' onClick={saveBikeAd} >Save</Button>
                    <Button type='submit' variant='subtle' color='cyan' onClick={unsaveBikeAd} >unSave</Button>
                    </div>
                  </div>
        </>
  )

}

export default DisplayBike