import React from 'react'
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SessionContext } from "../contexts/SessionContext";
import { Avatar } from '@mantine/core';
import { Accordion, Select, Button, PasswordInput } from '@mantine/core';
import { Input } from '@mantine/core';
import { EnvelopeClosedIcon, LockClosedIcon } from '@modulz/radix-icons';

function UpdateProfilePage() {
    const [user, setUser] = React.useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const { token } = useContext(SessionContext)
    const navigate = useNavigate();

    const handleUpdate = async (event) => {
        event.preventDefault();
        console.log("updated username:", username)

        try {
            const response = await axios.put("http://localhost:5005/auth/update", {
                username: username,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                location: location
            },
                {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };


    return (
        //Miguel: on the line below we need to change the avatar.png to 
        //the user image with cloudinary
        <>
            <Avatar src={user.image ? user.image : null} alt="no image here" size="lg" radius="xl" />

            <Accordion defaultValue="changePersonalInfo" onSubmit={handleUpdate}>
                <Accordion.Item value="change-username">
                    <Accordion.Control>Change username</Accordion.Control>
                    <Accordion.Panel>
                        <Input
                            placeholder="Update your username"
                            value={username}
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
                            value={email}
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
                            value={password}
                        />
                        <PasswordInput
                            description="Password must have at least 5 digits"
                            icon={< LockClosedIcon />}
                            placeholder="New password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword({ password: e.target.value })}
                        />
                    </Accordion.Panel>
                    <Accordion.Panel>

                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="change-phone-number">
                    <Accordion.Control>Change phone number</Accordion.Control>
                    <Accordion.Panel>
                        <Input
                            placeholder="Your phone number"
                            type="number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber({ phoneNumber: e.target.value })}
                        />
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
                        value={location}
                        onChange={(e) => setLocation({ location: e.target.value })}

                    />
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <Button type="submit" component={Link} to='/profile' onClick={handleUpdate} color="cyan" radius="md">
                    Save changes
                </Button>

            </div>
        </>
    )
}

export default UpdateProfilePage