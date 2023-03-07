import React from 'react'
import { Link } from "react-router-dom";
import { Input, Button, Container, Flex } from "@mantine/core";
import { useEffect , useState , useContext} from "react";
import axios from "axios";
import PlantCard from "../../components/PlantCard";
import { SessionContext } from '../../contexts/SessionContext';
import PlantSearchBar from '../../components/PlantSearchBar';

function PlantsDisplay() {
const [plants, setPlants] = useState([]);
const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");

const {token} = useContext(SessionContext)
const {currentUser} = useContext(SessionContext)



const fetchPlants = async () => {
  const grabToken = window.localStorage.getItem("bearer")
  try {    
    const response = await axios.get('http://localhost:5005/plants/allplants', {
      headers : {
        'Authorization': `Bearer ${grabToken}`
    },
  })
    setPlants(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }    
};

useEffect(() => {
    fetchPlants();
  }, []);




  return (
    <>   
  
          <h1>Plants</h1>
          <PlantSearchBar search={search} setSearch={setSearch} />

        {plants
        .filter((plant) => {
          if (plant.variety.toLowerCase().match(search.toLowerCase())) {
            return plant;
          }
        }).map((plant) => {
            return (
               <PlantCard token={token} key={plant._id} plant = {plant} setPlants={setPlants} plants={plants} />  
            )  
          })}
    
    </>

      )
}

export default PlantsDisplay