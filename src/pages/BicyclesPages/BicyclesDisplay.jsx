import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import BikeCard from "../../components/BikeCard";
import { SessionContext } from '../../contexts/SessionContext';
import BicycleSearchBar from "../../components/BicycleSearchBar";


function BicyclesDisplay() {
  const [bicycles, setBicycles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

const {token} = useContext(SessionContext)
const {currentUser} = useContext(SessionContext)





 
    const fetchBikes = async () => {
      try { 
        const grabToken = window.localStorage.getItem("bearer");
        //console.log(grabToken, "hello token")   
        const response = await axios.get('http://localhost:5005/bicycles/allbicycles' , {
          headers : {
            'Authorization': `Bearer ${grabToken}`
        },
        })
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
          <BicycleSearchBar search={search} setSearch={setSearch} />
          {bicycles ? bicycles.filter((bike) => {
          if (bike.type.toLowerCase().match(search.toLowerCase())) {
            return bike;
          }
        }).map((bike) => {
            return (
               <BikeCard currentUser={currentUser} token={token} key={bike._id} bicycles={bicycles} setBicycles={setBicycles} bike={bike}/>  
            )  
          }) : <h3>Loading...</h3>}
    
    </>
  );
}

export default BicyclesDisplay;
