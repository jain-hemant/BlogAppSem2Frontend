import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProfileIcon from "../../navbar/ProfileCard";
import { useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "../../../app/auth/authslice";
import UserMenu from '../../navbar/MenuList'
import { useState } from "react";

export default function Nav() {
 const user = useSelector(selectUser)
  const isAuthenticated = useSelector(selectIsAuth)

  // A state variable to track the hover status
const [isHovering, setIsHovering] = useState(false);

 // A handler function to set the hover status to true
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // A handler function to set the hover status to false
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Flex justifyContent={"space-between"} border={"1px solid #ccc"} px={"10px"} py={"5px"}>
      <Flex py={"5px"}  gap={"10px"} px="10px" mb={"10px"}>
          <Link to="/">Home</Link>
          <Link to="/admin/categories">Categories</Link>
          <Link to="/admin/blogs">Blogs</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/comments">Comments</Link>
      </Flex>


       <Box _hover={{cursor:"pointer"}} position={"relative"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            {
                <ProfileIcon name={user?.name} isAuthenticated={isAuthenticated} isHovering={isHovering}/>
            }
            {
             isAuthenticated && <UserMenu isHovering={isHovering} role={user.role}/>
            }
        </Box>
    </Flex>
  )
}
