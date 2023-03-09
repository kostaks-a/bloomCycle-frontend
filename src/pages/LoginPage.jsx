import { Box, Button, PasswordInput, Text, TextInput } from '@mantine/core'
import { LockClosedIcon } from '@modulz/radix-icons';
import axios from 'axios';
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setToken , setCurrentUser , currentUser, setUser} = useContext(SessionContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post("http://localhost:5005/auth/login", { username: username, password: password })
            console.log(response.data);
            setToken(response.data.token);
            setUser(response.data.user);
            setCurrentUser(response.data.user)
            console.log(currentUser)
            navigate("/dashboard");
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <div className='background-image'>
        <Box
            sx={{
                margin: '0 auto',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: 'calc(100vh - 100px)',
                color: 'white'
            }}
        >
                <Text align='center' size='xl' weight='bold' sx={{fontSize: '50px'}}>
                Login
            </Text>
            <Box
                component='form'
                    sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '2rem' }}
                onSubmit={handleSubmit}
            >
                    
                <TextInput variant='filled' placeholder='Your username' withAsterisk value={username} onChange={(e) => setUsername(e.target.value)} />
                    
                <PasswordInput  variant='filled' placeholder='Your password' icon={<LockClosedIcon />} withAsterisk value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button
                    type='submit'
                    variant='filled'
                    color='green.8'
                      
                    sx={{ marginTop: '2rem', alignSelf: 'center' }}
                >
                    Connect
                </Button>
                  
                <Text color="white" size="" align="center" mt={10}>
                    Don't have an account yet? {" "}
                    <Button component={Link} to='/signup' variant='subtle' color='green.8'>
                        Sign Up
                    </Button>
                </Text>
            </Box>
        </Box>
        </div>
    )
}

export default LoginPage