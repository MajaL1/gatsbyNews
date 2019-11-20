import React from "react"

import Layout from "../components/layout"
import { FaTwitter, FaFacebook, FaYoutube, FaMailBulk } from 'react-icons/fa';

const Kontakt = () => (
  <Layout>
    <p className="content-title">Kontakt</p>
    <article>
    <header>
          <h5 className="item-title">Naslov</h5>
            <p className="content-section">Štangarske Poljane 1, 1275 Šmartno pri Litiji  </p>

            <h5 className="item-title">TRR</h5>
            <p className="content-section">IBAN SI56 0290 0000 0200 020</p>
 
            <h5 className="item-title">Matična številka</h5>
            <p className="content-section">1234567890123456789</p>

            <h5 className="item-title">Davčna številka</h5>
            <p className="content-section">9876543</p>

            <h5 className="item-title">Email</h5>
            <p className="content-section">pgdstangarskepoljane@gmail.com</p>

            <h5 className="item-title">Telefonska številka</h5>
            <p className="content-section">041 123 456</p>

          </header>

         
          <footer>

          </footer>
        </article>


    <FaTwitter/>
    <FaFacebook/>
    <FaYoutube/>
    <FaMailBulk/>
    
  </Layout>
)

export default Kontakt
