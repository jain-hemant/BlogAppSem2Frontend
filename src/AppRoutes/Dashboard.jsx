import { useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import { Grid, GridItem, Box } from '@chakra-ui/react';
import Sidemenu from "../components/SideMenu";
import { ImMenu } from "react-icons/im";
import BlogTitle from "../components/blog/BlogTitle";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, selectCategories } from "../app/blog/categorySlice";
import { getAllBlogsByCategory, selectBlogsByCategory } from "../app/blog/blogSlice";

export default function Dashboard() {

    const [isSideOpen, setISideOpen] = useState(true)
    const [selectedMenu, setSelectedMenu] = useState(0)
    const categories = useSelector(selectCategories);
    const blogs = useSelector(selectBlogsByCategory);
    const dispatch = useDispatch();

    function handleClick() {
        setISideOpen(!isSideOpen)
    }

    useEffect(() => {
        if (!categories.length) {
            dispatch(getAllCategories())
        }
    }, [categories.length, dispatch]);

    useEffect(() => {

        if (!blogs[categories[selectedMenu]?._id] && categories[selectedMenu]?._id) {
            dispatch(getAllBlogsByCategory(categories[selectedMenu]?._id))
        }
        console.log(blogs);
    }, [blogs, categories, dispatch, selectedMenu])

    return (
        <Box maxW={'100vw'}>
            <NavBar />
            <Grid
                templateAreas={`"nav main"`}
                gridTemplateColumns={isSideOpen ? '150px 1fr' : '0px 1fr'}
                color='blackAlpha.700'
                fontWeight='bold'
                height={"100vh"}
            >
                {/* Left Navigation Grid Item */}
                <GridItem gridArea={'nav'} color={'white'} bg={'#133337'} borderRight={'5px double orange'} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}>
                    {isSideOpen && <Sidemenu isOpen={isSideOpen} onChange={setSelectedMenu} categories={categories} />}
                </GridItem>
                {/* Main Content Grid Item */}
                <GridItem pl='2' bg={'#133337'} gridArea={'main'}  >
                    {/* Menu Bar Logo */}
                    <Box w={"100%"} pb={4} align={'left'} >
                        <ImMenu size={30} cursor={'pointer'} color="orange" onClick={handleClick} />
                    </Box>
                    {/* Left Side panel to display title */}
                    {
                        <Box >
                            <BlogTitle blogs={blogs[categories[selectedMenu]?._id]} />
                        </Box>
                    }
                </GridItem>

            </Grid>
        </Box>
    )
}
