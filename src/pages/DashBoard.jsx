import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

function DashBoard() {
  const theme = useMantineTheme();
  const { token, currentUser } = useContext(SessionContext);

  //console.log(token)
  //console.log(currentUser)
  console.log(currentUser);

  // const secondaryColor =
  //   theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  if (currentUser === "undefined") {
    return <p>Loading</p>;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
          marginTop: "25px",
        }}
      >
        <Card style={{ width: 300 }} shadow="sm" padding="lg">
          <Card.Section>
            <Image
              style={{ height: "auto", margin: "auto", marginBottom: "50px" }}
              src="/wrench.jpg"
              alt="Wrench"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 5,
              marginTop: theme.spacing.sm,
            }}
          >
            <Text style={{ marginBottom: "5px " }} weight={500}>
              You personal Information
            </Text>
          </Group>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Button variant="light" color="blue" fullWidth>
              Change
            </Button>
          </Link>
        </Card>

        <Card style={{ width: 300 }} shadow="sm" padding="lg">
          <Card.Section>
            <Image
              style={{ height: "auto", margin: "auto" }}
              src="/ads.jpg"
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 5,
              marginTop: theme.spacing.sm,
            }}
          >
            <Text weight={500}>My Advertisements</Text>
          </Group>
          <Link
            to={`/ads/${currentUser._id}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Check Now
            </Button>
          </Link>
        </Card>
        <Card style={{ width: 300 }} shadow="sm" padding="lg">
          <Card.Section>
            <Image style={{ height: "auto" }} src="/saved.jpg" alt="Wrench" />
          </Card.Section>

          <Group
            position="apart"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 5,
              marginTop: theme.spacing.sm,
            }}
          >
            <Text weight={500}>Saved ads</Text>
          </Group>
          <Link
            to={`/ads/${currentUser._id}/saved`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Check Now
            </Button>
          </Link>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <Card style={{ width: 300 }} shadow="sm" padding="lg">
          <Card.Section>
            <Image
              style={{ height: "auto", marginBottom: "125px" }}
              src="/bicycle.jpg"
              alt="bicycle"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{
              display: "flex",
              justifyContent: "center",

              marginTop: theme.spacing.sm,
            }}
          >
            <Text style={{ marginBottom: "10px" }} weight={500}>
              Create an ad for your bicycle
            </Text>
          </Group>
          <Link to="/bicycle/create" style={{ textDecoration: "none" }}>
            <Button variant="light" color="blue" fullWidth>
              Create
            </Button>
          </Link>
        </Card>

        <Card style={{ width: 300 }} shadow="sm" padding="lg">
          <Card.Section>
            <Image
              style={{ height: "auto", marginBottom: "25px" }}
              src="/plant.jpg"
              alt="Bicycle img"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 5,
              marginTop: theme.spacing.sm,
            }}
          >
            <Text style={{ marginBottom: "5px" }} weight={500}>
              Create an ad for your plant
            </Text>
          </Group>
          <Link to="/plant/create" style={{ textDecoration: "none" }}>
            <Button variant="light" color="blue" fullWidth>
              Create
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default DashBoard;
