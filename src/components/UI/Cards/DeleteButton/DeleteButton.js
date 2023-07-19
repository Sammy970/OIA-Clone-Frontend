import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const DeleteButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isConfirm, setIsConfirm] = useState(false);
  const [apiData, setApiData] = useState("");

  // From user extracting email
  const { user } = useAuth0();
  const email = user.email;

  const code = props.code;

  const deleteHandler = () => {
    // console.log(props.code);
    setIsConfirm(true);
  };

  useEffect(() => {
    const url = "https://oia-second-backend.vercel.app/api/deleteUserLinks";
    // const url = "http://localhost:3001/api/deleteUserLinks";
    const bodyContent = {
      email: email,
      code: code,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: { "Content-Type": "application/json" },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (response.status === 201) {
          const json = await response.json();
          setIsConfirm(false);
          setApiData(json); // Update the state with fetched data
        }
      } catch (error) {
        console.log("Error in Deleting data from frontend", error);
      }
    };

    if (isConfirm) {
      //   console.log("I am in");
      fetchData();
    }
  }, [email, code, isConfirm, apiData]);

  return (
    <>
      <Button onClick={onOpen}>
        <DeleteIcon />
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", md: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            Are you sure you want to delete ?
          </ModalHeader>
          <ModalCloseButton />
          <ModalFooter justifyContent={"center"}>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={deleteHandler}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteButton;
