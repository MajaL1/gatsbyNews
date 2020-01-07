import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageContainer from "../components/ImageContainer"

class GalerijaDogodki extends Component {
  constructor(props) {
    super(props)
    this.state = { galerijaDogodkiFulls: this.props.data.galerijaDogodkiFulls.edges, galerijaDogodkiThumbs: this.props.data.galerijaDogodkiThumbs.edges }
 
  }
  render() {
    if (typeof this.state.galerijaDogodkiFulls== "undefined")
      return (
        <Layout>
          <h5 className="item-title">Galerija dogodki</h5>
          <div>Ni slik</div>
        </Layout>
      )

    return (
      <Layout>
        <h5 className="item-title">Galerija dogodki</h5>
          <div className="gallery-content">
          <ImageContainer
              images={this.state.galerijaDogodkiFulls.map(({ node, index }) => ({
                node, index
              }))} thumbs={this.state.galerijaDogodkiThumbs.map(({ node, index }) => ({
                node, index
              }))}
            />
          </div>
      </Layout>
    )
  }
}

export default GalerijaDogodki

export const pageQuery = graphql`
  query {
    galerijaDogodkiFulls: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "Dogodki" }, top: { eq: false } }
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
    galerijaDogodkiThumbs: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "Dogodki" }, top: { eq: false } }
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
