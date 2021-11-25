import React from 'react'
import "./Portfoliogallery.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';



function PORTFOLIOGALLERY() {
   
    return (
      <div className="portfolio_canvas">
        <div className="portfolio_gallery_grid">
			
           <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
	<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block customize_caption adjust_margin1">
	  <a href="https://www.youtube.com/channel/UCrrlJ23D2OJwOLp183yWAjA/videos" target="_blank">
        <h5>You Tube</h5></a>
        <p>content related to technology and some musical stuff</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block adjust_margin1">
        <a href="http://predictyourcarprice.herokuapp.com/homepage" target="_blank">
          <h5>AI and Machine Learning</h5></a>
        <p>machine learning algorithm to predict 2nd hand car price In Nepal.</p>
      </div>
    </div>
	<div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1487073240288-854ac7f1bb3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
        <a href="https://www.freelancer.com/" target="_blank"><h5>Freelancing</h5></a>
        <p>Freelancing at freelancer.com</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block adjust_margin1">
	  <a href="https://github.com/rajivdahal" target="_blank"> 
       <h5>Git hub repository</h5></a>
        <p>some projects that i already did and its code</p>
      </div>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon nxt_prv_color" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon nxt_prv_color" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="browse_blog">
	<div className="bg_text">
		<h1 className="h1content">I have always imagined that paradise will be a kind of library.<span className="span_class">—Jorge Luis Borges</span> </h1>
		 <Link to="/blog">
		  <div className="browse_blog_btn">
			  <div className="browse_blog_letter">
				  <h4 className="browse_letter">Browse Blog</h4>
			  </div>
		  </div>
		  </Link>
	</div>

</div>
        </div>
        </div>
    )
}

export default PORTFOLIOGALLERY
