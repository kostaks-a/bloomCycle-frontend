import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect , useState , useContext} from 'react';
import { useParams } from 'react-router-dom';
import { AppShell, Box, Button, Header } from '@mantine/core'
import PersonalPlantCard from '../components/PersonalPlantCard';
import PersonalBikeCard from '../components/PersonalBikeCard';
import { SessionContext } from '../contexts/SessionContext';


function PersonalAds() {
  const [personalPlants, setPersonalPlants] = useState([]);
  const [personalBikes, setPersonalBikes] = useState([]);


  const {token , currentUser} = useContext(SessionContext)


//console.log (token)
console.log("user from context: " + currentUser._id);
    
const user = useParams().id;
//console.log("user from params " + user)



    const fetchPersonalPlants = async () => {
      const grabToken = window.localStorage.getItem("bearer");
      //console.log(user)
        try {
          //console.log ("token:" + token )    
          const response = await axios.get(`http://localhost:5005/plants/personalAds/${currentUser._id}` , {
            headers : {
              authorization: `Bearer ${grabToken}`
          },
          })
          setPersonalPlants(response.data);
        //console.log(response.data);    
        } catch (error) {
          console.log(error);
        }
      };

      const fetchPersonalBikes = async () => {
        const grabToken = window.localStorage.getItem("bearer");
        //console.log(user)
        try {    
          const response = await axios.get(`http://localhost:5005/bicycles/personalAds/${currentUser._id}` , {
            headers : {
              authorization: `Bearer ${grabToken}`
          },
          })
          setPersonalBikes(response.data);
        //console.log(response.data);    
        } catch (error) {
          console.log(error);
        }
      };
   
      
        useEffect(() => {
          fetchPersonalPlants();
          fetchPersonalBikes()
          //console.log("fetching personal ads");
        }, []);
      

  return (
    <div style={{display : 'flex'}}>
        <div>
           <h1>Plant ads</h1>
           {personalPlants.map((plant) => <PersonalPlantCard key={plant._id} plant={plant} setPersonalPlants={setPersonalPlants} personalPlants={personalPlants} user={user} />)}
        </div>
        <div>
          <h1>Bike ads</h1>
          {personalBikes.map((bike) => <PersonalBikeCard key={bike._id} bike={bike} setPersonalBikes={setPersonalBikes} personalBikes={personalBikes} user={user} />)}
        </div>
    </div>    
  );
}

export default PersonalAds;
