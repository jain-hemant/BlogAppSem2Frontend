/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Badge, Box, Card, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function BlogTitleItem(props) {
  return (
    <Box w={['90%', '45%', '25%']} position={'relative'} >
      <Link to={`/blog/${props._id}`}>
        <Card p={'20px'} my={'10px'} w={'100%'} minH={'200px'} gap={'10px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} >
          <Badge p={'5px 10px'} borderRadius={'20px'} fontSize={'10px'} w={'fit-content'} color={'white'} bg={'black'}>
            {props.category?.title}
          </Badge>
          <Heading size={'l'} >{props.title} </Heading>
          <Box w={'100%'} bottom={'10px'} right={'10px'} position={'absolute'}>
            <Text textAlign={'right'} color={'dimgray'} fontSize={'14px'}> By {props.creator?.name} </Text>
          </Box>
        </Card>
      </Link>
    </Box>
  )
}
