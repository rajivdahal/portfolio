import React,{useState} from 'react'
import "./Blog.css"
import NAVBAR from "./Navbar"
import BLOGCOMPONENT from "./Blogcomponent"
import Blogdata from "./Blogdata.jsx"
import ReactPaginate from 'react-paginate'
 

function BLOG() {
    let [state, setstate] = useState(false)
    let slide_menu = () => {
        setstate(!state)
    }
  
        const [users, setusers] = useState(Blogdata)
        const [pagenumber, setpagenumber] = useState(0)
        const usersperpage=6
        const pagevisited=pagenumber*usersperpage
        const Displayusers=users.slice(pagevisited,pagevisited+usersperpage).map((users,index)=>{
            return(
                
                <BLOGCOMPONENT
                key={index}
                image={users.image}
                title={users.title}
                desc={users.desc}>
                </BLOGCOMPONENT>
            )
        })
        const pagecount=Math.ceil(users.length/usersperpage)
      const changepage=({selected})=>{
          setpagenumber(selected);
      };
    return (
        <>
        <div className={state ? "blog_canvas_none" : "blog_canvas"}>
            <NAVBAR></NAVBAR>
            <div className="blogs__header">
                <div className="front__blogs">MY<span>blogs</span>
                    <div className="bg__blogs">POSTS</div>
                </div>
            </div>
            <div className="home_blog_flex">
                <div className="home_blog_grid">
                    {Displayusers}
                </div>
            </div>
            <ReactPaginate
                    previousLabel={"Previous"}
                    NextLabel={"Next"}
                    pageCount={pagecount}
                    onPageChange={changepage}
                    containerClassName={"paginationbtn"}
                    previousLinkClassName={"previousbtn  "}
                    nextLinkClassName={"nextbtn  "}
                    disabledClassName={"disabledbtn  "}
                    activeClassName={"activebtn   "}
                    />
        </div>

            {/* responsive navbar ends */}
        </>
    )
}

export default BLOG
