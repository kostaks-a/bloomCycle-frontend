import React from "react";
import axios from "axios";
import { useState } from "react";
import { Avatar } from '@mantine/core';
import { Accordion, Select, Button } from '@mantine/core';
import { Input } from '@mantine/core';
import { EnvelopeClosedIcon, LockClosedIcon } from '@modulz/radix-icons';

//import { Link } from "react-router-dom";


function Profile() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // const [delete, setDelete] = useState(false);

  const handleUpdate = async (event) => {
    event.preventDefault();
  //  console.log("updated username:", username)

    try {
      const response = await axios.post("http://localhost:5005/auth/update", {
        username: username,
        email: email,
        password: password
      });
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleDelete = async () => {
    setDelete(true);
    try {
      await axios.delete("http://localhost:5005/auth/delete")

    } catch (error) {
      console.log("Error: ", error);
      setDelete(false);
    }
  }

  return (
    <>
      <Avatar src="avatar.png" size="lg" radius="xl" alt = "it's me" />
      <Avatar src={null} alt="no image here" size="lg" radius="xl" />

      <Accordion defaultValue="changePersonalInfo">
      <Accordion.Item value="change-username">
        <Accordion.Control>Change username</Accordion.Control>
        <Accordion.Panel>
            <Input
              placeholder="Update your username"
              value={user.username}
              onChange={(e) => setUsername({ username: e.target.value })}
            />
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="change-email">
        <Accordion.Control>Change email</Accordion.Control>
        <Accordion.Panel>
            <Input
              icon={<EnvelopeClosedIcon />}
              placeholder="Update your email"
              type="email"
              value={user.email}
              onChange={(e) => setEmail({ email: e.target.value })}
            />
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="change-password">
        <Accordion.Control>Change password</Accordion.Control>
        <Accordion.Panel>

        </Accordion.Panel>
      </Accordion.Item>

        <Accordion.Item value="change-location">
          <Accordion.Control>Change location</Accordion.Control>
          <Accordion.Panel> <Select
            mt="md"
            withinPortal
            data={['Berlin', 'Hamburg', 'Svelte', 'Vue']}
            placeholder="Pick one"
            label="Select a city"
          
          />
</Accordion.Panel>
        </Accordion.Item>
    </Accordion>
    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
      <Button onClick={handleUpdate} color="cyan" radius="md">
        Save changes
      </Button>
      <Button onClick={handleDelete} color="cyan" radius="md">
        Delete account
      </Button>
      </div>
    </>
  );
}

export default Profile;
