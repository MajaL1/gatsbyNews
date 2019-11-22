import React from "react"
import { FaTwitter, FaFacebook, FaYoutube, FaMailBulk } from 'react-icons/fa';


const Footer = () => (

  <footer className="footer" >
    <div className="main-footer-div">
   {/* <FaFacebook/> {'  '}
    <FaYoutube/> {'  '}
    <FaMailBulk/>  {'  '}*/}
    </div>
    
    <small className="footer-text">{" © Copyright 2019 Vse pravice pridržane"}</small>
    <small class="login-text">Prijava</small>
  </footer>

)

export default Footer
