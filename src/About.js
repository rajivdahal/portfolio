import "./About.css"
import NAVBAR from "./Navbar"
import INFOGRID from "./Infogrid"
import SVGSKILL, { SOFTSKILLS } from "./Svgskill"
import Experienceandeducation, { GoogleScholar, ResearchAndPublications } from "./Experienceandeducation"
import image from "./img/my_profile.jpg"


const ABOUT = () => {

    return (
        <>
            <div className="canvas" >
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
                                <div>Pronoun:<span>Sr. Software <br/> Engineer</span></div>
                                <div>FirstName:<span>Rajiv</span></div>
                                <div>LastName:<span>Dahal</span></div>
                                <div>Age:<span>25yrs</span></div>
                            </div>
                            <div className="actual_info">
                                <div>Nationality:<span>Nepali</span></div>
                                <div>Freelance:<span>Available</span></div>
                                <div>Address: <span>Alabama, United States</span></div>
                                <div>Email:<a href="mailto:rajivdahal2@gmail.com"><span>rajivdahal2@gmail.com</span></a></div>
                                <div>Language:<span>Nepali,English,Hindi,<br/> Spanish</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="about_info_box">
                        <INFOGRID years="5+" message="YEARS OF EXPERIENCE"/>
                        <INFOGRID years="n+" message="COMPLETED PROJECTS"/>
                        <INFOGRID years="n+" message="HAPPY CUSTOMERS"/>
                    </div>
                </div>
                {/* <div className="slide_button1">
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
                </div> */}
                {/* <div className="slide_btn_for_mobile">
                
                            <div className=" btn_attribute_icon add_class" onClick={()=>{
                        alert("unavailable this time please send a mail")
                    }}><GetAppIcon/></div>
                            <div className="caption_for_btn">download CV</div>
                </div> */}

                <div className="hr_line"><hr className="skill_up_hr"></hr></div>
                <div className="skill_header">
                    <h3>MY PROGRAMMING SKILLS</h3>
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
                    <h3>Experience, Education and Trainings</h3>
                </div>

                <Experienceandeducation className="custom_experience"
                    tfordev={"2023-Present"} tforedu={"2025-Present"}
                    hfordev={"In the Process of Launching a Scalable Tech Product"} 
                    hforedu={"Master in Artificial Intelligence"}
                    dfordev={"🚀Open to investment and strategic partnerships. Seeking investments"}
                    institute={"USA"}
                    dforedu={"Alabama, United States of America"}
                    college={"Troy University"}
                />
                <Experienceandeducation className="custom_experience"
                    tfordev={"2024-2025"} tforedu={"2018-2022"}
                    hfordev={"Sr. Software Developer"} 
                    hforedu={"Bachelor in Engineering"}
                    dfordev={"Sydney, Australia"}
                    institute={"Riskflo Inc"}
                    dforedu={"Studied Computer Engineering- graduated in 2022 "}
                    college={"Tribhuvan University(IOE)"}
                />

                <Experienceandeducation className="custom_experience"
                    tfordev={"06/2022 - 08/2023"} tforedu={"2015-2017"}
                    hfordev={"Lead Software Engineer- React.js, Next.js"} hforedu={"High School"}
                    dfordev={"Kathmandu, Nepal"}
                    dforedu={"Passed High school in 2017 from Uniglobe college(NEB)"}
                    college={"Uniglobe Higher Secondary School"}
                    institute={"Yantracore Tech"}
                />
                <Experienceandeducation className="custom_experience"
                    tfordev={"04/2022 - 08/2023"} tforedu={"2015"}
                    hfordev={"Lead Software Engineer"} hforedu={"Shool"}
                    dfordev={"Seoul, Korea | Kathmandu, Nepal"}
                    dforedu={"passed SLC in 2015(Government of Nepal)"}
                    college={"Government of Nepal"}
                    institute={"Crupee Software, Korea"}
                />
                <Experienceandeducation className="custom_experience"
                    tfordev={"10/2021 - 05/2022"} tforedu={"2022"}
                    hfordev={"Associate Software Engineer"} hforedu={"Full Stack Data Science Training"}
                    dfordev={"Kathmandu, Nepal"}
                    dforedu={"Data Analysis, Data Visualization, ML, DL, NLP, LLMs, RNN, CNN, Transformer along with Implementation on Django/Flask"}
                    college={"INeuron, India"}
                    institute={"Grow Tech Pvt. Ltd."}
                />
                <div className="hr_line adjhr_line research_and_publications_hr"><hr></hr></div>
                <div className="skill_header">
                    <h3>Research and Publications</h3>
                </div>
                
                <ResearchAndPublications className="custom_experience"
                    tfordev={"2022"} tforedu={"2023"}
                    hfordev={"Re-Commerce site with Image Processing and Voice Recognition"} 
                    hforedu={"Used Car Price Prediction using Linear Regression and Machine Learning"}
                    dfordev={"Click here to navigate Research Publication"}
                    institute={"ML & DL"}
                    dforedu={"Click here to navigate Research Publication"}
                    college={"Machine Learning Using Linear Regression"}
                    linkForDev={'https://www.researchgate.net/publication/383819148_Re-commerce_Site_with_Image_Processing_and_Voice_Recognition#fullTextFileContent'}
                    linkForEdu={'https://www.researchgate.net/publication/375697258_Used_car_price_prediction_using_Linear_regression'}
                />
                <GoogleScholar className="custom_experience"
                    tfordev={"2024"}
                    hfordev={"Google Scholar"} 
                    dfordev={"Click here to navigate"}
                    institute={"Machine learning and Software Engineering Research"}
                    linkForDev={'https://scholar.google.com/citations?user=I-Npn5EAAAAJ&hl=en'}
                />

                <div className="hr_line"><hr className="skill_up_hr"></hr></div>
                <div className="skill_header">
                    <h3>MY SOFT SKILLS</h3>
                </div>
                <div className="skills">
                    <div>
                        <div className="cont">
                            <SOFTSKILLS />
                        </div>
                    </div>

                </div>
            </div>

            {/* responsive navbar starts */}

            {/* responsive navbar ends */}
        </>
    )
}

export default ABOUT
