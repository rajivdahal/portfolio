import React,{useState} from 'react'
import "./Portfolio.css"
import NAVBAR from "./Navbar"
import PORTFOLIOGALLERY from "./Portfoliogallery"
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import MenuIcon from '@material-ui/icons/Menu';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';

function PORTFOLIO() {
    let [state, setstate] = useState(false)
    let slide_menu = () => {
        setstate(!state)
    }
   
    return (
        <>
        <div className={state ? "display_none" : "portfolio_canvas"}>
            <NAVBAR></NAVBAR>
            <div className="portfolio__header">
                <div className="front__portfolio">MY<span>PORTFOLIO</span>
                    <div className="bg__portfolio">WORKS</div>
                </div>
            </div>

        <PORTFOLIOGALLERY/>
       

            
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

export default PORTFOLIO
