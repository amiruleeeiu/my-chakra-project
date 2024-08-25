import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function ModalComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <br />
      <Button onClick={onOpen}>Open Modal</Button>
      <br />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            harum ut similique impedit dolore vero esse nihil quod dignissimos
            aliquam, dolores temporibus ab expedita nam ea asperiores dicta
            laborum magni omnis recusandae cupiditate! Reprehenderit accusantium
            provident optio consequatur excepturi eos porro aliquam ducimus
            quaerat quam, exercitationem molestias hic sapiente! Reprehenderit
            veritatis labore corporis nisi culpa placeat ut fugiat! Non facilis
            consequatur sit consequuntur incidunt est magni. Facilis beatae
            exercitationem nesciunt cupiditate, debitis, consectetur magnam quo
            soluta ad sapiente facere consequuntur! Fugiat quam recusandae vitae
            ipsa, nobis praesentium non provident sed mollitia hic obcaecati
            laborum ratione consequatur tempore nisi impedit expedita.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponent;
