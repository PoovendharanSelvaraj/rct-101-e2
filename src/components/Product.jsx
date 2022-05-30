import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel} from "@chakra-ui/react"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Product = () => {
  const [lists,setList]=useState([])
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  useEffect(()=>{
    axios.get('http://localhost:8080/products').then((r)=>{
    setList(r.data)  
    console.log(r.data)
  
    })
  },[])
 

  return (
 
        
         
    
     <Stack direction={['column', 'row']} width="500px" data-cy="product">   
     {lists.map((d)=>
     <Box w="200px" height="200px" style={{display:"grid", gridTemplateColumns:"50%"}} >
     <Image  src={d.imageSrc}  data-cy="product-image" />
     <Text data-cy="product-category">{d.category}</Text>
     <Tag>
       <TagLabel data-cy="product-gender">{d.gender}</TagLabel>
     </Tag>
     <Heading data-cy="product-title">{d.title}</Heading>
     <Box data-cy="product-price">{d.price}</Box>
     </Box>
     
     )}


    </Stack>
    
    
 
    
 
  

    
  );
};

export default Product;
