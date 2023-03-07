import { Button } from '@mantine/core'
import axios from 'axios';


function SavedBikeCard({ bike, savedBikes, setSavedBikes }) {


    const unsaveBikeAd = async () => {
      try{
        const grabToken = window.localStorage.getItem("bearer");
        //console.log(bike._id)
        const response = await axios.get(`http://localhost:5005/bicycles/${bike._id}/remove` , {
          headers : {
            'Authorization': `Bearer ${grabToken}`
        },
        })
        console.log(response.data)
        //console.log('Saved Bikes after: ', savedBikes);
        setSavedBikes(savedBikes.filter(bicycle => bicycle._id !== bike._id))
        
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
                          {/* <h4>Owner: {bike.owner.username}</h4> */}
                          <h4>Why</h4>
                        </div>
                        <div>
                        <Button type='submit' variant='subtle' color='cyan' onClick={unsaveBikeAd} >unSave</Button>
                        </div>
                      </div>
            </>
      )
    
    }

export default SavedBikeCard