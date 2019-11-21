import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
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
      
            <title>Prostovoljno gasilsko društvo Štangarske Poljane</title>
            <meta name="title" content="Prostovoljno gasilsko društvo Štangarske poljane" />
            <meta name="description" content="Uradna stran prostovoljnega gasilskega društva Štangarske Poljane" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle}   />
        <Navigation />

        <div className="content-main-div">
          <main className="main-content" test={"test"}>{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  test: "test"
}

export default Layout
