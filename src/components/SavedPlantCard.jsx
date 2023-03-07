import { Button } from '@mantine/core'
import axios from "axios";



function SavedPlantCard({ plant , savedPlants, setSavedPlants }) {



 const unsavePlantAd = async (e) => {
  //e.preventDefault()
  const grabToken = window.localStorage.getItem("bearer");
  try{
    const response = await axios.get(`http://localhost:5005/plants/${plant._id}/remove` , {
      headers : {
        'Authorization': `Bearer ${grabToken}`
    },
    })
    console.log(response.data)
    //console.log('Saved Plants after: ', savedPlants);
    setSavedPlants(savedPlants.filter(plants => plants._id !== plant._id))
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
                    <Button type='submit' variant='subtle' color='cyan' onClick={unsavePlantAd} >unSave</Button>
                    </div>
                  </div>
        </>
  )

}

export default SavedPlantCard