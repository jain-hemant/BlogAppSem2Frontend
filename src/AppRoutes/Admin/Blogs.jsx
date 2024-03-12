import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Nav from "../../components/admin/nav/Nav";
import CreateBlog from '../../components/admin/blog/CreateBlog';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, selectCategories } from '../../app/blog/categorySlice';
import { getAllBlogs, selectBlogs } from '../../app/blog/blogSlice';
import { useEffect } from 'react';
import BlogsList from '../../components/admin/blog/BlogsList';

export default function Blogs() {
  const categories = useSelector(selectCategories);
  const blogs = useSelector(selectBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!categories.length){
      dispatch(getAllCategories())
    }
  },[categories, dispatch])

   useEffect(() => {
    
    if(!blogs.length){
      dispatch(getAllBlogs())
    }
    console.log(blogs);
  },[])

  return (
    <>
         <Nav/> 
         <div>
            <Tabs size='md' variant='enclosed'>
            <TabList>
                <Tab>Add New Blog</Tab>
                <Tab>View Blogs</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                  <CreateBlog categories={categories}/>
                </TabPanel>
                <TabPanel>
                  <BlogsList blogs={blogs}/>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </div>
    </>
  )
}
