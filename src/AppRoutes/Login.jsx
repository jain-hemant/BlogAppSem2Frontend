import { useState } from 'react';
import { FaGithub } from 'react-icons/fa'
import {
    Box,
    Button,
    Input,
    Stack,
    FormControl,
    FormLabel,
    Link,
    Center
} from '@chakra-ui/react';
import fetchApi from '../fetch.js'
import {useDispatch} from 'react-redux';
import { setIsAuth } from '../app/auth/authslice.js';
import NavBar from '../components/navbar/NavBar.jsx';

function Login() {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
    });
    const dispatch = useDispatch();

    function handleChange(event) {
        const { name, value } = event.target
        setFormState({ ...formState, [name]: value })
    }
    const handleLogin = async () => {
        try {
            const response = await fetchApi.fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email:formState.username, password:formState.password
            })
        })
        
        dispatch(setIsAuth(response))
        
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
        <NavBar/>
        <Center h="100vh">  {/* Center the form vertically */}
            <Box py={10} px={10} borderWidth="1px" borderRadius="md" boxShadow="md" >
                <Stack spacing={4} w={80}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={formState.username}
                            onChange={handleChange}

                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <Button colorScheme="teal" size="md" onClick={handleLogin}>
                        Log In
                    </Button>
                    <Box textAlign="center">
                        <Link color="teal.500" href="/signup">
                            Sign Up
                        </Link>
                        <span> | </span>
                        <Link color="teal.500" href="/forgot-password">
                            Forgot Password?
                        </Link>
                    </Box>
                    <Box margin={'auto'}>
                        <Button bg={'#2d3748'} color={'white'} rightIcon={<FaGithub />
                        } _hover={{ bg: 'black' }} >
                            Continue with Github
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Center>
        </>
    );
}

export default Login;
