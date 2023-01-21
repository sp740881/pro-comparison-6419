import React from 'react'

import  { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  Center,
  Grid,
  Heading,
  Image,
  Stack,
  Text,

} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartcontextProvider";
const Productitem = () => {
  const {cart,Setcartitem}=useContext(cartContext)
return <>
<Center><Text color="Green" bg="yellow" size="xl" >Cart Items</Text></Center>
<Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
      pt={3}
      bg="blackAlpha.200"
    >
{ 
  cart.map((el)=>{
    return (
        <Card maxW="xl">
        <CardBody>
          <Image
            src={el.link}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="1">
            <Heading size="md">{el.title}</Heading>
            <Text color="blue.600" fontSize="2xl">
              Rs.{el.price}
            </Text>
          </Stack>
        </CardBody>
          <Center>
          <Button  mb={4}_hover={{color:"red", bg:'green'}}
              colorScheme="blue"
              >
              Buy Now
            </Button>
          </Center>
      </Card>
     
     );
    })
}
    </Grid>
</>

 
};

export default Productitem;
