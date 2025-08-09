import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./Home.css"
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DraftsIcon from '@material-ui/icons/Drafts';
import ForumIcon from '@material-ui/icons/Forum';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import NAVBAR from "./Navbar"
import SLIDEBUTTON from "./Slidebutton"
import image from "./img/my_profile.jpg"

const bio = `COMPUTER ENGINEER, SOFTWARE ENGINEER, AI DEVELOPER, TECH ENTREPRENEUR`

export default function Home() {

  return (

    <>

      <div className="Home">
        <div className="home__Text__Header">
          <div className="home__Text__Header_Title">
            <div className="home__Text__Header_Dash"></div>
            <div className="name adj_font font_color adj_name_for_responsive">I'M RAJIV DAHAL.</div>
          </div>
          <div className="scroll-wrapper">
            <div className="adj_font scroll-content">
                  <span>{bio}  &nbsp;&nbsp;&nbsp;</span>
                  <span>{bio} &nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
          <div className="home__Text__Header_Dsc">
            <p>
              Hi! I'm Rajiv Dahal — a Computer Engineer, Software Engineer, AI Developer and Tech Entrepreneur.<br />
              I'm passionate about creating impactful software solutions that empower people and solve real-world problems.<br />
              Whether it's building robust applications, launching tech-driven ventures, or experimenting with cutting-edge AI.<br />
              I thrive at the intersection of innovation and execution.
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
        </div>
         <div className="bio_home2 adj_font color_adjuster dsc_adj_for_responsive scroll-wrapper">
            <div className="adj_font scroll-content">
                  <span>{bio}  &nbsp;&nbsp;&nbsp;</span>
                  <span>{bio} &nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
          <div className="home__Text__Header_Dsc1 margin_adjuster2 desc_home2">
          <p>
              Hi! I'm Rajiv Dahal — a Computer Engineer, Software Engineer, AI Developer and Tech Entrepreneur.<br />
              I'm passionate about creating impactful software solutions that empower people and solve real-world problems.<br />
              Whether it's building robust applications, launching tech-driven ventures, or experimenting with cutting-edge AI.<br />
              I thrive at the intersection of innovation and execution.
          </p>
          </div>
        <div className="adjust_btn">
          <SLIDEBUTTON message={"More about me"} />
        </div>
        
          
        
 {/* responsive navbar starts */}
      </div>
    </>
  )
}
