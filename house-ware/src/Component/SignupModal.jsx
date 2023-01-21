import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useContext, useState } from "react"
import Loginup from "../Account/Loginup"
import SignupCard from "../Account/SignupCard"
import { AuthContext } from "./AuthContextProvider"

function SignupModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [toggle,setToogle]=useState(true);
  const {isAuth,Login,Logout}=useContext(AuthContext)
    return (
      <>
        <Text onClick={onOpen}>
          {isAuth?<Text onClick={Logout} >shivam</Text>:<Text>Account</Text>}
        </Text>
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