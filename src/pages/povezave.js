import React from "react"

import Layout from "../components/layout"

const povezave = ({ data }) => (
  <Layout>
    <article>
      <header>
        <h5 className="item-title">Povezave</h5>
      </header>
    </article>

    <div>
      <div className="povezave-content content-section">
        <a
          className="flex-3"
          target="_blank"
          rel="noopener noreferrer"
          href="https://meteo.arso.gov.si/met/sl/warning/"
        >
          {/* Arso-Vremenska opozorila */}

          <img src="./icons/arso.png" alt="Logo" />
        </a>
        <a
          className="flex-3"
          target="_blank"
          rel="noopener noreferrer"
          href="https://meteo.arso.gov.si/met/sl/warning/fire"
        >
          {/* Arso-Požarna ogroženost */}
          <img src="./icons/arso.png" alt="Logo" />
        </a>

        <a
          className="flexItem"
          target="_blank"
          rel="noopener noreferrer"
          href="http://wap.sos112.si/Dogodek"
        >
          {/* SOS */}
          <img src="./icons/spin112.png" alt="Logo" />
        </a>
      </div>
    </div>
    <div className="povezave-content content-section">
      <a
        className="flexItem"
        target="_blank"
        rel="noopener noreferrer"
        href="https://spin3.sos112.si/javno/zemljevid"
      >
        {/* Spin */}
        <img src="./icons/spin.png" alt="Logo" />
      </a>
      <a
        className="flex-2"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.gasilec.net"
      >
        {/* Gasilska zveza Slovenije */}
        <img src="./icons/gzs.gif" alt="Logo" />
      </a>
    </div>
  </Layout>
)

export const queryImages = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        sourceInstanceName: { eq: "icons" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default povezave
