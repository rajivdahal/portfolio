import React from 'react'
import "./Blogcomponent.css"
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import BLOG from "./Blog"

function Blogcomponent(props) {
    
   
    return(
        <div className="wrapper">
            <div className="image"><img src={props.image}/></div>
            <div className="line"></div>
            <Link to={`/blog/blogpost/${props.title}`}>
            <div className="title_wrapper"><div className="title">{props.title}</div></div>
            </Link>
            <div className="desc_wrapper"><div className="desc">{props.desc}</div></div>
            
            
        </div>
    )
}

export default Blogcomponent
