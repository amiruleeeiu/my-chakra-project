import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

function TabComponent() {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            provident aliquid optio voluptatem dolor vel eum aliquam corporis
            totam aut libero amet, blanditiis perspiciatis fugiat. Sint officia,
            provident earum, culpa nisi vitae eius nesciunt exercitationem
            laudantium doloribus dicta at cupiditate. Commodi ipsum ullam
            sapiente placeat amet,
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            dolores velit mollitia dolor illum, error iure aliquid! Sunt
            voluptates, id cupiditate quibusdam eaque saepe numquam similique
            dolore suscipit dolor a pariatur perspiciatis fugit? Dolore
            inventore, architecto consectetur voluptatem iure exercitationem.
            Quae officia quos ipsum unde nostrum, accusantium possimus qui iusto
            voluptas voluptatibus ullam maiores exercitationem suscipit
            temporibus repudiandae est totam veritatis assumenda odio.!!
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabComponent;
