import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect , useState , useContext} from 'react';
import { useParams } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';
import SavedBikeCard from '../components/SavedBikeCard';
import SavedPlantCard from '../components/SavedPlantCard';



function SavedAds() {
const [savedPlants, setSavedPlants] = useState([]);
const [savedBikes, setSavedBikes] = useState([]);

const {token , currentUser} = useContext(SessionContext)

//console.log(token)
console.log("user from context: " + currentUser._id);
    
const user = useParams().id;
console.log("user from params: " + user)


const fetchSavedBikes = async () => {
  const grabToken = window.localStorage.getItem("bearer");
    try {    
      const response = await axios.get(`${import.meta.env.VITE_HOST}/bicycles/savedAds/${currentUser._id}` , {
        headers : {
          authorization: `Bearer ${grabToken}`
      },
      });
      setSavedBikes(response.data);
      console.log('Saved Bikes: ', response.data);
      //console.log(response.data);    
    } catch (error) {
      console.log(error);
    }
  };


  const fetchSavedPlants = async () => {
    const grabToken = window.localStorage.getItem("bearer");
    try {    
      const response = await axios.get(`${import.meta.env.VITE_HOST}/plants/savedAds/${currentUser._id}`  , {
        headers : {
          authorization: `Bearer ${grabToken}`
      },
      });
      setSavedPlants(response.data);
      //console.log(response.data);    
    } catch (error) {
      console.log(error);
    }
  };
  
    useEffect(() => {
      fetchSavedPlants();
      fetchSavedBikes()
    }, []);

  return (
    <div className="pageswithfooter">
    <h1 style = {{ display:'flex' ,justifyContent:'center' , alignItems:'center'}}>Saved Ads</h1>
    <div style = {{ display:'flex' , justifyContent:'center' , gap: '20px'}}>
    <div>
          {savedBikes.map((bike) => {
            return (
               <SavedBikeCard user={user} currentUser={currentUser} token={token} key={bike._id}  savedBikes={savedBikes} setSavedBikes={setSavedBikes} bike={bike} />  
            )  
          })}
    </div>
    <div>
          {savedPlants.map((plant) => {
            return (
               <SavedPlantCard user={user} currentUser={currentUser} token={token} key={plant._id} savedPlants={savedPlants} setSavedPlants={setSavedPlants} plant={plant}/>  
            )  
          })}
    </div>
  </div>
  </div>
  )
}

export default SavedAds