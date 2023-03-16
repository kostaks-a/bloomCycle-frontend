import { Box, Button, PasswordInput, Text, TextInput } from '@mantine/core'
import { EnvelopeClosedIcon, LockClosedIcon } from '@modulz/radix-icons';
import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";



const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        const body = { username: username, email: email, password: password }
        try {
            console.log(body)
            let response = await axios.post(`${import.meta.env.VITE_HOST}/auth/signup`, body);
            console.log(response.data)
            navigate("/login")
        } catch (error) {
            //setErrorMessage(error.response.data.errorMessage)
            console.log(error);
        }
    }

    return (
        <div className='background-image'>
        <div className='signuplogin-container'>
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
                        <Text align='center' size='xl' weight='bold' sx={{ fontSize: '50px' }}>
                Signup
            </Text>
                  
            <Box
                component='form'
                        sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '2rem' }}
                onSubmit={handleSubmit}
            >
                <TextInput variant='filled' placeholder='Your username' withAsterisk value={username} required onChange={(e) => setUsername(e.target.value)} />
                <TextInput variant='filled' placeholder='Your email' icon={<EnvelopeClosedIcon />} withAsterisk value={email} required onChange={(e) => setEmail(e.target.value)} />
                <PasswordInput variant='filled' placeholder='Your password' icon={<LockClosedIcon />} withAsterisk value={password} required onChange={(e) => setPassword(e.target.value)} />
                        <Text color="white" size="sm" display='flex' alignItems="flex-start" marginTop="0px" mt={5}>
                {errorMessage && <p className="error-message">{errorMessage}</p>} 
                </Text>
                <Button
                    type='submit'
                    variant='filled'
                    color='green.9'
                    sx={{ marginTop: '1rem', alignSelf: 'center' }}
                >
                    Register
                </Button>
                <Text color="white" size="sm" align="center" mt={5}>
                    Already have an account? {" "}
                    <Button component={Link} to='/login' variant='subtle' color='green.9'>
                        Login
                    </Button>
            </Text>
            </Box>
        </Box>
            </div>
        </div>
    )
}

export default SignupPage