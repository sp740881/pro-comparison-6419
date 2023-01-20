import React from "react";
import { Box, Text, Flex, Image, Input, IconButton, Link, Center } from "@chakra-ui/react";
import { Icon, SearchIcon } from "@chakra-ui/icons";
import { Link as routerLink } from 'react-router-dom'
import logo from "./logo.png";
import { FaRegHeart, FaCartArrowDown,FaUserAlt } from "react-icons/fa";
import SignupModal from "./SignupModal";
const Navbar = () => {
  return (
    <Box bg="white" w="100%" p={2} color="black">
      <Flex>
        <Image w="60" h="10" pr={20} src={logo}></Image>
        <Input bg="#dddddd" placeholder="Input text here"></Input>
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
        <Flex columnGap={20}>
          <Flex pl={10} >
          <Icon as={FaUserAlt} fontSize={22}></Icon>
          <SignupModal/>
          </Flex>
          <Flex>
            <Icon as={FaRegHeart} fontSize={22}></Icon>
            <Text>Wishlist</Text>
          </Flex>
          <Flex>
            <Icon as={FaCartArrowDown} fontSize={22}></Icon>
            <Text>Cart</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box  bg='#902735'  color='white' >
        <Box >
        <Center>
        <Flex  >
    <Link to="/home" as={routerLink}  p={4}  color="white" _hover={{bg:'white',color:"#902735"}} >
    Home Decore
    </Link>
    <Link to="/home" as={routerLink}  _hover={{bg:'white',color:"#902735"}} p={4} color="white"  >
                Products Near Me
     </Link>
        </Flex>
        </Center>
        </Box> 
    </Box>
    </Box>
  );
};

export default Navbar;
