import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

function Profile() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 300 }}>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image
            src=""
            height={160}
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
          <Text weight={500}>Change Username</Text>
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

      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src="./image.png" height={160} alt="Norway" />
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
          <Text weight={500}>Change Password</Text>
        </Group>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Check now
        </Button>
      </Card>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src="./image.png" height={160} alt="Norway" />
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
          <Text weight={500}>Change e-mail</Text>
        </Group>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Read
        </Button>
      </Card>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src="./image.png" height={160} alt="Norway" />
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
          <Text weight={500}>Change Location</Text>
        </Group>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Read
        </Button>
      </Card>
    </div>
  );
}

export default Profile;
