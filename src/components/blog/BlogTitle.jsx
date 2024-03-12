/* eslint-disable react/prop-types */
import { Box, Flex } from '@chakra-ui/layout'
import BlogTitleItem from './BlogTitleItem'
import { Link } from 'react-router-dom'

export default function BlogTitle({ blogs = [] }) {
    return (
        <Flex w={'100%'} flexWrap={"wrap"} justifyContent={'space-evenly'} gap={'20px'}>
            {
                blogs.map(blog => <BlogTitleItem key={blog._id}  {...blog} />)
            }
        </Flex>
    )
}

