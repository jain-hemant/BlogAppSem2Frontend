import { useState } from 'react';
import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    Link,
    Center,
} from '@chakra-ui/react';
import FetchApi from '../fetch';
import { useNavigate} from 'react-router-dom'
import NavBar from '../components/navbar/NavBar';

function SignUp() {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const navigate = useNavigate();

    function handleChange(event) {
        const { id, value } = event.target
        setFormState({ ...formState, [id]: value })
    }
    const onSubmit = async (event) => {
        event.preventDefault()

         await FetchApi.fetch('/api/user/create', {
            method: 'POST',
            body: JSON.stringify({
                name:formState.name,
                email:formState.email,
                password:formState.password
            })
        })
        return navigate("/login")
    };

    return (
        <>
        <NavBar/>
        <Center h="100vh">
            <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" w="400px">
                <form onSubmit={onSubmit}>
                    <FormControl >
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input id="name" placeholder="Enter your name" value={formState.name} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" type="email" placeholder="Enter your email" value={formState.email} onChange={handleChange} />
                    </FormControl>
                    <FormControl >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input id="password" type="password" placeholder="Enter your password" value={formState.password} onChange={handleChange} />
                    </FormControl>
                    <FormControl >
                        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                        <Input id="confirmPassword" type="password" placeholder="Confirm your password" value={formState.confirmPassword} onChange={handleChange} />
                    </FormControl>
                    <Box textAlign="center">
                        <Button mt={4} colorScheme="teal" type="submit">
                            Register
                        </Button>
                    </Box>
                </form>
                <Box mt={2} textAlign="center">
                    Already have an account?{' '}
                    <Link color="teal.500" href="/login">
                        Login
                    </Link>
                </Box>
            </Box>
        </Center>
        </>
    );
}

export default SignUp;