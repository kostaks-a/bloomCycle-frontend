import React from 'react'
import { Link } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import { useContext } from 'react'
import { AppShell, Box, Button, Header } from "@mantine/core";

function Navbar() {
  const { isAuthenticated, logOutUser } = useContext(SessionContext);
  return (
    <AppShell
      padding="md"
      header={
        <Header
          height={60}
          p="xs"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button component={Link} to="/" variant="subtle" color="cyan">
            Home
          </Button>
          <Button component={Link} to='/allbicycles' variant='subtle' color='cyan'>
            Search for bicycles
          </Button>
          <Button component={Link} to='/allplants' variant='subtle' color='cyan'>
            Search for plants
          </Button>
          <Box>
            {!isAuthenticated && (
              <Button
                component={Link}
                to="/signup"
                variant="subtle"
                color="cyan"
              >
                Signup
              </Button>
            )}
            {!isAuthenticated && (
              <Button
                component={Link}
                to="/login"
                variant="subtle"
                color="cyan"
              >
                Login
              </Button>
            )}
            {isAuthenticated && (
              <Button
                component={Link}
                to="/dashboard"
                variant="subtle"
                color="cyan"
              >
                Dashboard
              </Button>
            )}

            {isAuthenticated && (
              <Button
                component={Link}
                to="/login"
                onClick={logOutUser}
                variant="subtle"
                color="cyan"
              >
                Logout
              </Button>
            )}
          </Box>
        </Header>
      }
    >
        </AppShell>
  )
}

export default Navbar