import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Nav from "../../components/admin/nav/Nav";

export default function Users() {
  return (
    <>
         <Nav/> 
          <div>
            <Tabs size='md' variant='enclosed'>
            <TabList>
                <Tab>View Users</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </div>
    </>
  )
}
