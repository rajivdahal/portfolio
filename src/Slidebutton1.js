import React from 'react'
import "./Slidebutton1.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function SLIDEBUTTON1(props) {
    return (
        <div>
             <div className="btn">
            <div className="btn_inner">
            </div>
            <div className="btn_attributes">
              <div className="btn_attribute_more">{props.message}</div>
              <div className="btn_attribute_icon"><ArrowForwardIcon /></div>
            </div>
          </div>
        </div>
    )
}
