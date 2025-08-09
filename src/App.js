import HOME from "./Home";
import ABOUT from "./About";
import CONTACT from "./Contact";
import PORTFOLIO from "./Portfolio";
import BLOG from "./Blog";
import BLOGVIEW1 from "./Blogview";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DraftsIcon from '@material-ui/icons/Drafts';
import ForumIcon from '@material-ui/icons/Forum';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css'

export default function App() {
  return (
    <Router>
      <ResponsiveNavbar />
      <Switch>
        <Route exact path="/">
          <HOME />
        </Route>
        <Route exact path="/portfolio">
          <HOME />
        </Route>
        <Route exact path="/portfolio/about">
          <ABOUT />
        </Route>
        <Route exact path="/portfolio/contact">
          <CONTACT />
        </Route>
        <Route exact path="/portfolio/portfolio">
          <PORTFOLIO />
        </Route>
        <Route exact path="/portfolio/blog">
          <BLOG />
        </Route>
        <Route exact path="/portfolio/rajivdahal">
          <HOME />
        </Route>
        <Route path="/portfolio/blog/blogpost/:title">
          <BLOGVIEW1 />
        </Route>

      </Switch>
    </Router>
  );
}


function ResponsiveNavbar () {
  let [state, setstate] = useState(false)
  let slide_menu = () => {
    setstate(!state)
  }
  return <>
    <div className="slide_button" onClick={slide_menu}><MenuIcon style={{ color: "white" }} fontSize="large" /></div>
    <div id={state ? "responsive_menu" : "show_none"} className="responsive_menu1">
                <Link to="/portfolio"  onClick={slide_menu}>
                    <div className="res_menu_items">
                        <div className="res_menu_icon"><HomeIcon style={{ color: "white" }} fontSize="large" /></div>
                        <div className="res_menu_title">Home</div>
                        <hr style={{ color: "brown" }} />
                    </div>
                </Link>
                <Link to="/portfolio/about" onClick={slide_menu}>
                <hr style={{ color: "white" }} />
                <div className="res_menu_items">
                    <div className="res_menu_icon"><PersonIcon style={{ color: "white" }} fontSize="large" /></div>
                    <div className="res_menu_title">About</div>
                </div>
                <hr style={{ color: "white" }} />
                </Link>
                <Link to="/portfolio/portfolio"  onClick={slide_menu}>
                <div className="res_menu_items">
                    <div className="res_menu_icon"><BusinessCenterIcon style={{ color: "white" }} fontSize="large" /></div>
                    <div className="res_menu_title">Portfolio</div>
                </div>
                <hr style={{ color: "white" }} />
                </Link>
                <Link to="/portfolio/contact"  onClick={slide_menu}>
                <div className="res_menu_items">
                    <div className="res_menu_icon"><DraftsIcon style={{ color: "white" }} fontSize="large" /></div>
                    <div className="res_menu_title">Contact</div>
                </div>
                <hr style={{ color: "white" }} />
                </Link>
                <Link to="/portfolio/blog">
                <div className="res_menu_items"  onClick={slide_menu}>
                    <div className="res_menu_icon"><ForumIcon style={{ color: "white" }} fontSize="large" /></div>
                    <div className="res_menu_title">Blog</div>
                </div>
                <hr style={{ color: "white" }} />
                </Link>

    </div>
  </>
  

}