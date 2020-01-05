import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageContainer from "../components/ImageContainer"

class GalerijaOperativa extends Component {
  constructor(props) {
    super(props)
    this.state = { galerijaOperativa: this.props.data.galerijaOperativa.edges }
  }
  render() {
    if (typeof this.state.galerijaOperativa == "undefined")
      return (
        <Layout>
          <h5 className="item-title">Galerija operativa</h5>
          <div>Ni slik</div>
        </Layout>
      )

    return (
      <Layout>
        <h5 className="item-title">Galerija operativa</h5>
        <section id="two">
          <div className="gallery-content">
            <ImageContainer
              images={this.state.galerijaOperativa.map(({ node, index }) => ({
                node, index
              }))}
            />
          </div>
        </section>
      </Layout>
    )
  }
}

export default GalerijaOperativa

export const pageQuery = graphql`
  query {
    galerijaOperativa: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "Operativa" }, top: { eq: false } }
      }
    ) {
      edges {
        node {
          frontmatter {
            image1 {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image4 {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image5 {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
           
          }
        }
      }
    }
  }
`
