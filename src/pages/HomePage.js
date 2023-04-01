import React, { useState } from "react";
import './HomePage.css'
import Topbar from "../components/topbar/Topbar";
import Post from "../components/posts/Post";
import { Row } from 'react-bootstrap'
import SideBar from "../components/SideBar";
import Share from "../components/share/Share";
import Rightsidebar from "../components/Rightcontainer/rightsidebar/Rightsidebar";
import { BounceLoader, HashLoader } from 'react-spinners'
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';

import { SkeletonCircle, SkeletonText, Stack, Skeleton, } from '@chakra-ui/react'
import UserProfile from "../components/profile/UserProfile";
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Button, Heading, Text, Image, IconButton } from '@chakra-ui/react'
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Divider } from '@chakra-ui/react'


const HomePage = () => {
    const [loading, setLoading] = useState(true)

    return (
        <>
            <div className="theme-light">

                <Row>
                    <div style={{ position: 'sticky' }}>

                        <Topbar />
                    </div>

                </Row>
                <Row>
                    <div style={{ display: 'flex' }}>
                        <SideBar />
                        <div className="mainhomepage">
                            {
                                loading ?
                                    <>

                                        <div style={{ color: 'red', height: '60vh' }}>

                                            <div style={{ width: '90vh' }} className="share">


                                                {/* <Skeleton startColor='pink.500' endColor='orange.500' height='20px' /> */}

                                                {/* <center>

                                                    <HashLoader color="#36d7b7" />
                                                </center> */}
                                                <Box padding='6' boxShadow='lg' bg='white'>

                                                    <SkeletonCircle size='10' />
                                                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                                                </Box>
                                                <Box padding='6' boxShadow='lg' bg='white'>

                                                    <SkeletonCircle size='10' />
                                                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                                                </Box>
                                                <Box padding='6' boxShadow='lg' bg='white'>

                                                    <SkeletonCircle size='10' />
                                                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                                                </Box>
                                                <Box padding='6' boxShadow='lg' bg='white'>

                                                    <SkeletonCircle size='10' />
                                                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                                                </Box>


                                            </div>

                                        </div>

                                    </>
                                    :
                                    <Share />
                            }

                            <Post setLoading=
                                {setLoading
                                } />


                            
                            <Card maxW='880px'>
                                <CardHeader >
                                    <Flex spacing='4'>
                                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                            <Avatar name='Segun Adebayo' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' />

                                            <Box>
                                                <Heading size='sm'>Peter Henry</Heading>
                                                <Text>Model</Text>
                                            </Box>
                                        </Flex>
                                        <IconButton
                                            variant='ghost'
                                            colorScheme='gray'
                                            aria-label='See menu'
                                        />
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Text fontSize='20px'>
                                        Sociogram enables you to find new peoples and interact with them.
                                    </Text>
                                </CardBody>
                                <Image
                                    objectFit='cover'
                                    src='https://burst.shopifycdn.com/photos/fashion-toronto-watch.jpg?width=373&format=pjpg&exif=0&iptc=0'
                                    alt='Chakra UI'
                                />

                                <CardFooter
                                    justify='space-between'
                                    flexWrap='wrap'
                                    sx={{
                                        '& > button': {
                                            minW: '136px',
                                        },
                                    }}
                                >
                                    <Button  flex='1' variant='ghost' >
                        <span><FavoriteOutlinedIcon style={{ color: 'blue' }} /></span>
                        <span>246</span>

                    </Button>
                    <Button  flex='1' variant='ghost' >
                    <MapsUgcRoundedIcon/>
                    </Button>
                                </CardFooter>
                            </Card>
                            <Divider variant="thick" colorScheme="brand" />
                            <Card maxW='880px'>
                                <CardHeader >
                                    <Flex spacing='4'>
                                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                            <Avatar name='Segun Adebayo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1G5dsFH8wVsw1RvVVT_1kLXbPfhvqcrsnx4r6_Am1sg&s' />

                                            <Box>
                                                <Heading size='sm'>John Doe</Heading>
                                                <Text>Photographer</Text>
                                            </Box>
                                        </Flex>
                                        <IconButton
                                            variant='ghost'
                                            colorScheme='gray'
                                            aria-label='See menu'
                                        />
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                <Text fontSize='20px'>
                                    Choose scenery photos that match your brand’s unique style. 
                                    </Text>
                                </CardBody>
                                <Image
                                    objectFit='cover'
                                    src='https://burst.shopifycdn.com/photos/friends-winter-hiking.jpg?width=373&format=pjpg&exif=1&iptc=1'
                                    alt='Chakra UI'
                                />

                                <CardFooter
                                    justify='space-between'
                                    flexWrap='wrap'
                                    sx={{
                                        '& > button': {
                                            minW: '136px',
                                        },
                                    }}
                                >
                                    <Button  flex='1' variant='ghost' >
                        <span><FavoriteOutlinedIcon style={{ color: 'blue' }} /></span>
                        <span>246</span>

                    </Button>
                    <Button  flex='1' variant='ghost' >
                    <MapsUgcRoundedIcon/>
                    </Button>
                                </CardFooter>
                            </Card>
                            <Divider variant="thick" colorScheme="brand" />
                            <Card maxW='880px'>
                                <CardHeader >
                                    <Flex spacing='4'>
                                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                            <Avatar name='Nivin' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' />

                                            <Box>
                                                <Heading size='sm'>Nivin</Heading>
                                                <Text>Content Creator</Text>
                                            </Box>
                                        </Flex>
                                        <IconButton
                                            variant='ghost'
                                            colorScheme='gray'
                                            aria-label='See menu'
                                        />
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Text fontSize='20px'>
                                        Sociogram enables you to find new peoples and interact with them.
                                    </Text>
                                </CardBody>
                                <Image
                                    objectFit='cover'
                                    src='https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-thumb.jpg'
                                    alt='Chakra UI'
                                />

                                <CardFooter
                                    justify='space-between'
                                    flexWrap='wrap'
                                    sx={{
                                        '& > button': {
                                            minW: '136px',
                                        },
                                    }}
                                >
                                    <Button  flex='1' variant='ghost' >
                        <span><FavoriteOutlinedIcon style={{ color: 'blue' }} /></span>
                        <span>246</span>

                    </Button>
                    <Button  flex='1' variant='ghost' >
                    <MapsUgcRoundedIcon/>
                    </Button>
                                </CardFooter>
                            </Card>
                            <Divider variant="thick" colorScheme="brand" />


                        </div>
                        <Rightsidebar />
                    </div>
                </Row>
            </div>

        </>
    )
}
export default HomePage