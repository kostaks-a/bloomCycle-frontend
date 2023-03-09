import { AppShell, Box, Button, Header } from "@mantine/core";

import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";

function BikeCard({ bike, bicycles, setBicycles, token, currentUser }) {
  const [isSaved, setIsSaved] = useState(false);

  //console.log(bike)

  const saveBikeAd = async () => {
    const grabToken = window.localStorage.getItem("bearer");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_HOST}/bicycles/${bike._id}/save`,
        {
          headers: {
            Authorization: `Bearer ${grabToken}`,
          },
        }
      );
      console.log(response.data);
      setIsSaved(true);
      //setBicycles(bicycles.filter(bicycle => bicycle._id === bike._id))
    } catch (error) {
      console.log(error);
    }
  };

  const unsaveBikeAd = async () => {
    try {
      const grabToken = window.localStorage.getItem("bearer");
      const response = await axios.get(
        `${import.meta.env.VITE_HOST}/bicycles/${bike._id}/remove`,
        {
          headers: {
            Authorization: `Bearer ${grabToken}`,
          },
        }
      );
      console.log(response.data);
      setIsSaved(false);
      //setBicycles(bicycles.filter(bicycle => bicycle._id !== bike._id))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="card-container">
      <Link to={`/bicycle/${bike._id}`} class="hero-image-container">
        <img className="hero-image" src={bike.image} alt="{bike.type}" />
      </Link>
      <main class="main-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <h1 style={{ marginRight: "70px" }}>{bike.type}</h1>
          {!isSaved ? (
            <Button
              onClick={saveBikeAd}
              variant="contained"
              style={{ marginTop: "40px" }}
            >
              Save ad
            </Button>
          ) : (
            <Button
              onClick={unsaveBikeAd}
              variant="contained"
              style={{ marginTop: "40px" }}
            >
              Unsave
            </Button>
          )}
        </div>
        <p>{`Condition: ${bike.condition}`}</p>
        <p>{`Size: ${bike.size}`}</p>
        <p>{`Description: ${bike.description}`}</p>
        <div class="flex-row">
          <div class="coin-base">
            <img
              src="https://www.svgrepo.com/show/405291/euro-banknote.svg"
              alt="Ethereum"
              class="small-image"
            />
            <h2>{`${bike.price}€`}</h2>
          </div>
          <div class="time-left">
            <img
              src="https://www.svgrepo.com/show/500012/clock.svg"
              alt="clock"
              class="small-image"
            />
            <p>{`Age:${bike.timestamps}`}</p>
          </div>
        </div>
      </main>
      <div class="card-attribute">
        <img
          src="https://i.postimg.cc/SQBzNQf1/image-avatar.png"
          alt="avatar"
          class="small-avatar"
        />
        <Link to={`/user/${bike.owner.username}`}>{bike.owner.username}</Link>
      </div>
    </div>
  );
}

export default BikeCard;
