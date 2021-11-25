import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./Home.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DraftsIcon from '@material-ui/icons/Drafts';
import ForumIcon from '@material-ui/icons/Forum';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import NAVBAR from "./Navbar"
import SLIDEBUTTON from "./Slidebutton"
import image from "./img/1.jpg"



export default function Home() {
  let [state, setstate] = useState(false)
  let slide_menu = () => {
    setstate(!state)

  }
  return (

    <>

      <div className="Home">
        <div className="home__Text__Header">
          <div className="home__Text__Header_Title">
            <div className="home__Text__Header_Dash"></div>
            <div className="name adj_font font_color adj_name_for_responsive">I'M RAJIV DAHAL.</div>
          </div>
          <div className="adj_font">COMPUTER ENGINEER</div>
          <div className="home__Text__Header_Dsc">
            <p>Hi! it's me Rajiv Dahal. I am passionate about building excellent software<br /> that improves the lives of those around me.
            Besides developing I love<br/> to create and experiment with new stuff<br />
             </p>
          </div>

          <SLIDEBUTTON message={"More about me"} />
        </div>

        <NAVBAR></NAVBAR>


      </div>

      {/* code for <990px */}
      <div className="home2">
        <div className="img_rounded">
        <img src={image}></img>
        </div>
        <div className="home2_namewrapper">
          <div className="name adj_font font_color margin_adjuster1 name_adj_for_responsive">I'M RAJIV DAHAL.</div>
          <div className="adj_font color_adjuster dsc_adj_for_responsive">COMPUTER ENGINEER</div>
          <div className="home__Text__Header_Dsc1 margin_adjuster2">
          <p>Hi! it's me Rajiv Dahal. I am passionate about building excellent software<br /> that improves the lives of those around me.
            Besides developing I love<br/> to create and experiment with new stuff<br />
             </p>
          </div>
        </div>
        
        <div className="adjust_btn">
        
        <SLIDEBUTTON message={"More about me"} />
        
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



    </>
  )
}
