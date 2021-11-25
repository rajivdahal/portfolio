import React, { useState } from 'react'
import "./About.css"
import NAVBAR from "./Navbar"
import INFOGRID from "./Infogrid"
import SVGSKILL from "./Svgskill"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Experienceandeducation from "./Experienceandeducation"
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import DraftsIcon from '@material-ui/icons/Drafts';
import ForumIcon from '@material-ui/icons/Forum';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';
import image from "./img/1.jpg"


const ABOUT = () => {
    let [state, setstate] = useState(false)
    let slide_menu = () => {
        setstate(!state)
    }
   
   

    return (
      
        
        <>
            <div className="canvas" id={state ? "show_none" : ""}>
                <div className="about__header">
                    <div className="front__about">ABOUT <span>ME</span>
                        <div className="bg__resume">RESUME</div>
                    </div>
                </div>
                <NAVBAR></NAVBAR>
                <div className="about_upper_container">
                    <div className="about_info_resume">
                        <h3>PERSONAL INFOS</h3>
                        <div className="image_rounded">
                        <img src={image}></img>
                        </div>
                        
                        <div className="about_info_resume_child">
                            <div className="actual_info">
                                <div>FirstName:<span>Rajiv</span></div>
                                <div>LastName:<span>Dahal</span></div>
                                <div>Age:<span>21yrs</span></div>
                                <div>Nationality:<span>Nepali</span></div>
                                <div>Freelance:<span>Available</span></div>



                            </div>
                            <div className="actual_info">
                                <div>Address:<span>Kathmandu</span></div>
                                <div>Phone:<span>+977-98400*****</span></div>
                                <div>Email:<span>rajivdahal2@gmail.com</span></div>
                                <div>facebook:<span>Razeev Dahal</span></div>
                                <div>Language:<span>Nepali,English,Hindi</span></div>
                            </div>

                        </div>
                    </div>
                    <div className="about_info_box">
                        <INFOGRID years="2.5+" message="YEARS OF EXPERIENCE"/>
                        <INFOGRID years="10+" message="COMPLETED PROJECTS"/>
                        <INFOGRID years="2+" message="HAPPY CUSTOMERS"/>
                    </div>
                </div>
                <div className="slide_button1">
                    <div className="btn btn_addj" onClick={()=>{
                        alert("unavailable this time please send a mail")
                    }}>
                        <div className="btn_inner btn_inner_adj">
                        </div>
                        <div className="btn_attributes btn_attributes_adj">
                            <div className="btn_attribute_more btn_attribute_more_adj">download CV</div>
                            <div className=" btn_attribute_icon"><GetAppIcon/></div>
                        </div>
                    </div>
                </div>
                <div className="slide_btn_for_mobile">
                
                            <div className=" btn_attribute_icon add_class" onClick={()=>{
                        alert("unavailable this time please send a mail")
                    }}><GetAppIcon/></div>
                            <div className="caption_for_btn">download CV</div>

                </div>

                <div className="hr_line"><hr className="skill_up_hr"></hr></div>
                <div className="skill_header">
                    <h3>MY SKILLS</h3>
                </div>
                <div className="skills">
                    <div>
                        <div className="cont">
                            <SVGSKILL />
                        </div>
                    </div>

                </div>
                <div className="hr_line adjhr_line"><hr></hr></div>
                <div className="skill_header">
                    <h3>Experience and Education</h3>
                </div>


                <Experienceandeducation className="custom_experience"
                    tfordev={"2019-Present"} tforedu={"2015"}
                    hfordev={"Web Development"} hforedu={"SLC"}
                    dfordev={"Got trained from Broadway -did many projects till now"}
                    dforedu={"passed SLC in 2015(Government of Nepal)"}
                    college={"HBHS"}
                    institute={"Broadway Infosys"}

                />
                <Experienceandeducation className="custom_experience"
                    tfordev={"2020-Present"} tforedu={"2017"}
                    hfordev={"Python and Django"} hforedu={"High School"}
                    dfordev={"Got trained Online and did many projects"}
                    dforedu={"Passed High school in 2017 from Uniglobe college(NEB)"}
                    college={"Uniglobe College"}
                    institute={"Online"}
                />
                <Experienceandeducation className="custom_experience"
                    tfordev={"Mid2020-Present"} tforedu={"2018-Present"}
                    hfordev={"AI and Machine Learning"} hforedu={"Bachelor"}
                    dfordev={"Got trained Online  and did many projects"}
                    dforedu={"Currently studying Computer Engineering-expected to graduate in 2022 "}
                    college={"Tribhuvan University"}
                    institute={"Online"}
                />

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
        </>
    )
}

export default ABOUT
