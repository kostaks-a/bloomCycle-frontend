import { AppShell, Box, Button, Header } from '@mantine/core'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Profile from "./pages/Profile";
import PrivateRoute from './components/Privateroute'
import { useContext } from 'react'
import { SessionContext } from './contexts/SessionContext'
import PlantCU from './pages/PlantsPages/PlantCU'
import BikeCU from './pages/BicyclesPages/BicycleCU'
import DashBoard from './pages/DashBoard'

function App() {
  const { isAuthenticated, logOutUser } = useContext(SessionContext);
  return (
    <AppShell
      padding='md'
      header={
        <Header height={60} p='xs' sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button component={Link} to='/' variant='subtle' color='cyan'>
            Home
          </Button>
          <Box>
            <Button component={Link} to='/signup' variant='subtle' color='cyan'>
              Signup
            </Button>
            <Button component={Link} to='/login' variant='subtle' color='cyan'>
              Login
            </Button>
            <Button component={Link} to='/dashboard' variant='subtle' color='cyan'>
              Dashboard
            </Button>
            {isAuthenticated && (
              <Button component={Link} to='/login' onClick={logOutUser} variant='subtle' color='cyan'>
              Logout
            </Button>
            )}
          </Box>
        </Header>
      }
    >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
        />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        }
        />
        <Route path="/plant" element={
          <PrivateRoute>
            <PlantCU />
          </PrivateRoute>
        }
        />
        <Route path="/bicycle" element={
          <PrivateRoute>
            <BikeCU />
          </PrivateRoute>
        }
        />
        {/* Add some new route(s) on what you want to work, don't forget to make a PrivateRoute component */}
      </Routes>
    </AppShell>
  )
}

export default App