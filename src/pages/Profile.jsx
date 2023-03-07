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
  const { user, isAuthenticated } = useContext(SessionContext);
  // const [user, setUser] = useState({});
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [location, setLocation] = useState("");
  // const [currentUser, setCurrentUser] = useState();
  const [deleting, setDeleting] = useState(false);

  // useEffect(() => {
  //   setCurrentUser(user);
  // }, []);


  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete("http://localhost:5005/auth/delete")
    } catch (error) {
      console.log("Error: ", error);
      setDeleting(false);
    }
  }

  return (

    //Miguel: on the line below we need to change the avatar.png to 
    //the user image with cloudinary
    <div>
      <h2>Username</h2>
      <p>{user.username} </p>
      <h2>Email adress</h2>
      <p>{user.email}</p>
      <Button onClick={handleDelete} component={Link} to='/' color="cyan" radius="md">
        Delete account
      </Button>
    </div>
  );
}

export default Profile;
