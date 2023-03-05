import React from 'react'
import { Link } from "react-router-dom";
import { useEffect , useState , useContext} from "react";
import axios from "axios";
import DisplayPlant from "../../components/DisplayPlant";
import { SessionContext } from '../../contexts/SessionContext';

function PlantsDisplay() {
const [plants, setPlants] = useState([]);
const [loading, setLoading] = useState(true);


const {token} = useContext(SessionContext)
const {currentUser} = useContext(SessionContext)



const fetchPlants = async () => {
  try {    
    const response = await axios.get('http://localhost:5005/plants/allplants');
    setPlants(response.data);
    //console.log(response.data);
  } catch (error) {
    console.log(error);
  }    
};


useEffect(() => {
    fetchPlants();
    console.log("plants fetched");
  }, []);




  return (
    <>
   
          <h1>Plants</h1>
          {plants.map((plant) => {
            return (
               <DisplayPlant token={token} key={plant._id} plant = {plant} setPlants={setPlants} plants={plants} />  
            )  
          })}
    
    </>

      )
}

export default PlantsDisplay