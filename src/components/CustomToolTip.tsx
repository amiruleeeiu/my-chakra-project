import { Box, Tag, Tooltip } from "@chakra-ui/react";
import React from "react";

function CustomToolTip() {
  return (
    <Tooltip label="Hover me">
      <CustomCard>Tag Here</CustomCard>
    </Tooltip>
  );
}

export default CustomToolTip;

const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
    <Box p='1'>
      <Tag ref={ref} {...rest}>
        {children}
      </Tag>
    </Box>
  ))