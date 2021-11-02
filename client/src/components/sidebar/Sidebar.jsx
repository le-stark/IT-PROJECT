import { Link } from "react-router-dom";
import "./sidebar.css";
import {Facebook, Instagram, Pinterest, Twitter} from '@mui/icons-material';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=> {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Create by Me
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
            <Link to={`/?cat=${c.name}`} className="link"  key={c._id}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <Facebook className="sidebarIcon"/>
            <Instagram className="sidebarIcon"/>
            <Pinterest className="sidebarIcon"/>
            <Twitter className="sidebarIcon"/>
        </div>
      </div>
    </div>
  );
}