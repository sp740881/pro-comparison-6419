import React from 'react'
import{Box, Flex, Heading, Button,Grid, Center, Stack, Text, Select } from "@chakra-ui/react"
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import Productitem from './Productitem'
const HomeDecore = () => {
const [item,setitem]=useState([])
const[totalpage,settotal]=useState(0)
const [page,setpage]=useState(1)
const [loading,setloading]=useState(false)
const fetchData=async()=>{
  setloading(true)
let res=await axios.get(`https://lovely-bee-waders.cyclic.app/Products?_limit=16&_page=${page}`)
setitem(res.data)
setloading(false)
settotal(Number(res.headers["x-total-count"])
  )
}
useEffect(()=>{
  fetchData()
},[])
  return loading?<Text>....Loding page</Text>: <Box mt={10}>
    <Flex>
    <Box width="20%" pl={10} pt={4}>
      <Heading size="md" >Filter by</Heading>
      <Select placeholder='Price'>
  <option value='option2'>100-200</option>
  <option value='option3'>200-400</option>
</Select>
<Select placeholder='Discount'>
  <option value='option2'>15%-18%</option>
  <option value='option3'>20%-24%</option>
</Select>
<Select placeholder='Category'>
  <option value='option2'>Home decore</option>
  <option value='option3'>Flower</option>
</Select>
<Select placeholder='Time to Shipping'>
</Select>
<Select placeholder='Returnable'>
</Select>
<Select placeholder='Cancellalbe'>
</Select>
<Select placeholder='Store Name'>
</Select>
      </Box>
      <Box>
      <Flex justifyContent="space-evenly"  >
       <Button bg="white" >Sort by :  Popular</Button> |
       <Button bg="white" >Price : Low to High</Button> |
       <Button bg="white" >Price :  High to Low</Button> |
       <Button bg="white" >Discount</Button> 
      </Flex>
      
      <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}
      pt={3}
      bg="blackAlpha.200"
    >
      {item?.map((el) => {
        return (
          <Productitem key={el.id} {...el} cart={el} />
        );
      })}
    </Grid>
  <Center>
  <Button disabled={page==1} >Previous</Button>
    <Button>{page}</Button>
    <Button disabled={page==totalpage} >Next</Button>
  </Center>
      </Box>
    </Flex>

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

export default HomeDecore