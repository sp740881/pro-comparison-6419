import React from "react";
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
const Productitem = ({
  title,
link,
//   brand,
  price,
//   cart,
//   setCartDispatch,
}) => {
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
        </Stack>
      </CardBody>
        <Center>
        <Button  mb={4}_hover={{color:"red", bg:'green'}}
            colorScheme="blue"
          >
            Add to cart
          </Button>
        </Center>
    </Card>
  );
};

export default Productitem;
