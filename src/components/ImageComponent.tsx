import { Image } from "@chakra-ui/react";

function ImageComponent() {
  return (
    <Image
      borderRadius={4}
      boxSize="150px"
      src="https://bit.ly/dan-abramov"
      alt="Dan Abramov"
    />
  );
}

export default ImageComponent;
