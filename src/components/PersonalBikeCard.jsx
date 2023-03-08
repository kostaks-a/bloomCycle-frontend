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
      await axios.get(`http://localhost:5005/bicycles/delete/${bike._id}`, {
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
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        width: 250,
        height: 400,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <Card.Section>
        <Image src={bike.image} height={200} width={200} alt="plant picture" />
      </Card.Section>

      <Group position="apart" mt="lg" mb="lg">
        <Badge
          variant="gradient"
          gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        >
          {bike.name}
        </Badge>
        <div style={{}}>
          <button
            style={{ padding: "0", border: "none", background: "none" }}
            type="submit"
            onClick={deleteBike}
          >
            <Badge color="red" variant="filled">
              Delete
            </Badge>
          </button>
          <button
            component={Link}
            to={`/bicycle/${bike._id}`}
            style={{
              padding: "0",
              border: "none",
              background: "none",
              marginBottom: "10px",
            }}
          >
            <Badge color="red" variant="filled">
              update
            </Badge>
          </button>
        </div>
      </Group>
      <Group
        style={{ display: "flex", flexDirection: "column" }}
        position="apart"
        mt="md"
        mb="xs"
      >
        <Badge
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          {`Age: ${bike.type}`}
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          {`Description: ${bike.description}`}
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          {`Condition: ${bike.condition}`}
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          {`Price: ${bike.price}`}
        </Badge>
      </Group>

      {/* <Text size="sm" color="dimmed">
            {plant.owner}
          </Text> */}
    </Card>
  );
  //   return (
  // <div className="singleCard">
  //               <div>
  //                 <img
  //                   src={bike.image}
  //                   alt={bike.name}
  //                   style={{ height: "150px" }}
  //                 />
  //               </div>
  //               <div className="singleCardText">
  //                 <h2>{bike.type}</h2>
  //                 <h3>{bike.description}</h3>
  //                 <h4>{bike.condition}</h4>
  //                 <h4>{bike.price}</h4>
  //               </div>
  //               <div>
  //                 <Button type="submit" variant="subtle" color="cyan">
  //                   Save
  //                 </Button>
  //                 <Button
  //                   component={Link}
  //                   to={`/bicycle/${bike._id}`}
  //                   variant="subtle"
  //                   color="cyan"
  //                 >
  //                   Update
  //                 </Button>
  //                 <Button
  //                   type="submit"
  //                   variant="subtle"
  //                   color="cyan"
  //                   onClick={deleteBike}
  //                 >
  //                   Delete
  //                 </Button>
  //               </div>
  //             </div>
  //   )
}

export default PersonalBikeCard;
