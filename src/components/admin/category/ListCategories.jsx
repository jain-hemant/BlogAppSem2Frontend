import { useEffect } from "react"
import { Box, Heading, Stack } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, selectCategories } from "../../../app/blog/categorySlice";
// import Category from "../../../AppRoutes/BlogCategory/Category";

export default function ListCategories() {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

    useEffect(() => {
          
      if(!categories.length){
            dispatch(getAllCategories())
      }

    }, [categories, dispatch])

  return (
    <Box>
      <Heading size="md">List of Categories </Heading>
      <Stack spacing="4">
        {  categories.map((category) => (
           <CategoryCard key={category._id} {...category}  categoryId={category._id}/>
         ))
        }
      </Stack>
    </Box>
  )
}
