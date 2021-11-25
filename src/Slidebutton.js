import React from 'react'
import "./Slidebutton.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

export default function SLIDEBUTTON(props) {
    return (
        <div>
          <Link to="about">
             <div className="btn">
            <div className="btn_inner">
              
            </div>
            <div className="btn_attributes">
              <div className="btn_attribute_more">{props.message}</div>
              <div className="btn_attribute_icon"><ArrowForwardIcon /></div>
            </div>
          </div>
          </Link>
        </div>
    )
}
