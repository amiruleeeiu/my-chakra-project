// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  radii: {
    xs: "0px",
    sm: "5px",
    md: "4px",
  },
  // components: {
  //   Button: {
  //     baseStyle: {
  //       borderRadius: "sm",
  //     },
  //   },
  // },
});

export default theme;
