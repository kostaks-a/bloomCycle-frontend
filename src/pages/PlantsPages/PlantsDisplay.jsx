import React from 'react'
import { Link } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";
import DisplayPlant from "../../components/DisplayPlant";

function PlantsDisplay() {
const [plants, setPlants] = useState([]);
const [loading, setLoading] = useState(true);


const fetchPlants = async () => {
  try {    
    const response = await axios.get('http://localhost:5005/plants/allplants');
    setPlants(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }    
};


useEffect(() => {
    fetchPlants();
    console.log("refreshed");
  }, []);




  return (
    <>
   
          <h1>Plants</h1>
          {plants.map((plant) => {
            return (
               <DisplayPlant plant = {plant}/>  
            )  
          })}
    
    </>

      )
}

export default PlantsDisplay