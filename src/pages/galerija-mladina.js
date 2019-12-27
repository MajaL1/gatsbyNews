import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageGallery from "../components/ImageGallery"

class GalerijaMladina extends Component {
  constructor(props) {
    super(props)
    this.state = { galerijaMladina: this.props.data.galerijaMladina.edges }
  }
  render() {
    if (typeof this.state.galerijaMladina == "undefined")
      return (
        <Layout>
          <h5 className="item-title">Galerija mladina</h5>
          {" "}
          <div>Ni slik</div>
        </Layout>
      )

    return (
      <Layout>
        <h5 className="item-title">Galerija mladina</h5>
        <section id="two">
          <div className="gallery-content">
            <ImageGallery
              images={this.state.galerijaMladina.map(({ node }) => ({
                node,
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
    galerijaMladina: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "Mladina" }, top: { eq: false } }
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
