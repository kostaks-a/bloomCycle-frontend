import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mantine/core";
import { Accordion, Select, Button, PasswordInput } from "@mantine/core";
import { Input } from "@mantine/core";
import { EnvelopeClosedIcon, LockClosedIcon } from "@modulz/radix-icons";

function Profile() {
  const { user, setUser, setIsAuthenticated, setToken } =
    useContext(SessionContext);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  console.log(user);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete(`http://localhost:5005/auth/profile/${user._id}`);
      localStorage.removeItem("bearer");
      setIsAuthenticated(false);
      setToken(null);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
      setDeleting(false);
    }
  };

  return (
    //Miguel: on the line below we need to change the avatar.png to
    //the user image with cloudinary
    <div>
      <h2>Username</h2>
      <p>{user.username} </p>
      <h2>Email address</h2>
      <p>{user.email}</p>
      <h2>Phone number</h2>
      <p>{user.phoneNumber}</p>
      <h2>Location</h2>
      <p>{user.location}</p>

      <Link type="button" component={Link} to={`/update/${user._id}`}>
        Update
      </Link>

      <Button
        onClick={handleDelete}
        component={Link}
        to="/"
        color="cyan"
        radius="md"
      >
        Delete account
      </Button>
    </div>
  );
}

export default Profile;
