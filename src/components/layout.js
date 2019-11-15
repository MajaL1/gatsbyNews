import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../css/main.css"
import Navigation from "./Navigation"
import Helmet from "react-helmet"

const Layout = ({ children, test="test" }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            subtitle
          }
        }
      }
    `}
    render={(data, test) => (
      <div className="top-div">
        <Helmet>
      
            <title>My Awesome Website</title>
            <meta name="title" content="Prostovoljno gasilsko drustvo Stangarske poljane" />
            <meta name="description" content="Uradna stran prostovoljnega gasilskega drustva Stangarske Poljane" />
            {/* <!-- Open Graph / Facebook --> */}
           {/* <meta property="og:type" content="website" />
            <meta property="og:url" content="http://myawesomewebsite.com/" />
            <meta property="og:title" content="My Awesome Website" />
            <meta property="og:description" content="This website is so awesome that I really don't think you can handle how much awesome that is happening here." />
            <meta property="og:image" content="http://myawesomewebsite.com/facebookimage.png" /> */}
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle}   />
        <Navigation />

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            width:  `auto`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            // backgroundColor: `grey`
          }}
        >
          <main className="main-content" test={"test"}>{children}</main>

          <footer>
            {/*  © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://strapi.io">Strapi</a>
 */}          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  test: "test"
}

export default Layout