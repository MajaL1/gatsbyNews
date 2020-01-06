import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageContainer from "../components/ImageContainer"

class GalerijaMladina extends Component {
  constructor(props) {
    super(props)
    this.state = { galerijaMladinaFulls: this.props.data.galerijaMladinaFulls.edges, galerijaMladinaThumbs: this.props.data.galerijaMladinaThumbs.edges }
  }
  render() {
    if (typeof this.state.galerijaMladinaFulls == "undefined")
      return (
        <Layout>
          <h5 className="item-title">Galerija mladina</h5>
          <div>Ni slik</div>
        </Layout>
      )

    return (
      <Layout>
        <h5 className="item-title">Galerija mladina</h5>
        <section id="two">
          <div className="gallery-content">
          <ImageContainer
              images={this.state.galerijaMladinaFulls.map(({ node, index }) => ({
                node, index
              }))} thumbs={this.state.galerijaMladinaThumbs.map(({ node, index }) => ({
                node, index
              }))}
            />
          </div>
        </section>
      </Layout>
    )
  }
}

export default GalerijaMladina

export const pageQuery = graphql`
  query {
    galerijaMladinaFulls: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "Mladina" }, top: { eq: false } }
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
    galerijaMladinaThumbs: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "Mladina" }, top: { eq: false } }
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
