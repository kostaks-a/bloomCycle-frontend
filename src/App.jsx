
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Profile from "./pages/Profile";
import PrivateRoute from './components/Privateroute'
import { useContext } from 'react'
import { SessionContext } from './contexts/SessionContext'
import PlantCU from './pages/PlantsPages/PlantCU'
import BikeCU from './pages/BicyclesPages/BicycleCU'
import DashBoard from './pages/DashBoard'
import BicyclesDisplay from './pages/BicyclesPages/BicyclesDisplay'
import PlantsDisplay from './pages/PlantsPages/PlantsDisplay'
import "./App.css";
import PersonalAds from './pages/PersonalAds'
import SavedAds from "./pages/SavedAds";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
//import OutletComponent from "./components/OutletComponent";


function App() {

  return (
    <>
    
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/allbicycles' element={<BicyclesDisplay />} />
        <Route path='/allplants' element={<PlantsDisplay />} />
        <Route path="/update/:userId" element={<UpdateProfilePage />} />
        <Route path='/profile' element={
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
        <Route path="/plant/:plant" element={
          <PrivateRoute>
            <PlantCU />
          </PrivateRoute>
        }
        />
         <Route path="/bicycle/:bike" element={
          <PrivateRoute>
            <BikeCU />
          </PrivateRoute>
        }
        />
        <Route path="/ads/:id" element={
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
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
