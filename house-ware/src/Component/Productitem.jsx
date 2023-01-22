import React, { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Stack,
  Text,

} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartcontextProvider";
import LoginToast from "../Account/LoginToast";
const Productitem = ({
  title,
  id,
link,
  price,
  cart,

}) => {
const {Setcartitem}=useContext(cartContext)

  return (
    <Card maxW="xl">
      <CardBody>
        <Image
          src={link}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="1">
          <Heading size="md">{title}</Heading>
          <Text color="blue.600" fontSize="2xl">
            Rs.{price}
          </Text>
          <Link  to={`/singal/${id}`} >More Details</Link>
        </Stack>
      </CardBody>
        <Center>
        <Button  mb={4}_hover={{color:"red", bg:'green'}}
            colorScheme="blue" onClick={()=>{Setcartitem({...cart,quantity:1})}}
          >
             <LoginToast msg={"Product added into cart"} msg2={"Add to Cart"} pos={'top-right'} />
          </Button>
        </Center>
    </Card>
  );
};

export default Productitem;
