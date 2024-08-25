import { Box } from "@chakra-ui/react";
import "./App.css";
import AccordionComponent from "./components/AccordionComponent";
import DrawerComponent from "./components/DrawerComponent";
import MenuComponent from "./components/MenuComponent";
import TabComponent from "./components/TabComponent";
import ModalComponent from "./components/MOdalCOmponent";
import CustomToolTip from "./components/CustomToolTip";
import ImageComponent from "./components/ImageComponent";
import BadgeCom from "./components/BadgeCom";
import CardComponent from "./components/CardComponent";

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
      <ModalComponent/>
      <br />
      <CustomToolTip/>
      <br />
      <ImageComponent/>
      <br />
      <BadgeCom/>
      <br />
      <CardComponent/>
    </Box>
  );
}

export default App;
