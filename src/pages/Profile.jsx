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

    <div className="pageswithfooter">
      <div className="profile-info">
      <h2>Username</h2>
      <p>{user.username} </p>
      <h2>Email address</h2>
      <p>{user.email}</p>
      <h2>Phone number</h2>
      <p>{user.phoneNumber}</p>
      <h2>Location</h2>
      <p>{user.location}</p>
<div className="profile-buttons">
      <Button color="green.8"
        radius="md" component={Link} to={`/update/${user._id}`}>
        Update
      </Button>

      <Button
        onClick={handleDelete}
        component={Link}
        to="/"
        color="green.8"
        radius="md"
      >
        Delete account
      </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
