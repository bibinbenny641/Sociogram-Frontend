import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import { toast } from "react-toastify";


function EditComment({com,editComment,comm,datas,setDatas,foll,isedited,setIsedited},openEdit) {
  let { caption,setCaption,url } = useContext(AuthContext)
  let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null)


    let handleChange = (e)=>{
        setDatas(
          
          {
            ...datas,
            [e.target.name]:e.target.value})
      }
      let handleEdit = (e)=>{
        setCaption(
          
          {
            ...caption,
            [e.target.name]:e.target.value})
      }
      let editPost = async (id) => {
        let response = await fetch(url+`/follow/editpost/${id}/`, {
          method: 'PATCH', 
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${String(JSON.parse(authTokens).access)}`
          },
          body:JSON.stringify({caption})
    
        })
        let data = await response.json()
    
        if (response.status === 200) {
          caption.comment=''
          toast.success('Edit success')
          setIsedited(!isedited)
          openEdit()

        } else {
          // logoutUser()
          alert('failed')
    
        }
      }
      useEffect(() => {
      
        
      }, [caption])
      
      
    
  return (
    <>
    {foll ?
    <div className="comments container">
    <div  className="write">
      {/* <img src="" alt="" /> */}
      <input onChange={handleEdit} value={caption.comment} name="comment" placeholder={foll.postCaptioin} type="text"   />
      <button onClick={()=>editPost(foll.id)} >Edit</button>
    </div>
  </div>
  :
    <div className="comments container">
      <div  className="write">
        {/* <img src="" alt="" /> */}
        <input onChange={handleChange} value={datas.comment}  name="comment" type="text"  placeholder={com.comment} />
        <button onClick={()=>{editComment(com.id)}} >Edit</button>
      </div>
    </div>
  }
    </>
  )
}

export default EditComment