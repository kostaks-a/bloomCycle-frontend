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
      await axios.get(`http://localhost:5005/plants/delete/${plant._id}`, {
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
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        width: 250,
        height: 350,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <Card.Section>
        <Image src={plant.image} height={200} alt="plant picture" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{plant.variety}</Text>
        <div>
          <button
            style={{ padding: "0", border: "none", background: "none" }}
            type="submit"
            onClick={deletePlant}
          >
            <Badge color="red" variant="light">
              Delete
            </Badge>
          </button>
          <button
            component={Link}
            to={`/plant/${plant._id}`}
            style={{
              padding: "0",
              border: "none",
              background: "none",
              marginBottom: "10px",
            }}
          >
            <Badge color="blue" variant="light">
              update
            </Badge>
          </button>
        </div>
      </Group>

      <Text size="md" color="black" style={{ marginBottom: "5px" }}>
        {`Variety: ${plant.variety}`}
      </Text>
      <Text size="md" color="black" style={{ marginBottom: "5px" }}>
        {`Age: ${plant.age}`}
      </Text>
      <Text size="md" color="black" style={{ marginBottom: "5px" }}>
        {`Description: ${plant.description}`}
      </Text>
      <Text size="md" color="black" style={{ marginBottom: "5px" }}>
        {`Price: ${plant.price}`}
      </Text>
      {/* <Text size="sm" color="dimmed">
        {plant.owner}
      </Text> */}
    </Card>
  );
}

export default PersonalPlantCard;

{
  /* <div className="singleCard">
    //   <div>
    //     <img src={plant.image} alt={plant.name} style={{ height: "150px" }} />
    //   </div>
    //   <div className="singleCardText">
    //     <h2>{plant.variety}</h2>
    //     <h3>{plant.age}</h3>
    //     <h4>{plant.description}</h4>
    //     <h4>{plant.price}</h4>
    //     <h4>{plant.owner}</h4>
    //   </div>
    //   <div>
    //     <Button
    //       component={Link}
    //       to={`/plant/${plant._id}`}
    //       variant="subtle"
    //       color="cyan"
    //     >
    //       Update
    //     </Button>
    //     <Button
    //       type="submit"
    //       variant="subtle"
    //       color="cyan"
    //       onClick={deletePlant}
    //     >
    //       Delete
    //     </Button>
    //   </div>
    // </div> */
}
