import React,{useEffect,useState} from 'react'
import "./Blogview.css"
import {useParams,useLocation,useHistory} from "react-router-dom";
import BLOGDATA from "./Blogdata"
import NAVBAR from "./Navbar"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import MenuIcon from '@material-ui/icons/Menu';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { Link } from 'react-router-dom';
import DraftsIcon from '@material-ui/icons/Drafts';


function BLOGVIEW1() {
    const {title}=useParams();
    
    const history=useHistory();
    let [state, setstate] = useState(false)
    let slide_menu = () => {
        setstate(!state)
    }

  
    
useEffect(() => {
        BLOGDATA.forEach(data => {
            if(data.title===title)
            {  
               document.getElementById("render").innerHTML=
               `
               <div class="flex_center">
               <div class="category">-${data.category}</div>
               <div class="blogpage_title">${data.title}</div>
                <img src=${data.image} class="blogpage_image"></img>
                <p class="blogpage_content">${data.content}</p>
                <div class="date">${data.date}<span/></div>
                </div>
               `
            }
           
            })
                             
   
                            
},[])

    return (
        <div className="canvas">
             <NAVBAR></NAVBAR>
            <div className="blogs__header">
                <div className="front__blogs">MY<span>blogs</span>
                    <div className="bg__blogs">POSTS</div>
                </div>
            </div>
          
            
          <div id="render" className="container"></div>
          <div className="container go_back">
          <button onClick={()=>{
                history.goBack()
            }} className="go_back_button">back</button>

        </div>    
             {/* responsive navbar starts */}
             <div className="slide_button" onClick={slide_menu}><MenuIcon style={{ color: "white" }} fontSize="large" /></div>
            <div id={state ? "responsive_menu" : "show_none"} className="responsive_menu1">
                <Link to="/">
                    <div className="res_menu_items">
                        <div className="res_menu_icon"><HomeIcon style={{ color: "white" }} fontSize="large" /></div>
                        <div className="res_menu_title">Home</div>
                        <hr style={{ color: "brown" }} />
                    </div>
                </Link>
                <Link to="/about">
                <hr style={{ color: "white" }} />
                <div className="res_menu_items">
                    <div className="res_menu_icon"><PersonIcon style={{ color: "white" }} fontSize="large" /></div>
                    <div className="res_menu_title">About</div>
                </div>
                <hr style={{ color: "white" }} />
                </Link>
                <Link to="/portfolio">
                <div className="res_menu_items">
                    <div className="res_menu_icon"><BusinessCenterIcon style={{ color: "white" }} fontSize="large" /></div>
                    <div className="res_menu_title">Portfolio</div>
                </div>
                <hr style={{ color: "white" }} />
                </Link>
                <Link to="/contact">
                <div className="res_menu_items">
                    <div className="res_menu_icon"><DraftsIcon style={{ color: "white" }} fontSize="large" /></div>
                    <div className="res_menu_title">Contact</div>
                </div>
                <hr style={{ color: "white" }} />
                </Link>
                <Link to="/blog">
                <div className="res_menu_items">
                    <div className="res_menu_icon"><ForumIcon style={{ color: "white" }} fontSize="large" /></div>
                    <div className="res_menu_title">Blog</div>
                </div>
                <hr style={{ color: "white" }} />
                </Link>

            </div>

            {/* responsive navbar ends */}
            
        </div>
    )
}

export default BLOGVIEW1
