import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState,useContext } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import GroupIcon from '@mui/icons-material/Group';
function SideBar() {
  let {user,logoutUser} = useContext(AuthContext)

  return (
    // 
    <>
    <div className='maindiv'>
      <div className="leftBar">
      <div className="container">
        <div className="menu">
          {/* <div className="user">
            <h1>Sociogram</h1>
            
          </div> */}
            <Link to={'/'}>
          <div className="item">
            <img src='' alt="" />
            <span><HomeIcon/></span>

            <span>Home</span>
          </div>
            </Link>
            <Link to={'/message'}>
          <div className="item">
            <img src='' alt="" />
            <span><ChatBubbleIcon/></span>

            <span>Messages</span>
          </div>
            </Link>
            <Link to={`/profile/${user.user_id}`}>
          <div className="item">
            <img src='' alt="" />
            <span><PersonPinIcon/></span>

            <span>My Profile</span>
          </div>
            </Link>
            <Link to={'/people'}>
          <div className="item">
            <img src='' alt="" />
            <span><GroupIcon/></span>

            <span>Peoples</span>
          </div>
            </Link>
          
          
          {/* <div className="item">
            <img src='https://cdn-icons-png.flaticon.com/512/21/21104.png' alt="" />
            <span>Watch</span>
          </div> */}
          {/* <div className="item">
            <img src='' alt="" />
            <span onClick={logoutUser}>LogOut</span>
          </div> */}
        </div>
        
       
        
      </div>
    </div>
    </div>
    </>



  );
}
export default SideBar
