import React from 'react'
import "./Experienceandeducation.css"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';

export default function Experienceandeducation(props) {
    return (
        <div className="experience_and_education">
                <div className="experience_and_education_box margin_adj">
                    <div className="adjust_header">
                        <div className="icon_bg"><BusinessCenterIcon style={{ color: "white" }} /></div>
                        <div className="time_tag">{props.tfordev}</div>
                  
                    </div>
                    <div className="vertical_line"></div>
                    <div className="inside_content">
                        <div className="inside_content_header">{props.hfordev}-<span>{props.institute}</span> </div>
                        <div className="inside_content_dsc">{props.dfordev}</div>
                    </div>
                </div>
                <div className="experience_and_education_box">
                <div className="adjust_header">
                        <div className="icon_bg"><SchoolIcon style={{ color: "white" }} /></div>
                        <div className="time_tag">{props.tforedu}</div>
                  
                    </div>
                    <div className="vertical_line"></div>
                    <div className="inside_content">
                        <div className="inside_content_header">{props.hforedu}-<span>{props.college}</span> </div>
                        <div className="inside_content_dsc">{props.dforedu}</div>
                    </div>
                    

                </div>
            </div>

    )
}
