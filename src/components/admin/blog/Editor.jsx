// import React, { useState } from "react";
import { Box, Button, Flex, Grid, GridItem, Stack } from "@chakra-ui/react";
import Ribbon from "./Ribbon";
import InputPanel from "./InputPanel";

function TextEditor() {
   
    return (
        <Grid
            gridTemplateAreas={
                `"header header header"
             "side ribbon ribbon"             
             `
            }
            gridTemplateColumns={'20% 1fr'}
            h={'auto'}

        >
            <GridItem gridArea={'header'} bg={'gray.400'}>
                <Box>

                </Box>
                <Box>
                    <Ribbon />
                </Box>
            </GridItem>
            <GridItem gridArea={'side'} bg={'gray.300'}>
                Item2
            </GridItem>
            <GridItem gridArea={'ribbon'} bg={'gray.200'}>
                <Stack>
                    <Box>
                        <InputPanel />
                    </Box>
                    <Flex justify={'right'} >
                        <Button colorScheme="teal">Post</Button>
                    </Flex>
                </Stack>

            </GridItem>
        </Grid>
    );
}

export default TextEditor;