import { AppShell, Box, Button, Header } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function DisplayPlant({ plant, plants, setPlants, token, user }) {
  const savePlantAd = async () => {
    const grabToken = window.localStorage.getItem("bearer");
    try {
      const response = await axios.get(
        `http://localhost:5005/plants/${plant._id}/save`,
        {
          headers: {
            Authorization: `Bearer ${grabToken}`,
          },
        }
      );
      console.log(response.data);
      //setPlants(plants.filter(plants => plants._id !== plant._id))
    } catch (error) {
      console.log(error);
    }
  };

  const unsavePlantAd = async () => {
    const grabToken = window.localStorage.getItem("bearer");
    try {
      const response = await axios.get(
        `http://localhost:5005/plants/${plant._id}/remove`,
        {
          headers: {
            Authorization: `Bearer ${grabToken}`,
          },
        }
      );
      console.log(response.data);
      //setPlants(plants.filter(plants => plants._id !== plant._id))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={plant.image} height={160} alt="plant image" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway dasasdaSdasdasddsasds</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
      );
    </>
  );
}

export default DisplayPlant;
