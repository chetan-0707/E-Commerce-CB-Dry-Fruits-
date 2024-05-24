import React from "react";
import "./Footer.css";

// <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>


const Footer = () => {
    return (
        <>
        <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>CB Dryfruits</h4>
  	 			<ul>
  	 				<li><a href="/Aboutus">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="/Almond">Almond</a></li>
  	 				<li><a href="/Figs">Figs</a></li>
  	 				<li><a href="/Cashewnuts">Cashewnuts</a></li>
  	 				<li><a href="/Raisin">Raisin</a></li>
                    <li><a href="/Pista">Pista</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/nskgp"><i className="fab fa-facebook-f"></i></a>
  	 				{/* <a href="#"><i className="fab fa-twitter"></i></a> */}
  	 				<a href="https://www.instagram.com/cb_dryfruit/"><i className="fab fa-instagram"></i></a>
					
					{/* <a href="#"> <i className='fab fa-apple'></i> </a> */}
  	 				{/* <a href="#"><i className="fab fa-linkedin-in"></i></a> */}
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>


       </>
    );
};

export default Footer;