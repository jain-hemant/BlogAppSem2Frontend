/* eslint-disable react/prop-types */
import { useState } from 'react'
import InputPanel from './InputPanel'
import { FormControl,  VStack, Stack, Select, Input, Box, Button, Divider } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { createBlog } from '../../../app/blog/blogSlice'
import { selectUser } from '../../../app/auth/authslice'

export default function CreateBlog({categories=[]}) {
    const [blogData, setBlogData] = useState({
        title:'', category:'', blogContent:'', creator:''
    })
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    function handleChange(event) {
        const {name, value} =  event.target;

       setBlogData({
            ...blogData,
            [name]:value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(createBlog({...blogData, creator:user._id}))
    }
    return (
        <Box w={'60%'} mx={'auto'} my={'20px'}>
            <form onSubmit={handleSubmit}>
                <VStack spacing={3} >
                    <FormControl>
                        {/* <FormLabel>Category</FormLabel> */}
                        <Stack spacing={3}>
                            <Select placeholder='Select Category' name='category' onChange={handleChange} defaultValue={blogData.category}>
                               {
                                categories.map((option)=>{
                                    return <option key={option._id} value={option._id} >{option.title}</option>
                                })
                               }
                            </Select>
                        </Stack>
                    </FormControl>
                    <FormControl>
                        {/* <FormLabel>Title</FormLabel> */}
                        <Stack spacing={3}>
                            <Input placeholder='Enter Title of Blog...' name='title' onChange={handleChange} value={blogData.title}/>
                        </Stack>
                    </FormControl>
                    <Divider />
                    <FormControl>
                        <Box width={'100%'}>
                            <InputPanel onChange={handleChange} value={blogData.blogContent}/>
                        </Box>
                        <Box textAlign={'right'}>
                            <Button colorScheme='teal' type='submit'>
                                Create Blog
                            </Button>
                        </Box>
                    </FormControl>

                </VStack>
            </form>
        </Box>
    )
}