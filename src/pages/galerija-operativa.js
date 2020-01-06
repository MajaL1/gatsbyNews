import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageContainer from "../components/ImageContainer"

class GalerijaOperativa extends Component {
  constructor(props) {
    super(props)
    this.state = { galerijaOperativaFulls: this.props.data.galerijaOperativaFulls.edges, galerijaOperativaThumbs: this.props.data.galerijaOperativaThumbs.edges }
  }
  render() {
    if (typeof this.state.galerijaOperativaFulls == "undefined")
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
              images={this.state.galerijaOperativaFulls.map(({ node, index }) => ({
                node, index
              }))} thumbs={this.state.galerijaOperativaThumbs.map(({ node, index }) => ({
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
    galerijaOperativaFulls: allMarkdownRemark(
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
    galerijaOperativaThumbs: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "Operativa" }, top: { eq: false } }
      }
    ) {
      edges {
        node {
          frontmatter {
            image1 {
              childImageSharp {
                fixed(width: 300, height: 250) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            image2 {
              childImageSharp {
                fixed(width: 300, height: 250) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            image3 {
              childImageSharp {
                fixed(width: 300, height: 250) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            image4 {
              childImageSharp {
                fixed(width: 300, height: 250) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            image5 {
              childImageSharp {
                fixed(width: 300, height: 250) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
           
          }
        }
      }
    }
  }
`
