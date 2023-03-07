import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppShell, Box, Button, Header } from "@mantine/core";

function PersonalAds() {
  const [personalPlants, setPersonalPlants] = useState([]);
  const [personalBikes, setPersonalBikes] = useState([]);

  const user = useParams().id;
  console.log(user);

  const fetchPersonalPlants = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5005/plants/personalAds/${user}`
      );
      setPersonalPlants(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPersonalBikes = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5005/bicycles/personalAds/${user}`
      );
      setPersonalBikes(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPersonalPlants();
    fetchPersonalBikes();
    console.log("fetching personal ads");
  }, []);

  const deleteBike = async () => {
    try {
      await axios.get(`http://localhost:5005/bicycles/delete/${bicycle._id}`);
      let filteredBicycles = bicycles.filter(
        (bicycle) => bicycle._id !== bicycle._id
      );
      setBicycles(filteredBicycles);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlant = async () => {
    try {
      await axios.get(`http://localhost:5005/plants/delete/${plant._id}`);
      let filteredPlants = plants.filter((plant) => plant._id !== plant._id);
      setPlants(filteredPlants);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <div style={{ display: "flex" }}>
        <div>
          <h1>Plant ads</h1>
          {personalPlants.map((plant) => (
            <div className="singleCard">
              <div>
                <img
                  src={plant.image}
                  alt={plant.name}
                  style={{ height: "150px" }}
                />
              </div>
              <div className="singleCardText">
                <h2>{plant.variety}</h2>
                <h3>{plant.age}</h3>
                <h4>{plant.description}</h4>
                <h4>{plant.price}</h4>
                {/* <h4>{plant.owner}</h4> */}
              </div>
              <div>
                <Button
                  component={Link}
                  to={`/plant/${plant._id}`}
                  variant="subtle"
                  color="cyan"
                >
                  Update
                </Button>
                <Button
                  type="submit"
                  variant="subtle"
                  color="cyan"
                  onClick={deletePlant}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h1>Bike ads</h1>
          {personalBikes.map((bike) => (
            <div className="singleCard">
              <div>
                <img
                  src={bike.image}
                  alt={bike.name}
                  style={{ height: "150px" }}
                />
              </div>
              <div className="singleCardText">
                <h2>{bike.type}</h2>
                <h3>{bike.description}</h3>
                <h4>{bike.condition}</h4>
                <h4>{bike.price}</h4>
              </div>
              <div>
                <Button type="submit" variant="subtle" color="cyan">
                  Save
                </Button>
                <Button
                  component={Link}
                  to={`/bicycle/${bike._id}`}
                  variant="subtle"
                  color="cyan"
                >
                  Update
                </Button>
                <Button
                  type="submit"
                  variant="subtle"
                  color="cyan"
                  onClick={deleteBike}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PersonalAds;
