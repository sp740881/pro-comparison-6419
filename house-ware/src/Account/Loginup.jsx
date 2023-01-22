import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../Component/AuthContextProvider';
import LoginToast from './LoginToast';
  
  export default function Loginup({setToogle}) {
const {Login}=useContext(AuthContext)
    return (
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log In</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
              
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={Login}>
                <LoginToast msg={"Login Successfully"} msg2={"SignIn"} pos={'top-right'} />
                </Button>
              </Stack>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'}>
                 Create an Account <Link to="#" 
                    onClick={()=>{setToogle(true)}}
                     color={'blue.400'}>Sign up</Link>
                </Text>
              </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }