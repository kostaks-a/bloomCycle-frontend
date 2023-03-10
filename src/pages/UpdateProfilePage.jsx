import React from 'react'
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SessionContext } from "../contexts/SessionContext";
import { Avatar } from '@mantine/core';
import { Accordion, Select, Button, PasswordInput } from "@mantine/core";
import { Input } from "@mantine/core";
import { EnvelopeClosedIcon, LockClosedIcon } from "@modulz/radix-icons";
import { Box, Flex, Paper, BackgroundImage } from '@mantine/core'


function UpdateProfilePage() {
    //const [user, setUser] = React.useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const { token, setToken, setUser, user } = useContext(SessionContext);
     // const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        async function getUser () {
        const grabToken = window.localStorage.getItem("bearer");    
        const response = await axios.get(`${import.meta.env.VITE_HOST}/auth/update`, {
                headers: {
                    authorization: `Bearer ${grabToken}`
                }})
            response.data.username && setUsername(response.data.username)
            response.data.email && setEmail(response.data.email)
            response.data.password && setPassword(response.data.password)
            response.data.phoneNumber  && setPhoneNumber(response.data.phoneNumber)
            response.data.location && setLocation(response.data.location)
        console.log(response.data)
    }
    getUser()
    }, []);

    const handleUpdate = async (event) => {
        event.preventDefault();
        console.log("updated username:", username)
        const grabToken = window.localStorage.getItem("bearer");
        try {
            const response = await axios.put(`${import.meta.env.VITE_HOST}/auth/update/${user._id}`, {
                username: username,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                location: location,
              //  image: image
            },
                {
                    headers: {
                        authorization: `Bearer ${grabToken}`
                    }
                })
            setUser(response.data.user);
            setToken(response.data.token);
            navigate('/profile');
        } catch (error) {
            console.log("Error: ", error);
        }
    };
if(!user) {return <p>loading</p>}
    return (
        <Box>
        <BackgroundImage
          src="/bike-plant-backgroundimg.jpg"
        >

          <Flex justify="center" align="center">

            <Box mt={230} mb={60}>
              <Paper shadow="xl" radius="md" p={100} pt={80} sx={{

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',

              }}>
      {/* <Avatar src={user.image ? user.image : null} alt="no image here" size="lg" radius="xl" /> */}
<h1>Update your profile</h1>
      <Accordion defaultValue="changePersonalInfo">
        <Accordion.Item value="change-username">
          <Accordion.Control>Change username</Accordion.Control>
          <Accordion.Panel>
            <Input
              placeholder="Update your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="change-password">
          <Accordion.Control>Change password</Accordion.Control>
          <Accordion.Panel>
            <PasswordInput
              icon={<LockClosedIcon />}
              placeholder="Current password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              description="Password must have at least 5 digits"
              icon={<LockClosedIcon />}
              placeholder="New password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Accordion.Panel>
          <Accordion.Panel></Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="change-phone-number">
          <Accordion.Control>Change phone number</Accordion.Control>
          <Accordion.Panel>
            <Input
              placeholder="Your phone number"
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="change-location">
          <Accordion.Control>Change location</Accordion.Control>
          <Accordion.Panel>
            {" "}
            <Select
              mt="md"
              withinPortal
              data={[
                "Berlin",
                "Hamburg",
                "Munich",
                "Cologne",
                "Frankfurt",
                "Stuttgart",
                "Düsseldorf",
                "Leipzig",
                "Dortmund",
                "Essen",
                "Bremen",
                "Dresden",
                "Hanover",
                "Nuremberg",
                "Duisburg",
                "Bochum",
                "Wuppertal",
                "Bielefeld",
                "Bonn",
                "Münster",
                "Mannheim",
                "Karlsruhe",
                "Augsburg",
                "Wiesbaden",
                "Mönchengladbach",
                "Gelsenkirchen",
                "Aachen",
                " Braunschweig",
                "Kiel",
                "Chemnitz",
                "Halle (Saale)",
                "Magdeburg",
                "Freiburg im Breisgau",
                "Krefeld",
                "Mainz",
                "Lübeck",
                "Erfurt",
                "Oberhausen",
                "Rostock",
                "Kassel",
                "Hagen",
                "Potsdam",
                "Saarbrücken",
                "Hamm",
                "Ludwigshafen am Rhein",
                "Mülheim an der Ruhr",
                "Oldenburg",
                "Osnabrück",
                "Leverkusen",
                "Darmstadt",
                "Heidelberg",
                "Solingen",
                "Herne",
                "Regensburg",
                "Neuss",
                "Paderborn",
                "Ingolstadt",
                "Offenbach am Main",
                "Fürth",
                "Ulm",
                "Würzburg",
                "Heilbronn",
                "Pforzheim",
                "Wolfsburg",
                "Bottrop",
                "Göttingen",
                "Reutlingen",
                "Koblenz",
                "Erlangen",
                "Bremerhaven",
                "Remscheid",
                "Bergisch Gladbach",
                "Recklinghausen",
                "Trier",
                "Jena",
                " Moers",
                "Salzgitter",
                "Siegen",
                "Gütersloh",
                "Hildesheim",
              ]}
              placeholder="Pick one"
              label="Select a city"
              value={location}
              onChange={(e) => {
                setLocation(e);
              }}
            />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Button type="submit" onClick={handleUpdate} color="green.8" radius="md">
          Save changes
        </Button>
      </div>
              </Paper>
              <Box
                sx={{
                  margin: '0 auto',
                  maxWidth: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  height: 'calc(20vh - 1px)',
                }}
              />


            </Box>


          </Flex>

        </BackgroundImage>
      </Box>
    )
}

export default UpdateProfilePage