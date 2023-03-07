import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import DisplayPlant from "../../components/DisplayPlant";
import { SessionContext } from "../../contexts/SessionContext";
import PlantSearchBar from "../../components/PlantSearchBar";

function PlantsDisplay() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const { token } = useContext(SessionContext);
  const { currentUser } = useContext(SessionContext);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  };

  /*
useEffect(() => {
  const fetchSearchedPlants = async () => {
    try {
      const response = await axios.get(apiURL + `/search?q=${query}`);
      setBeers(response.data);
      setLoading(false);
      setFilteredPlants(plants.filter((plant) => { plant.variety.toLowerCase().includes(searchQuery.toLowerCase()) }))
      setPlants(filteredPlants)
    } catch (error) {
      console.log(error);
    }
  };

  fetchSearchedPlants();
}, [searchQuery]);

*/

  const fetchPlants = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5005/plants/allplants"
      );
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
      {/* <Container mt={120}>
        <Flex direction={{ base: "column", sm: "row" }} gap="sm" align="center">
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            radius="xl"
          />
          <Button size="xs" radius="xl">
            Search
          </Button>
        </Flex>
      </Container> */}

      <h1>Plants</h1>
      <PlantSearchBar search={search} setSearch={setSearch} />

      {plants
        .filter((plant) => {
          if (plant.variety.toLowerCase().match(search.toLowerCase())) {
            return plant;
          }
        })
        .map((plant) => {
          return (
            <DisplayPlant
              token={token}
              key={plant._id}
              plant={plant}
              setPlants={setPlants}
              plants={plants}
            />
          );
        })}
    </>
  );
}

export default PlantsDisplay;
