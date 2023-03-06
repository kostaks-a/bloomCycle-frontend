import { Box, Button, PasswordInput, Text, TextInput } from '@mantine/core'
import { LockClosedIcon } from '@modulz/radix-icons';
import axios from 'axios';
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setToken } = useContext(SessionContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post("http://localhost:5005/auth/login", { username: username, password: password })
            setToken(response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <Box
            sx={{
                margin: '0 auto',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: 'calc(100vh - 100px)',
            }}
        >
            <Text align='center' size='xl' weight='bold'>
                Login
            </Text>
            <Box
                component='form'
                sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '2rem' }}
                onSubmit={handleSubmit}
            >
                <TextInput label='Username' variant='filled' placeholder='Your username' withAsterisk value={username} onChange={(e) => setUsername(e.target.value)} />
                <PasswordInput label='Password' variant='filled' placeholder='Your password' icon={<LockClosedIcon />} withAsterisk value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button
                    type='submit'
                    variant='filled'
                    color='cyan'
                    sx={{ marginTop: '1rem', alignSelf: 'center' }}
                >
                    Connect
                </Button>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Don't have an account yet? {" "}
                    <Button component={Link} to='/signup' variant='subtle' color='cyan'>
                        Sign Up
                    </Button>
                </Text>
            </Box>
        </Box>
    )
}

export default LoginPage