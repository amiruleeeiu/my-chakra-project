// src/components/ChakraFormikForm.stories.tsx

import { Box, ChakraProvider } from "@chakra-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { ChakraFormikForm } from "../components/ChakraFormikForm";

export default {
  title: "Components/ChakraFormikForm",
  component: ChakraFormikForm,
} as Meta<typeof ChakraFormikForm>;

const Template: StoryFn<typeof ChakraFormikForm> = (args) => (
  <ChakraProvider>
    <Box width="400px" p="4">
      <ChakraFormikForm {...args} />
    </Box>
  </ChakraProvider>
);

export const Default = Template.bind({});
Default.args = {};
