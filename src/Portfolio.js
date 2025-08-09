import "./Portfolio.css"
import NAVBAR from "./Navbar"
import PORTFOLIOGALLERY from "./Portfoliogallery"

function PORTFOLIO() {
    return (
        <>
        <div className={"portfolio_canvas"}>
            <NAVBAR></NAVBAR>
            <div className="portfolio__header">
                <div className="front__portfolio">MY<span>PORTFOLIO</span>
                    <div className="bg__portfolio">WORKS</div>
                </div>
            </div>

        <PORTFOLIOGALLERY/>
       
        </div>
        </>
    )
}

export default PORTFOLIO
