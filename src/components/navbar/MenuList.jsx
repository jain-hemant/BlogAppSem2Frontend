/* eslint-disable react/prop-types */
import {  Box, Menu,  MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROLES } from "../../policies/policies";

export default function UserMenu({isHovering, role}) {
    const isAdmin = [ROLES.ADMIN, ROLES.SUPER_ADMIN].includes(role);
  return (
   <Box position={"absolute"} right={"170px"}>
      <Menu isOpen={isHovering}> 
        <MenuList>
           <Link to={"/profile"}>
                <MenuItem> Profile </MenuItem>
           </Link>
          {isAdmin && <MenuItem>
            <Link to={"/admin/categories"}>
                 Admin Dashboard
            </Link>
          </MenuItem>}
          <MenuItem>
            <Link to={"/logout"}>
                Logout
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}
