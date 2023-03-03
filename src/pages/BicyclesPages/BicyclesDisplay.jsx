import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function BicyclesDisplay() {
const [bicycles, setBicycles] = useState([]);
const [loading, setLoading] = useState(true);


const fetchBikes = async () => {    
    const response = await axios.get('http://localhost:5005/bicycles/');
    setBicycles(response.data);
    console.log(response.data);    
};


useEffect(() => {
    fetchData();
    console.log("refreshed");
  }, []);




  return (
    <>
        {/* <h1>Bicycles</h1>
          {allBikes.map((bike) => {
            return (

            )  
          })} */}
    
    </>

      )
}

export default BicyclesDisplay