import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteCategory, updateCategory } from "../../../app/blog/categorySlice";

// A custom component to display a category
// eslint-disable-next-line react/prop-types
const Category = ({ categoryId, description, isActive, title }) => {
  const dispatch = useDispatch()

  function handleClick(event) {
    dispatch(updateCategory({
      updates: {
        isActive: event.target.checked
      },
      categoryId
    }))
  }

  function handleDelete(){
    dispatch(deleteCategory({categoryId}))
  }

  return (
    <Card>
      <Flex direction="row"> 
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Checkbox colorScheme='red' defaultChecked={isActive} onChange={handleClick}>
          <Text>Active: {isActive ? "Yes" : "No"}</Text>
        </Checkbox>
          
        </CardBody>
        <CardFooter>
          <Stack direction="row" spacing="2">
            <Button colorScheme="blue">Edit</Button>
            <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
          </Stack>
        </CardFooter>
      </Flex>
    </Card>
  );
};

export default Category;