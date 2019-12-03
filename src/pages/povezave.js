import React from "react"

import Layout from "../components/layout"

import { Link } from "gatsby-link"
import Img from "gatsby-image"

const imgGridStyle = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, 50px)`,
}

const povezave = ({ data }) => (
  <Layout>
    <article>
      <header>
        <h5 className="item-title">Povezave</h5>
      </header>
      {/* <section className="content-section">
        <div style={imgGridStyle}>
          {data.allFile.edges.map(edge => (
            <Img fluid={edge.node.childImageSharp.fluid} />
          ))}
        </div>
      </section> */}
    </article>

    <div>
      <div className="testFlex content-section">
        <a className="flex-3" href="https://meteo.arso.gov.si/met/sl/warning/">
          Arso-Vremenska opozorila

           <img src="./icons/arso.png" />
        </a>
        <a className="flex-3" href="https://meteo.arso.gov.si/met/sl/warning/fire">
          Arso-Požarna ogroženost
           <img src="./icons/arso.png" />
        </a>

        <a className="flexItem" href="http://wap.sos112.si/Dogodek">SOS
      <img src="./icons/spin.png" />
      </a>
      </div>
    </div>
    <div className="testFlex content-section">
      {/*data.allFile.edges.map(edge => (
            <Img imgStyle="testItem" fluid={edge.node.childImageSharp.fluid} />
          ))*/}
      <a className="flexItem" href="https://spin3.sos112.si/javno/zemljevid">Spin
      <img  src="./icons/spin.png" />
      </a>
      <a className="flex-2" href="https://www.gasilec.net">Gasilska zveza Slovenije
        <img src="./icons/gzs.gif" />
      </a>
      
    </div>

  </Layout >
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
