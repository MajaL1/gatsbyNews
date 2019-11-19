import React from "react"

import Layout from "../components/layout"
import { FaTwitter, FaFacebook, FaYoutube, FaMailBulk } from 'react-icons/fa'

const About = () => (
  <Layout>
    <p className="content-title">O nas</p>
    <div>
      <FaTwitter size="50px"/>
      <FaFacebook/>
      <FaYoutube/>
      <FaMailBulk/>
    </div>
  </Layout>
)

export default About
