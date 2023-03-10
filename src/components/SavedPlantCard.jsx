import { Button } from "@mantine/core";
import axios from "axios";

function SavedPlantCard({ plant, savedPlants, setSavedPlants }) {
  const unsavePlantAd = async (e) => {
    //e.preventDefault()
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
      //console.log('Saved Plants after: ', savedPlants);
      setSavedPlants(savedPlants.filter((plants) => plants._id !== plant._id));
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
          <Button
            onClick={unsavePlantAd}
            variant="contained"
            color='green.8'
            style={{ marginTop: "40px" }}
          >
            Unsave
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
            <p>{`Age:${plant.timestamps}`}</p>
          </div>
        </div>
      </main>
      <div class="card-attribute">
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
      </div>
    </div>
  );
}

export default SavedPlantCard;
