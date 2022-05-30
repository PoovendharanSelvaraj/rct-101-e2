import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import {Flex,Grid} from "@chakra-ui/react"
import Product from "./Product";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex style={{display:"block"}} >
      {/*  AddProduct */}
      <AddProduct />
      <Grid templateColumns='repeat(3, 1fr)' >{/* List of Products */}
       <Product />
      </Grid>
      {/* Pagination */}
      <Pagination />
    </Flex>
  );
};

export default Products;
