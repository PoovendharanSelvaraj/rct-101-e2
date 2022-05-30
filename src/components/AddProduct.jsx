import React from "react";
import {Button,Modal,ModalBody,Input,Select,RadioGroup,Radio,ModalHeader,FormControl} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react";
import { ModalContent } from "@chakra-ui/react";


const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  return (
   
    <>
      <Button onClick={onOpen} my={4} data-cy="add-product-button">Add Product</Button>
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} finalFocusRef={finalRef} >
        <ModalContent>
      <ModalHeader>Add New Product</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">shirt</option>
            <option data-cy="add-product-category-pant">pants</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button" bg="blue.400" color="white" onClick={onClose}>create</Button>
          </FormControl>
        </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
