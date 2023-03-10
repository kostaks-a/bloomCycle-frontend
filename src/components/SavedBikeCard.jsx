import { Button } from "@mantine/core";
import axios from "axios";

function SavedBikeCard({ bike, savedBikes, setSavedBikes }) {

  
  const unsaveBikeAd = async () => {
    try {
      const grabToken = window.localStorage.getItem("bearer");
      //console.log(bike._id)
      const response = await axios.get(
        `${import.meta.env.VITE_HOST}/bicycles/${bike._id}/remove`,
        {
          headers: {
            Authorization: `Bearer ${grabToken}`,
          },
        }
      );
      console.log(response.data);
      //console.log('Saved Bikes after: ', savedBikes);
      setSavedBikes(savedBikes.filter((bicycle) => bicycle._id !== bike._id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="card-container">
      <img class="hero-image" src={bike.image} alt="{bike.type}" />
      <main class="main-content">
        <div style={{ display: "flex", gap: "10px" }}>
          <h1 style={{ marginRight: "70px" }}>{bike.type}</h1>
          <Button
            onClick={unsaveBikeAd}
            variant="contained"
            style={{ marginTop: "40px" }}
          >
            Unsave
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
        <p>
          User{" "}
          <span>
            <p>{bike.owner.username}</p>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SavedBikeCard;
