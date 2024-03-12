/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  { useState } from 'react'
import { TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/tabs';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import ReactHtmlParser from 'html-react-parser';

export default function InputPanel({onChange, value}) {
    
    return (
        <Box>
            <Flex >
                <Tabs w={'100%'} size='md' variant='enclosed' bg={'white'}>
                    <TabList>
                        <Tab>Write</Tab>
                        <Tab>Preview</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel minH={'100px'} >
                            <Textarea minH={'190px'} name='blogContent' value={value} onChange={onChange} />
                        </TabPanel>
                        <TabPanel minH={'214px'} bg={'white'} border={'1px solid bbb'} borderRadius={'10px'}>
                            <Text>
                                {
                                    ReactHtmlParser(value)
                                }
                            </Text>
                        </TabPanel>

                    </TabPanels>
                </Tabs>
            </Flex>
        </Box>
    )
}