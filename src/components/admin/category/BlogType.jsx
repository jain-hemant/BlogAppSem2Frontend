import { Box, Button, Center,  FormControl, FormLabel,  Input, Textarea,  } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector}   from 'react-redux';
import { selectUser } from '../../../app/auth/authslice';
import { createCategory } from '../../../app/blog/categorySlice.js';

export default function BlogType() {
    const user = useSelector(selectUser)    
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        blogType: "",
        description: "",
    })

    function handleChange(event) {
        const { id, value } = event.target
        setFormState({ ...formState, [id]: value })
    }
    async function onSubmit(event) {
        event.preventDefault();

       try {
        dispatch(createCategory({
                title: formState.blogType,
                description: formState.description,
                creator: user._id
            }))
       
       } catch (error) {
            console.log(error.message);
       }
    }

    return (
        <Center h="100vh">
            <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" w="400px">
                <form onSubmit={onSubmit}>
                    <FormControl >
                        <FormLabel htmlFor="blogType">Blog Type</FormLabel>
                        <Input id="blogType" placeholder="Enter Blog Name" value={formState.blogType} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        {/* <Input id="description" placeholder='Write a description' value={formState.description} onChange={handleChange} /> */}
                        <Textarea id="description" placeholder='Write a description' value={formState.description} onChange={handleChange}></Textarea>
                    </FormControl>

                    <Box textAlign="center">
                        <Button mt={4} colorScheme="teal" type="submit">
                            Add
                        </Button>
                    </Box>
                </form>
                <Box mt={2} textAlign="right" >
                    <Link color="teal.500" to="/createblog">
                        Create a blog.
                    </Link>
                </Box>
            </Box>
        </Center>

    )
}
