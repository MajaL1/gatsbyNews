import React from "react"

import Layout from "../components/layout"
import { FaTwitter, FaFacebook, FaYoutube, FaMailBulk } from 'react-icons/fa';

const Kontakt = () => (
  <Layout>
    <article class="contact-article">
    <header>
          <h5 className="item-title">Podatki o društvu</h5>
    
            <p className="content-section-contact">Prostovoljno gasilsko društvo Štangarske Poljane</p>
            <p className="content-section-contact">Štangarske Poljane 1</p>
            <p className="content-section-contact">1275 Šmartno pri Litiji  </p>
    
            <hr/>
    
            <span className="content-section-contact"><strong>TRR</strong></span>
            <span>IBAN SI56 0290 0000 0200 020</span>
 
            <p/>
            <span className="content-section-contact"><strong>Matična številka</strong></span>
            <span>1234567890123456789</span>

            <p/>
            <span className="content-section-contact"><strong>Davčna številka</strong></span>
            <span>9876543</span>
   
            <p/>
            <span className="content-section-contact"><strong>Email</strong></span>
            <span>pgdstangarskepoljane@gmail.com</span>
         
            <p/>
            <span className="content-section-contact"><strong>Telefonska številka</strong></span>
            <span>040123456</span>

          </header>

         
          <footer>

          </footer>
    <hr/>
      <div>
      <FaFacebook size="50px"color="darkgrey" />
      <FaYoutube size="50px"color="darkgrey"/>
      <FaMailBulk size="50px"color="darkgrey"/>
    </div>
        </article>

 
    
  </Layout>
)

export default Kontakt
