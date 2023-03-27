import React from 'react'
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Center
} from "@chakra-ui/react";
import { PinInput, PinInputField } from '@chakra-ui/react'
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Otp(values,setOtp) {
    const [otpnum,setOtpnum] = useState([])
    const [phone,setPhone] = useState([])
    let { url } = useContext(AuthContext)
    const ph = values

  const navigate = useNavigate()
    
    const handelChange = (e) => {

        setOtpnum({
          ...otpnum,
          [e.target.name]: e.target.value
        });
    
      };
      console.log(otpnum,'ee')
      const requestedData = {
        value1 : otpnum,
        values2 : values
      }
      let handleSubmit = async (e)=>{
        e.preventDefault()
        let response = await fetch(url+'/api/otp/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestedData)
    
        })
        // let data = await response.json()
    
        if (response.status === 202) {
          // console.log(data,'get comments')
        //   toast.success('comment deleted')
            toast.success('verification Completed')
            navigate('/login')
            
    
        } 
        else{
            toast.error('verification failed')
        //   setOtp(false)

        }
      }

    
    return (
        <>

            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
            >
                {/* <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                > */}
                    <Avatar bg="blue.500" />
                    <Heading color="blue.400">OTP Verificaiton</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form >
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <Center>

                                {/* <FormControl>
                                    <InputGroup> */}
                                        <PinInput otp>
                                        <Input maxLength='4' type="number" name='otp' placeholder=' otp'
                                            onChange={handelChange}
                                            
                                            />
                                        </PinInput>
                                    {/* </InputGroup>

                                </FormControl> */}
                                </Center>


                                <Button
                                    onClick={handleSubmit}
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="blue"
                                    width="full"
                                >
                                    Submit
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                {/* </Stack> */}
                {/* <Box>
          Already have an account?{" "}
          <Link to={'/login'} color="teal.500" >
            Login
          </Link>
        </Box> */}

            </Flex>
        </>
    )
}

export default Otp