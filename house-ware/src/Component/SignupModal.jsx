import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import Loginup from "../Account/Loginup"
import SignupCard from "../Account/SignupCard"

function SignupModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [toggle,setToogle]=useState(true);
    return (
      <>
        <Text onClick={onOpen}>Account</Text>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>

            </ModalBody>
                  {toggle? <SignupCard setToogle={setToogle}/>:
                   <Loginup setToogle={setToogle}/> }
            <ModalFooter>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default SignupModal