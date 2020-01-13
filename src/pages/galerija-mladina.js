import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageContainer from "../components/ImageContainer"

class GalerijaMladina extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: "",
      thumbs: "",
    }
    let fulls = new Array()
    let thumbnails = new Array()
    let nodes = this.props.data.galerijaMladinaImages

    nodes.edges.map(function (node) {
      let nodeImage
      nodeImage = node.node.frontmatter
      if (
        !nodeImage.image1.childImageSharp.fluid.sizes.startsWith(
          "(max-width: 1px)"
        )
      ) {
        fulls.push(nodeImage.image1)
      }

      if (
        nodeImage.image1.childImageSharp.fixed.height > 1 &&
        nodeImage.image1.childImageSharp.fixed.width > 1
      ) {
        thumbnails.push(nodeImage.image1)
      }
      if (
        !nodeImage.image2.childImageSharp.fluid.sizes.startsWith(
          "(max-width: 1px)"
        )
      ) {
        fulls.push(nodeImage.image2)
      }
      if (
        nodeImage.image2.childImageSharp.fixed.height > 1 &&
        nodeImage.image2.childImageSharp.fixed.width > 1
      ) {
        thumbnails.push(nodeImage.image2)
      }
      if (
        !nodeImage.image3.childImageSharp.fluid.sizes.startsWith(
          "(max-width: 1px)"
        )
      ) {
        fulls.push(nodeImage.image3)
      }
      if (
        nodeImage.image3.childImageSharp.fixed.height > 1 &&
        nodeImage.image3.childImageSharp.fixed.width > 1
      ) {
        thumbnails.push(nodeImage.image3)
      }
      if (
        !nodeImage.image4.childImageSharp.fluid.sizes.startsWith(
          "(max-width: 1px)"
        )
      ) {
        fulls.push(nodeImage.image4)
      }
      if (
        nodeImage.image4.childImageSharp.fixed.height > 1 &&
        nodeImage.image4.childImageSharp.fixed.width > 1
      ) {
        thumbnails.push(nodeImage.image4)
      }
      if (
        !nodeImage.image5.childImageSharp.fluid.sizes.startsWith(
          "(max-width: 1px)"
        )
      ) {
        fulls.push(nodeImage.image5)
      }
      if (
        nodeImage.image5.childImageSharp.fixed.height > 1 &&
        nodeImage.image5.childImageSharp.fixed.width > 1
      ) {
        thumbnails.push(nodeImage.image5)
      }
    })

    this.state = {
      images: fulls,
      thumbs: thumbnails,
    }
  }
  render() {
    if (
      typeof this.state.images == "undefined" ||
      this.state.images == null ||
      this.state.images.length == 0
    )
      return (
        <Layout>
          <h5 className="item-title">Galerija - mladina</h5>
          <div>Ni slik</div>
        </Layout>
      )

    return (
      <Layout>
        <h5 className="item-title">Galerija - mladina</h5>
        <div className="gallery-content">
          <ImageContainer images={this.state.images} thumbs={this.state.thumbs} />
        </div>
      </Layout>
    )
  }
}


export default GalerijaMladina

export const pageQuery = graphql`
  query {
    galerijaMladinaImages: allMarkdownRemark(
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
            image1 {
              childImageSharp {
                fixed(width: 300, height: 250) {
                  ...GatsbyImageSharpFixed
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
            image2 {
              childImageSharp {
                fixed(width: 300, height: 250) {
                  ...GatsbyImageSharpFixed
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
            image3 {
              childImageSharp {
                fixed(width: 300, height: 250) {
                  ...GatsbyImageSharpFixed
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
            image4 {
              childImageSharp {
                fixed(width: 300, height: 250) {
                  ...GatsbyImageSharpFixed
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
