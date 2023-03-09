import { AppShell, Box, Button, Header } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PlantCard({ plant, plants, setPlants, token, user }) {
  const [isSaved, setIsSaved] = useState(false);

  const savePlantAd = async () => {
    const grabToken = window.localStorage.getItem("bearer");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_HOST}/plants/${plant._id}/save`,
        {
          headers: {
            Authorization: `Bearer ${grabToken}`,
          },
        }
      );
      console.log(response.data);
      setIsSaved(true);
      //setPlants(plants.filter(plants => plants._id !== plant._id))
    } catch (error) {
      console.log(error);
    }
  };

  const unsavePlantAd = async () => {
    const grabToken = window.localStorage.getItem("bearer");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_HOST}/plants/${plant._id}/remove`,
        {
          headers: {
            Authorization: `Bearer ${grabToken}`,
          },
        }
      );
      console.log(response.data);
      setIsSaved(false);
      //setPlants(plants.filter(plants => plants._id !== plant._id))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="card-container">
      <img class="hero-image" src={plant.image} alt="Spinning glass cube" />

      <main class="main-content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>{plant.variety}</h1>
          {!isSaved ? (
            <Button
              onClick={savePlantAd}
              variant="contained"
              style={{ marginTop: "40px" }}
            >
              Save ad
            </Button>
          ) : (
            <Button
              onClick={unsavePlantAd}
              variant="contained"
              style={{ marginTop: "40px" }}
            >
              Unsave
            </Button>
          )}
        </div>
        <p>{plant.description}</p>
        <div class="flex-row">
          <div class="coin-base">
            <img
              src="https://www.svgrepo.com/show/405291/euro-banknote.svg"
              alt="Ethereum"
              class="small-image"
            />
            <h2>{`${plant.price}€`}</h2>
          </div>
          <div class="coin-base">
            <img
              src="https://www.svgrepo.com/show/406848/party-popper.svg"
              alt="Ethereum"
              class="small-image"
            />
            <h2>{`${plant.age} Years`}</h2>
          </div>
          <div class="time-left">
            <img
              src="https://www.svgrepo.com/show/500012/clock.svg"
              alt="clock"
              class="small-image"
            />
            <p>{`Published:${plant.createdAt.slice(0, 10)}`}</p>
          </div>
        </div>
      </main>
      <div class="card-attribute">
        <img
          src={plant.owner.image}
          alt="avatar"
          class="small-avatar"
        />
        <Link to={`/user/${plant.owner.username}`}>{plant.owner.username}</Link>
      </div>
    </div>
  );
}

export default PlantCard;

{/* <Link to={`/user/${plant.owner.username}`}>{plant.owner.username}</Link> */}

{/* <div class="card-attribute">
        <img
          src="https://i.postimg.cc/SQBzNQf1/image-avatar.png"
          alt="avatar"
          class="small-avatar"
        />
        <Link to={`/user/${plant.owner.username}`}>{plant.owner.username}</Link>
      </div> */}