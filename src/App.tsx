import { Box } from "@chakra-ui/react";
import "./App.css";
import AccordionComponent from "./components/AccordionComponent";
import BadgeCom from "./components/BadgeCom";
import CardComponent from "./components/CardComponent";
import CustomToolTip from "./components/CustomToolTip";
import DrawerComponent from "./components/DrawerComponent";
import ImageComponent from "./components/ImageComponent";
import MenuComponent from "./components/MenuComponent";
import ModalComponent from "./components/MOdalCOmponent";
import StackEx from "./components/StackEx";
import TabComponent from "./components/TabComponent";
import PaginationPages from "./pages/PaginationPages";

function App() {
  return (
    <Box m={12}>
      <AccordionComponent />
      <br />
      <TabComponent />
      <br />
      <DrawerComponent />
      <br />
      <MenuComponent />
      <br />
      <ModalComponent />
      <br />
      <CustomToolTip />
      <br />
      <ImageComponent />
      <br />
      <BadgeCom />
      <br />
      <CardComponent />
      <br />
      <StackEx />
      <br />
      <PaginationPages />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
}

export default App;
