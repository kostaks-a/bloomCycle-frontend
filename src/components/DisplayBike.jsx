import { AppShell, Box, Button, Header } from "@mantine/core";

import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";

function DisplayBike({ bike, bicycles, setBicycles, token, currentUser }) {
  const deleteBike = async () => {
    console.log("delete done");
    try {
      await axios.get(`http://localhost:5005/bicycles/save/${bike._id}`);
      let filteredBicycles = bicycles.filter(
        (bicycle) => bicycle._id !== bike._id
      );
      setBicycles(filteredBicycles);
    } catch (error) {
      console.log(error);
    }
  };

  const saveBikeAd = async () => {
    try {
      await axios.get(`http://localhost:5005/bicycles/${bike._id}/save`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="singleCard">
        <div>
          <img src={bike.image} alt={bike.type} style={{ height: "150px" }} />
        </div>
        <div className="singleCardText">
          <h2>{bike.type}</h2>
          <h3>{bike.description}</h3>
          <h4>{bike.condition}</h4>
          <h4>{bike.price}</h4>
          <h4>{bike.owner}</h4>
        </div>
        <div>
          <Button
            type="submit"
            variant="subtle"
            color="cyan"
            onClick={saveBikeAd}
          >
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
    </>
  );
}

export default DisplayBike;
