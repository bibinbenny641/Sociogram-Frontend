import React, { useContext, useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import AuthContext from '../../context/AuthContext'
import { toast } from "react-toastify";


function Suggestions() {
    let { user } = useContext(AuthContext)
    let { logoutUser,url } = useContext(AuthContext)

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null)
    let [suggesteduser, setSuggesteduser] = useState([])
    let followSuggestion = async () => {
        let response = await fetch(url+`/follow/suggestion/${user.user_id}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${String(JSON.parse(authTokens).access)}`
          },
    
        })
        let data = await response.json()
    
        if (response.status === 201) {
          setSuggesteduser(data)
    
    
        } else {
          // logoutUser()
    
        }
      } 
      let followuser = async (id) => {
        console.log(id, 'followuser function')
        let response = await fetch(url+`/follow/follow_a_user/${user.user_id}/${id}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${String(JSON.parse(authTokens).access)}`
          },
    
        })
        let data = await response.json()
    
        if (response.status === 200) {
          toast.success(data['hai'])
    
    
    
        } else {
          logoutUser()
          // alert('failed')
    
        }
      }
      useEffect(() => {
        followSuggestion()
        
    
      }, [suggesteduser])
    
    return (
        
        <>
        
        {
            suggesteduser.map((i,index)=>(

            <div style={{ width: '40vh', margin: '2vh' }}>

                <Card size={'md'}>
                    <CardHeader>
                        <Avatar size='xl' name='Segun Adebayo' src='https://cdn-icons-png.flaticon.com/512/21/21104.png' />
                    </CardHeader>
                    <CardBody>
                        <Heading size={'md'}>{i.fullname}</Heading>
                        {i.user_name?
                        <Text key={index} >{i.user_name}</Text>
                        :<Text>.</Text>
                        }
                    </CardBody>
                    <CardFooter>
                    <Button colorScheme='blue' onClick={() => { followuser(i.id) }} >follow</Button>

                    </CardFooter>
                </Card>
            </div>
            ))
        }
            
        </>
    )
}

export default Suggestions