import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

function MenuComponent() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
    console.log(`Selected Item: ${item}`);
  };

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleMenuItemClick("Download")}>
            Download
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Create a Copy")}>
            Create a Copy
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Mark as Draft")}>
            Mark as Draft
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Delete")}>
            Delete
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Attend a Workshop")}>
            Attend a Workshop
          </MenuItem>
        </MenuList>
      </Menu>

      {selectedItem && <p>Selected: {selectedItem}</p>}
    </>
  );
}

export default MenuComponent;
