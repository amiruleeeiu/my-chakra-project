import { Badge, Stack } from "@chakra-ui/react";

function BadgeCom() {
  return (
    <Stack direction="row">
      <Badge variant="outline" colorScheme="green">
        Default
      </Badge>
      <Badge variant="solid" colorScheme="green">
        Success
      </Badge>
      <Badge variant="subtle" colorScheme="green">
        Removed
      </Badge>
    </Stack>
  );
}

export default BadgeCom;
