import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageGallery from "../components/ImageGallery"

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

          {" "}
          <div>Ni slik</div>
        </Layout>
      )

    return (
      <Layout>
        <h5 className="item-title">Galerija operativa</h5>

        <section id="two">
          <div className="gallery-content">
            <ImageGallery
              images={this.state.galerijaOperativa.map(({ node }) => ({
                node,
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
            title
            image1
            image2
            image3
            image4
            image5
          }
        }
      }
    }
  }
`
