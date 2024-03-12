import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Nav from "../../components/admin/nav/Nav";

export default function Comments() {
  return (
   <>
         <Nav/> 
         <div>
            <Tabs size='md' variant='enclosed'>
            <TabList>
                <Tab>View Comments</Tab>
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
