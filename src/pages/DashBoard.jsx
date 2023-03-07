import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
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
  const {currentUser} = useContext(SessionContext)
  //console.log(currentUser._id)
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Card style={{ width: 300}} shadow="sm" padding="lg">
        <Card.Section>
          <Image
            src="https://media.istockphoto.com/id/845292864/pt/vetorial/wrench-icon.jpg?s=170667a&w=0&k=20&c=jharj_irCKUV04A0T7X2kG0wFNNhXdsR9HwoUkoS90Y="
            height={160}
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
          <Text weight={500}>You personal Information</Text>
        </Group>
        <Link to='/profile' style={{ textDecoration: 'none' }}>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Change
        </Button>
        </Link>
        
      </Card>

      <Card style={{ width: 300}} shadow="sm" padding="lg">
        <Card.Section>
          <Image src="/ads.jpg" height={160} alt="Norway" />
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
        <Link to={`/ads/${currentUser._id}`} style={{ textDecoration: 'none' }}>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Check now
        </Button>
        </Link>
      </Card>
      <Card style={{ width: 300}} shadow="sm" padding="lg">
        <Card.Section>
          <Image src="/messages_img.jpg" height={160} alt="Norway" />
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
          <Text weight={500}>Messages</Text>
        </Group>
        <Link to='/profile' style={{ textDecoration: 'none' }}></Link>  
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Read
        </Button>
      </Card>

      <Card style={{ width: 300}} shadow="sm" padding="lg">
        <Card.Section>
          <Image
            src="https://media.istockphoto.com/id/845292864/pt/vetorial/wrench-icon.jpg?s=170667a&w=0&k=20&c=jharj_irCKUV04A0T7X2kG0wFNNhXdsR9HwoUkoS90Y="
            height={160}
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
          <Text weight={500}>Create an ad for your bicycle</Text>
        </Group>
        <Link to='/bicycle/create' style={{ textDecoration: 'none' }}>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Fill up the form
        </Button>
        </Link>
        
      </Card>

      <Card style={{ width: 300}} shadow="sm" padding="lg">
        <Card.Section>
          <Image
            src="https://media.istockphoto.com/id/845292864/pt/vetorial/wrench-icon.jpg?s=170667a&w=0&k=20&c=jharj_irCKUV04A0T7X2kG0wFNNhXdsR9HwoUkoS90Y="
            height={160}
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
          <Text weight={500}>Create an ad for your plant</Text>
        </Group>
        <Link to='/plant/create' style={{ textDecoration: 'none' }}>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Fill up the form
        </Button>
        </Link>
        
      </Card>

      <Card style={{ width: 300}} shadow="sm" padding="lg">
        <Card.Section>
          <Image
            src="https://media.istockphoto.com/id/845292864/pt/vetorial/wrench-icon.jpg?s=170667a&w=0&k=20&c=jharj_irCKUV04A0T7X2kG0wFNNhXdsR9HwoUkoS90Y="
            height={160}
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
          <Text weight={500}>Saved ads</Text>
        </Group>
        <Link to={`/ads/${currentUser._id}/saved`} style={{ textDecoration: 'none' }}>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Fill up the form
        </Button>
        </Link>
        
      </Card>
    </div>
  );
}

export default DashBoard;