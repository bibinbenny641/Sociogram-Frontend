import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import "./share.css";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { Input, position } from "@chakra-ui/react";

const Share = () => {
  const generateError = (err) =>
    toast.error(err, {
      position: 'bottom-right',
    })

  let user = useContext(AuthContext)
  let {added,setAdded,url} = useContext(AuthContext)

  let u = user.user.user_id
  let navigate = useNavigate()
  let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null)
  const [preview, setPreview] = useState()
  const [file, setFile] = useState(null)
  const [caption, setCaption] = useState('')
  const [isDone,setIsDone] = useState(false)

  let PostAdd = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', file)
    formData.append('caption', caption)

    if (caption === '') {
      toast.error(`Cannot add an empty post`,{theme:"dark"},{position:'top-right'})
    } else {

      let response = await fetch(url+`/follow/addposts/${u}`, {
        method: 'POST',
        body: formData,
        headers: {
          // 'Content-Type':'multipart/form-data',
          Authorization: `Bearer  ${String(JSON.parse(authTokens).access)}`
        },


      })
      let data = await response.json()
      if (response.status === 200){
        setAdded(true)
        setIsDone(true)
        toast.success('successfully added post')
      }
      else if(response.status === 400) {
        generateError("an error occured")
        navigate('/')
      } else {
        generateError('failed to add post')
        navigate('/')
      }
    }
  }
  useEffect(() => {
    setCaption('')
  }, [isDone])
  


  useEffect(() => {
    if (!file) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)


  }, [file,added,caption])

  const setImage = (e) => {
    setFile(e.target.files[0])
  }


  return (
    <div className="share">
      <div className="container">
        <form encType="multipart/form-data" onSubmit={PostAdd}>


          <div className="top">
            <img
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
              alt=""
            />
            <Input style={{ background: 'white', borderRadius: "30px" }} onChange={(e) => { setCaption(e.target.value) }} name='caption' value={caption.caption} type="text" placeholder="Enter your thoughts" />
          </div>
          <hr />
          <div className="bottom">
            <div className="left">
              <input accept=".jpg, .jpeg, .png" onChange={(e) => {
                setImage(e)
              }} type="file" id="post" name="post" style={{ display: "none" }} />
              <label htmlFor="post">

                <div className="item">
                  <img src="" alt="" />
                  <span style={{ color: 'black' }}><AddPhotoAlternateOutlinedIcon /></span>
                  <label>add image</label>
                </div>
              </label>
              {
                preview ?
                  <div style={{ height: '50px', width: '50px',  }} className="item">
                    <img src={preview} alt="" />
                  </div> :
                  null
              }

            </div>
            <div className="right">
              <button>Share</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Share;