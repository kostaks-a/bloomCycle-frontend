import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/Privateroute";
import { useContext } from "react";
import { SessionContext } from "./contexts/SessionContext";
import PlantCU from "./pages/PlantsPages/PlantCU";
import BikeCU from "./pages/BicyclesPages/BicycleCU";
import DashBoard from "./pages/DashBoard";
import BicyclesDisplay from "./pages/BicyclesPages/BicyclesDisplay";
import PlantsDisplay from "./pages/PlantsPages/PlantsDisplay";
import "./App.css";
import PersonalAds from './pages/PersonalAds'
import SavedAds from "./pages/SavedAds";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import AboutPage from "./pages/AboutPage";
import { AppShell, Box, Button, Header } from "@mantine/core";
import OutletComponent from "./components/OutletComponent";



function App() {
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
          <Button
            component={Link}
            to="/allbicycles"
            variant="subtle"
            color="cyan"
          >
            Search for bicycles
          </Button>
          <Button
            component={Link}
            to="/allplants"
            variant="subtle"
            color="cyan"
          >
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
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<OutletComponent />}>
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/allbicycles" element={<BicyclesDisplay />} />
        <Route path="/allplants" element={<PlantsDisplay />} />
        <Route
          path="/update/:userId" element={<UpdateProfilePage />} />
        <Route path='/profile'
          element={
            <PrivateRoute>
              <Profile>
                <UpdateProfilePage />
              </Profile>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/plant/:plant"
          element={
            <PrivateRoute>
              <PlantCU />
            </PrivateRoute>
          }
        />
        <Route
          path="/bicycle/:bike"
          element={
            <PrivateRoute>
              <BikeCU />
            </PrivateRoute>
          }
        />
        <Route
          path="/ads/:id"
          element={
            <PrivateRoute>
              <PersonalAds />
            </PrivateRoute>
          }
        />
        <Route path="/ads/:id/saved" element={
          <PrivateRoute>
            <SavedAds />
          </PrivateRoute>
        }
        />
        </Route>
      </Routes>
    </AppShell>
  );
}

export default App;
