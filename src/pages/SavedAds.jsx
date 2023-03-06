import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect , useState , useContext} from 'react';
import { useParams } from 'react-router-dom';
import { AppShell, Box, Button, Header } from '@mantine/core'
import PersonalPlantCard from '../components/PersonalPlantCard';
import PersonalBikeCard from '../components/PersonalBikeCard';
import { SessionContext } from '../contexts/SessionContext';
import DisplayBike from '../components/DisplayBike';



function SavedAds() {
const [savedPlants, setSavedPlants] = useState([]);
const [savedBikes, setSavedBikes] = useState([]);
const [savedAds , setSavedAds] = useState([]);

const {token} = useContext(SessionContext)

const  {currentUser} = useContext(SessionContext);
console.log("user from context: " + currentUser._id);
    
const user = useParams().id;
console.log("user from params: " + user)


const fetchSavedBikes = async () => {
    try {    
      const response = await axios.post(`http://localhost:5005/bicycles/savedAds/${user}`);
      setSavedBikes(response.data);
      console.log(response.data);    
    } catch (error) {
      console.log(error);
    }
  };

  
    useEffect(() => {
      //fetchSavedPlants();
      fetchSavedBikes()
      console.log("fetching saved ads");
    }, []);

  return (
    <div>
        <h1>Saved Bicycles</h1>
          {savedBikes.map((bike) => {
            return (
               <DisplayBike currentUser={currentUser} token={token} key={bike._id} bicycles={savedBikes} setBicycles={setSavedBikes} bike={bike}/>  
            )  
          })}
    </div>
  )
}

export default SavedAds