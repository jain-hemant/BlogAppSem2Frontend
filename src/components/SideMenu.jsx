/* eslint-disable react/prop-types */
import { Heading, VStack } from '@chakra-ui/react';

export default function Sidemenu({ isOpen, onChange, categories=[] }) {
   
    return (
        // If Slider is true or open then below components will be renders
        isOpen && <VStack align={'center'} >

            <VStack align={'left'} pl={'2'} p={'20px 0px'}>
                {
                    categories?.map((category, index) => {
                         return category.isActive && <Heading  cursor={'pointer'} size={'sm'} onClick={()=>onChange(index)} key={category._id}> {category.title}</Heading>
                    })
                }
            </VStack>
        </VStack >
    )
}