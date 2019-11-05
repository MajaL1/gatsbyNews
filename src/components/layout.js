import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"



import Header from "./header"
import "./layout.css"
import "../css/main.css"
import Navigation from "./Navigation"

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
const Home = ({ path, message }) => (
  <div>
    <h2>
      {message} {path}
    </h2>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  test: "test"
}

export default Layout