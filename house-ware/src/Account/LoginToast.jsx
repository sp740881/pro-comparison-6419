import { Button, useToast } from '@chakra-ui/react'
import React from 'react'

const LoginToast = ({msg,msg2 ,pos}) => {
    const toast = useToast()
    return (
        <Button bg="none" _hover="none"
          onClick={() =>
            toast({
              title: `${msg}`,
              status: 'success',
              duration: 2000,
              isClosable: true,
            position: `${pos}`,
            })
          }
        >
         {msg2}
        </Button>
      )
}

export default LoginToast