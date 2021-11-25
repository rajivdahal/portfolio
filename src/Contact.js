import React,{useState} from 'react'
import "./Contact.css"
import NAVBAR from "./Navbar"
import DraftsIcon from '@material-ui/icons/Drafts';
import InstagramIcon from '@material-ui/icons/Instagram';
import SLIDEBUTTON from "./Slidebutton"
import SendIcon from '@material-ui/icons/Send';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import MenuIcon from '@material-ui/icons/Menu';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
var validname=false;
var validemail=false;

function CONTACT() {
    let [state, setstate] = useState(false)
    let slide_menu = () => {
        setstate(!state)
    }
    let [state_for_alert,setstate_for_alert]=useState(false)
    let [state_for_alert1,setstate_for_alert1]=useState(true)
function blurname(e){
    let regex= /^[a-zA-z ]([  0-9a-zA-z]){1,30}$/;
    let str=e.target.value
    console.log(str,regex)
    if(regex.test(str)){
        console.log("matched")
        e.target.classList.remove("is-invalid")
        validname=true
    }
    else{
        console.log("doesnt match")
        e.target.classList.add("is-invalid")
        validname=false
    }

}    
function bluremail(e){
    let regex= /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str=e.target.value
    console.log(str,regex)
    if(regex.test(str)){
        console.log("matched")
        e.target.classList.remove("is-invalid")
        validemail=true
    }
    else{
        console.log("doesnt match")
        e.target.classList.add("is-invalid")
        validemail=false
    }

}  

function sendEmail(e) {
        e.preventDefault();
        console.log("valid name is"+validname+validemail)
        if(validname && validemail){
            setstate_for_alert(true)
            console.log(state_for_alert)
            emailjs.sendForm('service_7ek1nq7', 'template_5902p1b', e.target, 'user_sg4BZu2uyG1e9SolBFBZQ')
          .then((result) => {
              console.log(typeof result.text);
              console.log(result)
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          setTimeout(() => {
            setstate_for_alert(false)
        },3000);
        }
        else{
            console.log("inside else")
            setstate_for_alert1(false)
            setTimeout(() => {
                setstate_for_alert1(true)
            },3000);
        }
}

    return (
        <div className="contact_canvas">
            <div className="contact__header">
                <div className="front__contact">GET IN <span>TOUCH</span>
                    <div className="bg__contact">CONTACT</div>
                </div>
            </div>
            <NAVBAR></NAVBAR>

            <div className="contact_body">
                <div className="contact_body_box adjust_padding">
                    <div className="dontbeshy_container">
                        <h3>LET'S KEEP IN TOUCH</h3>
                    </div>
                    <div className="contact_header_dsc">
                        <p>Feel free to get in touch with me. I am always<br /> open to discussing new projects, creative ideas<br /> or opportunities to be part of your visions.</p>
                    </div>
                    <div className="icon_and_contact_container">
                        <DraftsIcon style={{ color: "red" }} className="jhjk"/>
                        <div className="icon_and_contact_headinganddsc">
                            <a href="https://mail.google.com/" target="_blank">
                            <h4>MAIL ME</h4>
                            </a>
                            <h5>rajivdahal2@gmail.com</h5>
                        </div>
                    </div>

                    <div className="icon_and_contact_container">
                        <InstagramIcon style={{ color: "red" }} className="jhjk"/>
                        <div className="icon_and_contact_headinganddsc">
                        <a href="https://www.instagram.com/" target="_blank">
                            <h4>DM ME</h4>
                        </a>    
                            <h5>rxzd.hl</h5>
                        </div>
                    </div>
                    <div className="contact_me_links">
                       <a href="https://www.facebook.com/suprim.dahal.7"  target="_blank"><div className="adjust_inner_icon"><FacebookIcon fontSize="small"/></div></a>
                       <a href="" > <div className="adjust_inner_icon"><TwitterIcon fontSize="small"/></div></a>
                       <a href="https://www.youtube.com/channel/UCrrlJ23D2OJwOLp183yWAjA/videos"  target="_blank"><div className="adjust_inner_icon"><YouTubeIcon fontSize="small"/></div></a>
                       <a href="" > <div className="adjust_inner_icon"><LinkedInIcon fontSize="small"/></div></a>

                    </div>
                </div>
                <div className="contact_body_box">
                    <form onSubmit={sendEmail}>
                        <div className="visitor_info_container">
                            <div>
                            <input placeholder="YOUR NAME" name="name" required className=" form-control" onChange={blurname}></input>
                            <div className="invalid-feedback">please enter correct username</div>
                            </div>
                            <div>
                            <input placeholder="YOUR EMAIL" name="email" required className=" form-control" onChange={bluremail}></input>
                            <div className="invalid-feedback">please enter correct email</div>
                            </div>
                            <div>
                            <input placeholder="YOUR SUBJECT" name="subject" className=" form-control"></input>
                            </div>
                        </div>
                        <div className="visitor_message">
                            <textarea placeholder="YOUR MESSAGE" name="message" required></textarea>
                        </div>
                        <div className="action_submit">
                            <div className="width_to_expand"></div>
                            <div className="icon_inside"><SendIcon fontSize="small"/></div>
                           <button type="submit"><div className="heading_inside">SEND MESSAGE</div></button> 
                        </div>
                    </form>
                </div>
          </div>
          <div role="alert" className={state_for_alert ?"alert alert-success alert-dismissible fade show container my-4" : "alert alert-success alert-dismissible fade container my-4"}>
           <strong style={{color:"green"}}>Success!</strong> your message has been sent
                 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
               </div>
               <div role="alert" className={state_for_alert1 ?"alert alert-success alert-dismissible fade container" : "alert alert-danger alert-dismissible fade show container"}>
               <strong style={{color:"red"}}>opps!</strong> we encountered some errors 
                 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
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


        </div>
    )
}

export default CONTACT
