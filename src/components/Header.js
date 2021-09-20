import React from 'react';
import  {FiGithub} from 'react-icons/fi'
import {AiOutlineBell , AiOutlineBars, AiOutlineEye,AiFillStar,AiOutlineFork} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {HStack ,Stack, Text, Icon, Box, Divider} from '@chakra-ui/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/react"

function Header(props) {
    return (
      <div class="container-fluid">
        <div class="row" style={{ background: "#24292F", padding: "20px" }}>
          <div class="col-1">
            <AiOutlineBars color="white" size="40px" />
          </div>
          <div class="col-9">
          <Icon  textColor = "white" alignSelf = "flex-end" fontSize="40px" as = {FiGithub} />
          </div>
          <div class="col-2 ">
          <Icon  textColor = "white" alignSelf = "flex-end" fontSize="40px" as = {AiOutlineBell} />
          </div>
        </div>
        <div class="row" style={{ padding: "20px" }}>
          <div class="col-4" >
            <HStack>
              <Icon fontSize="22px" as = {BiBook} />
               <Text fontSize = "24px">facebook / </Text>
               <Text fontSize = "24px">Create React App</Text>
            </HStack>
          </div>
          <div class = "col-1 offset-md-4" >
               <Box maxW = "150px" padding = {1} border = "1px" borderColor = "grey" borderRadius = "10px">
                   <HStack>
                     <Icon as = {AiOutlineEye} fontSize = "24px" />
                     <Text>Watch</Text>
                     <Text>1.9k</Text>
                    </HStack>
               </Box>
          </div>
          <div class = "col-1">
               <Box maxW = "150px" padding = {1} border = "1px" borderColor = "grey" borderRadius = "10px">
                   <HStack>
                     <Icon as = {AiFillStar} fontSize = "24px" />
                     <Text>Unstar</Text>
                     <Text>80k</Text>
                    </HStack>
               </Box>
          </div>
          <div class = "col-2">
               <Box padding = {1} maxW = "150px" border = "1px" borderColor = "grey" borderRadius = "10px">
                   <HStack>
                     <Icon as = {AiOutlineFork} fontSize = "24px" />
                     <Text>Fork</Text>
                     <Divider />
                     <Text>19.4k</Text>
                    </HStack>
               </Box>
          </div>
        </div>
      </div>
    );
}

export default Header;