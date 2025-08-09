import React from "react"
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DraftsIcon from '@material-ui/icons/Drafts';
import ForumIcon from '@material-ui/icons/Forum';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css"

const NAVBAR = () => {
  const {pathname} = useLocation()
  const getActiveClass = (tabName)  => {
      const path = pathname.split('/')[1] || 'home'
      if(path === tabName) return 'active'
      return 'inactive'
  }

    return (
        <div>
             <div className="Navbar">
             <Link to="/">
          <div className={`icon_wrapper ${getActiveClass('home')}`}><div className="icon_header">HOME</div>
            <div className="none"></div>
            <div className="icon"><HomeIcon fontSize="small" /></div>
          </div>
          </Link>
          <Link to="/about">
          <div className={`icon_wrapper ${getActiveClass('about')}`}><div className="icon_header">ABOUT</div>
            <div className="none"></div>
            <div className="icon"><PersonIcon fontSize="small" /></div>
          </div>
          </Link>
          <Link to="/Portfolio">
          <div className={`icon_wrapper ${getActiveClass('Portfolio')}`}><div className=" icon_header_rename">PORTFOLIO</div>
            <div className="none"></div>
            <div className="icon"><BusinessCenterIcon fontSize="small" /></div>
          </div>
          </Link>
          <Link to="/contact">
          <div className={`icon_wrapper ${getActiveClass('contact')}`}><div className="icon_header_rename1">CONTACT</div>
            <div className="none"></div>
            <div className="icon"><DraftsIcon fontSize="small" /></div>
          </div>
          </Link>
          <Link to="/blog">
          <div className={`icon_wrapper ${getActiveClass('blog')}`}><div className="icon_header">BLOG</div>
            <div className="none"></div>
            <div className="icon"><ForumIcon fontSize="small" /></div>
          </div>
          </Link>
        </div>
        </div>
    )
}

export default NAVBAR
