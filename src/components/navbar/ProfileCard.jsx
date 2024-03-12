import { Avatar } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProfileIcon({ name = "", isAuthenticated = false }) {
    if (isAuthenticated) {
        return (
            <Avatar name={name[0].toUpperCase()} bg={'#133337'} src='https://bit.ly/tioluwani-kolawole' size={"sm"} />
            // <FaRegUserCircle size={"30px"}/>
        )
    } else {
        return (
            <Link to={'/login'}>
                <FaUserCircle size={"30px"} />
            </Link>
        )
    }

}
