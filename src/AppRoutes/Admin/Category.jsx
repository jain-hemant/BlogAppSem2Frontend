import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import BlogType from '../../components/admin/category/BlogType'
import ListCategories from '../../components/admin/category/ListCategories'
import Nav from '../../components/admin/nav/Nav'

export default function Category() {

  return (
    <>
    <Nav/>
    <div>
      <Tabs size='md' variant='enclosed'>
        <TabList>
          <Tab>Add New Category</Tab>
          <Tab>View Category List</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
              <BlogType/>
          </TabPanel>
          <TabPanel>
              <ListCategories/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    </>
  )
}
