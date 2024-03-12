import { Button, Checkbox,  Flex, Heading,  } from "@chakra-ui/react";

/* eslint-disable react/prop-types */
export default function BlogCard(props) {
  return (
    <Flex border={'1px solid #ccc'} py={'10px'} my={'10px'} align={'center'} justify={'space-between'}>
      <Heading size={'sm'}> {props.title}</Heading>
       <Checkbox colorScheme='red' defaultChecked={props.isActive}>
            Active: {props.isActive ? "Yes" : "No"}
        </Checkbox>
      <Button colorScheme="blue"> Edit</Button>
      <Button colorScheme="red"> Delete</Button>
    </Flex>
  )
}
