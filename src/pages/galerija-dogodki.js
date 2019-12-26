import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageGallery from "../components/ImageGallery"

class GalerijaDogodki extends Component {
  constructor(props) {
    super(props)
    this.state = { galerijaDogodki: this.props.data.galerijaDogodki.edges }
  }
  render() {
    if (typeof this.state.galerijaDogodki == "undefined")
      return (
        <Layout>
          <h5 className="item-title">Galerija dogodki</h5>
          <div>Ni slik</div>
        </Layout>
      )

    return (
      <Layout>
        <h5 className="item-title">Galerija dogodki</h5>
        <section id="two">
          <div className="gallery-content">
            <ImageGallery
              images={this.state.galerijaDogodki.map(({ node, index }) => ({
                node, index
              }))}
            />
          </div>
        </section>
      </Layout>
    )
  }
}

export default GalerijaDogodki

export const pageQuery = graphql`
  query {
    galerijaDogodki: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "Dogodki" }, top: { eq: false } }
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
