import { Box, Flex, Heading, } from "@chakra-ui/react";
import ProfileIcon from "./ProfileCard";
import { useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "../../app/auth/authslice";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserMenu from "./MenuList";
export default function NavBar() {
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
    <Flex justifyContent={"space-between"} color={'white'} bg={'orange'} px={"10px"} py={"5px"}>
      <Heading size={"sm"}>
        <Link to={"/"}>
          Blog App
        </Link>
      </Heading>
      <Box _hover={{ cursor: "pointer" }} position={"relative"} color={'black'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        {
          <ProfileIcon name={user?.name} isAuthenticated={isAuthenticated} isHovering={isHovering} />
        }
        {
          isAuthenticated && <UserMenu isHovering={isHovering} role={user.role} />
        }
      </Box>
    </Flex>
  )
}
