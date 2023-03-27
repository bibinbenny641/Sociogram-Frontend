import React, { useContext, useEffect, useState } from 'react'
// import Table from 'react-bootstrap/Table';
import AuthContext from '../context/AuthContext';
import { useNavigate} from 'react-router-dom'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Tag,
  Button

} from '@chakra-ui/react'


function UsersTable() {
  let navigate = useNavigate()

  let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null)
  let { logoutAdmin,url } = useContext(AuthContext)
  const [list, setList] = useState([])
  useEffect(() => {
    setAuthTokens(localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null)
    userlist()
  }, [])
  console.log(list)
  // let {authTokens}=useContext(AuthContext)
  let userlist = async () => {

    let response = await fetch(url+'/adminside/users/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer  ${String(JSON.parse(authTokens).access)}`
      },
    })
    let data = await response.json()
    
    if (response.status === 200) {
      setList(data.data)


    } else {
      
      navigate('/admin')

    }
  }

  let deleteuser = async (obj_id) => {
    console.log(obj_id)
    let response = await fetch(url+`/adminside/delete/${obj_id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer  ${String(JSON.parse(authTokens).access)}`
      },
    })
    await response.json()
    if (response.status === 202) {
      userlist()

    } else {
      alert("Something went wrong tto!!")
    }

  }


  let control = async (obj_id) => {
    console.log(obj_id)
    let response = await fetch(url+`/adminside/block/${obj_id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer  ${String(JSON.parse(authTokens).access)}`
      },
    })
    let data = await response.json()
    console.log(data)
    if (response.status === 200) {
      userlist()

    } else {
      alert("Something went wrong tto!!")
    }

  }
  useEffect(() => {
    userlist()
  }, [list])
  

  return (
    <div>

      <br></br>
      <center>
        <Tag variant='solid' colorScheme='teal'>Users Details</Tag>
      </center>
      <div>
        <Button onClick={logoutAdmin} colorScheme='red' variant='outline'>
          LogOut
        </Button>
      </div>

      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>Sl No.</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th isNumeric>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {list?.map((obj, index) =>
              <Tr key={index}>
                <Td>{obj.id}</Td>
                <Td>{obj.fullname}</Td>
                <Td >{obj.email}</Td>


                {
                  obj.active ?
                    <Td> <Button colorScheme='red' onClick={() => control(obj.id)} >Block</Button>{' '}</Td> :
                    <Td> <Button colorScheme='green' onClick={() => control(obj.id)}>Unblock</Button>{' '}</Td>
                }
                <Td>
                  <Button>
                    <DeleteIcon onClick={()=>deleteuser(obj.id)}/>
                  </Button>
                </Td>

              </Tr>
            )
            }

          </Tbody>

        </Table>
      </TableContainer>







    </div>
  )
}

export default UsersTable