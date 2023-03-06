import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
//import { Link } from "react-router-dom";
import { Avatar } from '@mantine/core';
import { Accordion, Select, Button, PasswordInput } from '@mantine/core';
import { Input } from '@mantine/core';
import { EnvelopeClosedIcon, LockClosedIcon } from '@modulz/radix-icons';


function Profile() {
 // const { user, isAuthenticated } = useContext(SessionContext);
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState();
  //const [delete, setDelete] = useState(false);

  useEffect(() => {
    setCurrentUser(user);
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log("updated username:", username)

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
    //Miguel: on the line below we need to change the avatar.png to 
    //the user image with cloudinary
       <>
       <h1>Welcome, {user.username} !</h1>
      {/* <Avatar src="avatar.png" size="lg" radius="xl" alt = "it's me" /> */}
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
              icon={< EnvelopeClosedIcon />}
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
            <PasswordInput
              icon={< LockClosedIcon />}
              placeholder="Current password"
              type="password"
              value={user.password}
            />
            <PasswordInput
              description="Password must have at least 5 digits"
              icon={< LockClosedIcon />}
              placeholder="New password"
              type="password"
              value={user.password}
              onChange={(e) => setPassword({ password: e.target.value })}
            />
          </Accordion.Panel>
        <Accordion.Panel>

        </Accordion.Panel>
      </Accordion.Item>

        <Accordion.Item value="change-location">
          <Accordion.Control>Change location</Accordion.Control>
          <Accordion.Panel> <Select
            mt="md"
            withinPortal
            data={['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen', 'Bremen', 'Dresden', 'Hanover', 'Nuremberg', 'Duisburg',
              'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Mannheim', 'Karlsruhe', 'Augsburg', 'Wiesbaden', 'Mönchengladbach', 'Gelsenkirchen', 'Aachen', ' Braunschweig',
              'Kiel', 'Chemnitz', 'Halle (Saale)', 'Magdeburg', 'Freiburg im Breisgau', 'Krefeld', 'Mainz', 'Lübeck', 'Erfurt', 'Oberhausen', 'Rostock', 'Kassel', 'Hagen', 'Potsdam', 'Saarbrücken',
              'Hamm', 'Ludwigshafen am Rhein', 'Mülheim an der Ruhr', 'Oldenburg', 'Osnabrück', 'Leverkusen', 'Darmstadt', 'Heidelberg', 'Solingen', 'Herne', 'Regensburg', 'Neuss', 'Paderborn', 'Ingolstadt', 'Offenbach am Main',
              'Fürth', 'Ulm', 'Würzburg', 'Heilbronn', 'Pforzheim', 'Wolfsburg', 'Bottrop', 'Göttingen', 'Reutlingen', 'Koblenz', 'Erlangen', 'Bremerhaven', 'Remscheid', 'Bergisch Gladbach', 'Recklinghausen',
              'Trier', 'Jena', ' Moers', 'Salzgitter', 'Siegen', 'Gütersloh', 'Hildesheim']}
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
