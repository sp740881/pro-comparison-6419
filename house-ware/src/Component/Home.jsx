import React from 'react'
import { Box,Text,Flex,Image, Heading, Center, Link, Grid, Stack,} from '@chakra-ui/react'
import { Link as routerLink } from 'react-router-dom'
import SliderCard from './SliderCard'
const Home = () => {
    return <Box>
    <Box pt={3}>
       <center>
       <Text fontSize='2xl'>Shop By Category
       </Text>
       </center>
    </Box>
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
<Link to="/home" as={routerLink} > <Image src='https://cdn.plotch.io/image/upload/C/V/1671109983_Mi5wbmc=.png' ></Image></Link>
<Image src='https://cdn.plotch.io/image/upload/C/V/1671109989_My5wbmc=.png' ></Image>
<Image src='https://cdn.plotch.io/image/upload/C/V/1671109994_NC5wbmc=.png' ></Image>
<Image src='https://cdn.plotch.io/image/upload/C/V/1671109999_NS5wbmc=.png' ></Image>
<Image src='https://cdn.plotch.io/image/upload/C/V/1671110006_Ni5wbmc=.png' ></Image>
</Grid>
<SliderCard/>

<Box bg="black" >
<Grid pl={7} pt={10} templateColumns='repeat(5, 1fr)' gap={6}>
        <Image src='https://cdn.plotch.io/image/upload/C/V/1660916598_MS5wbmc=.png' ></Image>
        <Image src='https://cdn.plotch.io/image/upload/C/V/1660916607_Mi5wbmc=.png' ></Image>
        <Image src='https://cdn.plotch.io/image/upload/C/V/1660916612_My5wbmc=.png' ></Image>
        <Image src='https://cdn.plotch.io/image/upload/C/V/1660916617_NC5wbmc=.png' ></Image>
        <Image src='https://cdn.plotch.io/image/upload/C/V/1660916629_NS5wbmc=.png' ></Image>
</Grid>
</Box>


{/* /////////////////////////////////////////////////////////////////////////// */}
<Grid templateColumns='repeat(2, 1fr)' gap={6} pl={20} pr={20} pt={10} pb={10} rowGap={10}>
<Image src='https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png' ></Image>
<Image src='https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png' ></Image>
<Image src='https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png' ></Image>
<Image src='https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png' ></Image>
</Grid>
{/* /////////////////////////////////////////////////////////////////////////////////////// */}
   <Box bg='#902735' color="white" >
    <Box pl={40} pr={40} pt={10}  display="flex" justifyContent="space-between" >
         <Box>
            <Heading size="md" >About us</Heading>
        <Stack spacing={1}>
       <Text fontSize='md'> 
       India's most convenient online grocery channel <br /> Buyerapp Fresh and Smart makes your grocery  <br /> shopping even simpler. No more hassles of <br /> sweating it out in crowded markets, grocery  <br /> shops & supermarkets - now shop from the  <br /> comfort of your home; office, or on the move. We  <br /> offer you the convenience of shopping for  <br/>  everything that you need for your home - be it  <br/>  fresh fruits & vegetables, rice, dals, oil, packaged  <br/> food, dairy item, frozen, pet food, household  <br/>  cleaning items & personal care products from a  <br/>  single virtual store.
       </Text>
         </Stack>
        </Box>
         <Box>
         <Heading size="md" >OUR COMPANY</Heading>
        <Text>About us</Text>
        <Text>Contact us</Text>
         </Box>
         <Box>
    <Heading size="md" >TOP CATEGORIES</Heading>
        <Text>Grocery</Text>
    </Box>
    <Box>
    <Heading size="md" >POLICIES & INFO</Heading>
        <Text>Privacy Policy  <br/> 
Terms & Condition  <br/> 
Shipping Policy  <br/> 
Return & Refund</Text>
<Heading size="sl" >POLICIES & INFO</Heading>
<Text>For Help, send an email to    <br/>    customercare@craftsvilla.com</Text>
    </Box>
    </Box>
   </Box>
    </Box>
}
export default Home