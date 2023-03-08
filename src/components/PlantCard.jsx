import { AppShell, Box, Button, Header } from '@mantine/core'
import { useEffect ,useState} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";



function DisplayPlant({plant , plants , setPlants , token , user}) {
  const [isSaved, setIsSaved] = useState(false);


  const savePlantAd = async () => {
    const grabToken = window.localStorage.getItem("bearer");
    try{
      const response = await axios.get(`http://localhost:5005/plants/${plant._id}/save` , {
        headers : {
          'Authorization': `Bearer ${grabToken}`
      },
      })
      console.log(response.data)
      setIsSaved(true)
      //setPlants(plants.filter(plants => plants._id !== plant._id))  
    } catch (error) {
      console.log(error)
    }
  }

 const unsavePlantAd = async () => {
  const grabToken = window.localStorage.getItem("bearer");
  try{
    const response = await axios.get(`http://localhost:5005/plants/${plant._id}/remove` , {
      headers : {
        'Authorization': `Bearer ${grabToken}`
    },
    })
    console.log(response.data)
    setIsSaved(false)
    //setPlants(plants.filter(plants => plants._id !== plant._id))  
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
                      <h2>variety: {plant.variety}</h2>
                      <h3>age: {plant.age}</h3>
                      <h4>description: {plant.description}</h4>
                      <h4>Price: {plant.price}</h4>
                      <h4>Owner: {plant.owner.username}</h4>
                    </div>
                    <div>
                    {isSaved ? <Button type='submit' variant='subtle' color='cyan' onClick={unsavePlantAd} >unSave</Button> : <Button type='submit' variant='subtle' color='cyan' onClick={savePlantAd} >Save</Button>}
                    </div>
                  </div>
        </>
  )

}

export default DisplayPlant