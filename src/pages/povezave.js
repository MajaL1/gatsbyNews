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
      <section className="content-section">
        <div style={imgGridStyle}>
          {data.allFile.edges.map(edge => (
            <Img fluid={edge.node.childImageSharp.fluid} />
          ))}
        </div>

        <a href="https://spin3.sos112.si/javno/zemljevid">Spin</a>
        <p />
        <a href="http://wap.sos112.si/Dogodek">SOS</a>
        <p />
        <a href="https://www.gasilec.net">Gasilska zveza Slovenije</a>
        <p />
        <a href="https://meteo.arso.gov.si/met/sl/warning/fire/">
          Arso-Požarna ogroženost
        </a>
        <p />
        <a href="https://meteo.arso.gov.si/met/sl/warning/">
          Arso-Vremenska opozorila
        </a>
      </section>
    </article>

    <div>
    <div className="testFlex">
      <div className="testItem">
          {data.allFile.edges.map(edge => (
            <Img  fluid={edge.node.childImageSharp.fluid} />
          ))}
        </div>  
        </div>
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
