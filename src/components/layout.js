import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Navigation from "./Navigation"
import ContentRight from "./ContentRight"
import Helmet from "react-helmet"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <div className="top-div">
        <Helmet>
          <title>Prostovoljno gasilsko društvo Štangarske Poljane</title>
          <meta
            name="title"
            content="Prostovoljno gasilsko društvo Štangarske poljane"
          />
          <meta
            name="description"
            content="Uradna stran prostovoljnega gasilskega društva Štangarske Poljane"
          />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          subtitle={data.site.siteMetadata.subtitle}
        />
        <Navigation />

        <div className="content-main-div">
          <div className="main-content-left"></div>
          <main className="main-content">{children}</main>
          <div className="main-content-right">
            <ContentRight />
          </div>
        </div>


        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
