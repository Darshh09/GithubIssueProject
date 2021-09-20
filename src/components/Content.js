import Icon from '@chakra-ui/icon';
import { Box, HStack , Text, Button, Stack, Tabs, TabList, TabPanels, Tab, TabPanel , Badge} from '@chakra-ui/react';
import React, { useState } from 'react';
import {BiErrorCircle} from 'react-icons/bi'
import {AiOutlineCheck} from  'react-icons/ai'
import {FaRegDotCircle} from 'react-icons/fa'
import {FiMessageSquare} from 'react-icons/fi'

function Content(props) {

    const [state, updateState] = useState(props.issArray);

    const [title, settitle] = useState('');

    const getData = (props) => {
            updateState(props.issArray);
    }

    return (
        <div class = "container-fluid" >
           <Box  backgroundColor="#f7f7f7"
              // height={{
              //   base: "1200px", // 0-48em
              //   md: "649px", // 48em-80em,
              //   xl: "700px", // 80em+
              // }}
              padding="20px"
              width={{ base: "100%", md: "100%", xl: "95%" }}
              borderWidth="2px"px
              marginStart = "20px"
              borderRadius="lg"
              shadow="2xl">
                  <HStack>
                        <Icon fontSize = "28px" as = {BiErrorCircle} />
                        <Text fontSize = "24px">Issues</Text>
                        <Box backgroundColor = "#E4EBF4" borderRadius = "30px" padding = "4px">
                        <Text  fontSize = "16px">{props.issuesL}</Text>
                        </Box>
                  </HStack>

                 <Box   backgroundColor="#E4EBF4"
                        borderRadius="20px"
                        shadow="xl"
                        padding={5}
                        marginTop = "20px">
                        <Tabs variant="enclosed">
  <TabList>
    <Tab><HStack><Icon as = {FaRegDotCircle} /> <Text>Open</Text></HStack></Tab>
    <Tab><HStack><Icon  as = {AiOutlineCheck}/> <Text>Closed</Text></HStack></Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
        {props.issArray != null || props.issArray.length != 0 ? ( <>
        {props.issArray.map((index) => {
      return (
      index.map((i) => {
         return(
            <Stack>
            <HStack>
            <Icon fontSize = "20px" textColor = "green" as = {FaRegDotCircle} />
             <Text fontSize = "20px">{i.title}</Text>
             {i.label.length === 0  ? null : (<>{i.label.map((index) => {
                
                    return(
                        <Badge variant="solid" background= {"#" + index.color}>{index.name}</Badge>
                    )
             })}</>)} 
             
            </HStack>
             <Stack alignSelf = "flex-start" >
                 <HStack>
                  <Text marginStart = "30px" fontSize = "16px" textColor = "grey">#{i.number} </Text>
                  <Text fontSize = "16px" textColor = "grey">Created on :- {i.createdOn} </Text>
                  <Text fontSize = "16px" textColor = "grey">Updated on :- {i.updatedAt}</Text>
                  </HStack>
             </Stack>
             {i.comments === 0  ? null :   <Stack alignSelf = "flex-end" >
                   <HStack  marginTop = "-50px" >
                     <Icon fontSize = "24px" as = {FiMessageSquare}/>
                     <Text>{i.comments}</Text>
                     </HStack>
               </Stack> }
              
             </Stack>
         )

      })
   )
        })}
      </>) : null}
       
    </TabPanel>
    <TabPanel>
      <p>No Data</p>
    </TabPanel>
  </TabPanels>
</Tabs>
                 </Box>

           </Box>
        </div>
    );
}

export default Content;