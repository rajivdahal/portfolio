import React from 'react'
import HOME from "./Home"
import ABOUT from "./About"
import CONTACT from "./Contact"
import PORTFOLIO from "./Portfolio"
import BLOG from "./Blog"
import BLOGVIEW1 from "./Blogview"
import BLOGDATA from "./Blogdata"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
export default function App() {
  return (
   
    <Router>
      <Switch>
        <Route exact path="/"><HOME/></Route>
        <Route exact path="/about"><ABOUT/></Route>
        <Route exact path="/contact"><CONTACT/></Route>
        <Route exact path="/portfolio"><PORTFOLIO/></Route>
        <Route exact path="/blog"><BLOG/></Route>
        <Route path="/blog/blogpost/:title"><BLOGVIEW1/></Route>
      </Switch>
    </Router>

  )
}
