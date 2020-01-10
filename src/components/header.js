import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, subtitle, description }) => (
  <header className="header row">
    <div className="header-logo col-lg-2 col-md-2 col-sm-12">
      {/* <img className="header-logo-img" src="../icons/icon-96x96.png" alt="" />
 */}    </div>
    <div className="header-main-div col-lg-8 col-md-8 col-sm-12">
      <span
        className="header-title"
      >
        <h1>
          <Link to="/" className="header-title-link">
            {siteTitle}
          </Link>
        </h1>
        <p className="header-title-p">
          <i>{subtitle}</i>
        </p>
      </span>
    </div>
    <div className="header-icons col-lg-2 col-md-2 col-sm-12">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../icons/fb.svg" width="25px" alt="" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../icons/instagram_25x.png" alt="" />
      </a>
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
