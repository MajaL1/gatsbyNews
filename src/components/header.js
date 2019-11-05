import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle, subtitle, description }) => (


  <header className="header" >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: `center`,

      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `lightGray`,
            textDecoration: `none`,
            textAlign: `center`,
            fontFamily: `Arial Black`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p style={{
        color: `#d6d673`,
        textDecoration: `none`,
        textAlign: `center`,
        fontFamily: `Candara`
      }}><i>
         {subtitle}
        </i></p>
    </div>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `test`,
}

export default Header
