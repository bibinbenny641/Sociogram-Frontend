// import "./Posts.css";
import moment from 'moment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RedoIcon from '@mui/icons-material/Redo';
import { useState, useEffect, useContext } from "react";
import { padding } from "@mui/system";
import AuthContext from "../../context/AuthContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import InnerPost from "./InnerPost";
import { useNavigate } from 'react-router-dom'
import Results from "../results/Results";
import { toast } from "react-toastify";

export default function Post({ setLoading }) {
  let { user } = useContext(AuthContext)
  let { added, setAdded } = useContext(AuthContext)
  const [viewposts, setViewposts] = useState([])
  let { logoutUser,url } = useContext(AuthContext)
  let navigate = useNavigate()
  const [isedited,setIsedited] = useState(false)


  let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null)


  let postGet = async () => {

    let response = await fetch(url+`/follow/getposts/${user.user_id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer  ${String(JSON.parse(authTokens).access)}`
      },

    })
    let data = await response.json()

    if (response.status === 200) {

      setLoading(false)
      setAdded(false)
      setViewposts(data.data)
    } else {

      logoutUser()

    }
  }
  let deletePost = async (id) => {
    let response = await fetch(url+`/follow/deletePostAdmin/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer  ${String(JSON.parse(authTokens).access)}`
      },

    })
    let data = await response.json()

    if (response.status === 200) {
      toast.success('deleted')
      postGet()
    } else {
      // logoutUser()
      alert('failed')

    }
  }

  useEffect(() => {
    postGet()
  }, [added,isedited],)

  return (
    <>



      
      {
        viewposts.map((foll, i) => (
          <div key={i}>
            <InnerPost foll={foll} Comments={Comments} postGet={postGet} viewposts={viewposts} deletePost={deletePost} isedited={isedited}
            setIsedited={setIsedited} />
          </div>

        ))
      }

    </>
  );
}
