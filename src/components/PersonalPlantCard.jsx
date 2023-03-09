import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function PersonalPlantCard({ plant, setPersonalPlants, personalPlants }) {
  const navigate = useNavigate();

  const deletePlant = async () => {
    const grabToken = window.localStorage.getItem("bearer");
    try {
      await axios.get(`${import.meta.env.VITE_HOST}/plants/delete/${plant._id}`, {
        headers: {
          authorization: `Bearer ${grabToken}`,
        },
      });
      setPersonalPlants(
        personalPlants.filter((plants) => plants._id !== plant._id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="card-container">
    <Link to={`/plant/${plant._id}`} class="hero-image-container">
      <div className="imageContainer">
        <img class="hero-image" src={plant.image} alt="{plant.variety}" />
      </div>
    </Link>
    <main class="main-content">
      <div style={{ display: "flex", gap: "10px" }}>
        <h1 style={{ marginRight: "70px" }}>{plant.variety}</h1>
        <Link to={`/plant/${plant._id}`}>
          <Button variant="contained" style={{ marginTop: "40px" }}>
            update
          </Button>
        </Link>
        <Button
          onClick={deletePlant}
          variant="contained"
          style={{ marginTop: "40px" }}
        >
          delete
        </Button>
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
    {/* <div class="card-attribute">
      <img
        src="https://i.postimg.cc/SQBzNQf1/image-avatar.png"
        alt="avatar"
        class="small-avatar"
      />
      <p>
        User{" "}
        <span>
          <p>{plant.owner.username}</p>
        </span>
      </p>
    </div> */}
  </div>
  );
}

export default PersonalPlantCard;
