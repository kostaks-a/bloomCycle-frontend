import React from 'react'
import { Link } from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";
import DisplayBike from "../../components/DisplayBike";

function BicyclesDisplay() {
const [bicycles, setBicycles] = useState([]);
const [loading, setLoading] = useState(true);


const fetchBikes = async () => {
  try {    
    const response = await axios.get('http://localhost:5005/bicycles/allbicycles');
    setBicycles(response.data);
    console.log(response.data);    
  } catch (error) {
    console.log(error);
  }
};



  useEffect(() => {
    fetchBikes();
    console.log("refreshed");
  }, []);




  return (
    <>
   
          <h1>Bicycles</h1>
          {bicycles.map((bike) => {
            return (
               <DisplayBike  key={bike._id} bicycles={bicycles} setBicycles = {setBicycles} bike = {bike}/>  
            )  
          })}
    
    </>

      )
}

export default BicyclesDisplay