import React from "react"

import Layout from "../components/layout"
import { FaTwitter, FaFacebook, FaYoutube, FaMailBulk } from 'react-icons/fa'
import Image from "../components/image"

const About = () => (

   <Layout>
    <article>
          <header>
            <h5 className="item-title">
              Testni podnaslov
            </h5>
          
            <p className="content-section">Test vsebine</p>
          </header>

        <section className="content-section">
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    
    <Image />
      </section>
    
          
          <footer>

          </footer>
        </article>
    
    

    <hr/>
    <div>
      <FaTwitter size="50px"color="darkgrey" />
      <FaFacebook size="50px"color="darkgrey" />
      <FaYoutube size="50px"color="darkgrey"/>
      <FaMailBulk size="50px"color="darkgrey"/>
    </div>
    </Layout>

)

export default About
