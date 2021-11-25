import React,{useState} from 'react'
import "./Blog.css"
import NAVBAR from "./Navbar"
import BLOGCOMPONENT from "./Blogcomponent"
import Blogdata from "./Blogdata.jsx"
import ReactPaginate from 'react-paginate'
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import MenuIcon from '@material-ui/icons/Menu';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';
 

function BLOG() {
    let [state, setstate] = useState(false)
    let slide_menu = () => {
        setstate(!state)
    }
  
        const [users, setusers] = useState(Blogdata)
        const [pagenumber, setpagenumber] = useState(0)
        const usersperpage=6
        const pagevisited=pagenumber*usersperpage
        const Displayusers=users.slice(pagevisited,pagevisited+usersperpage).map((users,index)=>{
            return(
                
                <BLOGCOMPONENT
                key={index}
                image={users.image}
                title={users.title}
                desc={users.desc}>
                </BLOGCOMPONENT>
            )
        })
        const pagecount=Math.ceil(users.length/usersperpage)
      const changepage=({selected})=>{
          setpagenumber(selected);
      };
    return (
        <>
        <div className={state ? "blog_canvas_none" : "blog_canvas"}>
            <NAVBAR></NAVBAR>
            <div className="blogs__header">
                <div className="front__blogs">MY<span>blogs</span>
                    <div className="bg__blogs">POSTS</div>
                </div>
            </div>
            <div className="home_blog_flex">
                <div className="home_blog_grid">
                    {Displayusers}
                </div>
            </div>
            <ReactPaginate
                    previousLabel={"Previous"}
                    NextLabel={"Next"}
                    pageCount={pagecount}
                    onPageChange={changepage}
                    containerClassName={"paginationbtn"}
                    previousLinkClassName={"previousbtn  "}
                    nextLinkClassName={"nextbtn  "}
                    disabledClassName={"disabledbtn  "}
                    activeClassName={"activebtn   "}
                    />
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
        </>
    )
}

export default BLOG
