import React from 'react'
import "./Infogrid.css"

export default function INFOGRID(props) {
    return (
        <div>
               <div className="about_info_box_content">
                        <div className="number">{props.years}</div>
                        <div className="desc">
                            <div className="small_line"></div>
                            <div className="real_desc">{props.message}</div>
                        </div>

                    </div>
        </div>
    )
}
