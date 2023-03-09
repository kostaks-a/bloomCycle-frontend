import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function PersonalBikeCard({ bike, setPersonalBikes, personalBikes, user }) {
  const navigate = useNavigate();
  //console.log(user)

  const deleteBike = async () => {
    const grabToken = window.localStorage.getItem("bearer");

    try {
      await axios.get(`${import.meta.env.VITE_HOST}/bicycles/delete/${bike._id}`, {
        headers: {
          authorization: `Bearer ${grabToken}`,
        },
      });
      setPersonalBikes(
        personalBikes.filter((bicycle) => bicycle._id !== bike._id)
      );
      //let filteredBicycles = personalBikes.filter(bicycle => bicycle.owner === user)
      //setPersonalBikes(filteredBicycles)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="card-container">
      <Link to={`/bicycle/${bike._id}`} class="hero-image-container">
        <img class="hero-image" src={bike.image} alt="{bike.type}" />
      </Link>
      <main class="main-content">
        <div style={{ display: "flex", gap: "10px" }}>
          <h1 style={{ marginRight: "70px" }}>{bike.type}</h1>
          <Link to={`/bicycle/${bike._id}`}>
            <Button variant="contained" style={{ marginTop: "40px" }}>
              update
            </Button>
          </Link>
          <Button
            onClick={deleteBike}
            variant="contained"
            style={{ marginTop: "40px" }}
          >
            delete
          </Button>
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
            <p>{`Published:${bike.createdAt.slice(0, 10)}`}</p>
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
            <p>{bike.owner.username}</p>
          </span>
        </p>
      </div> */}
    </div>
  );
  );
}

export default PersonalBikeCard;
