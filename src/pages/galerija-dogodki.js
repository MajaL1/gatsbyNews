import React, { Component } from "react"

import Layout from "../components/layout"

class GalerijaDogodki extends Component {
  constructor(props) {
    super(props)
    this.state = { galerijaDogodki: this.props.data.galerijaDogodki.edges }
  }
  render() {
    if (typeof this.state.galerijaDogodki == "undefined")
      return <div>Ni slik</div>

    return (
      <Layout>
        <div style={{ marginBottom: `1.45rem` }}>
          <h5 className="item-title">Galerija dogodki</h5>

          {this.state.galerijaDogodki.map(({ node }) => {
            const image1 = node.frontmatter.image1 || ""
            const image2 = node.frontmatter.image2 || ""
            const image3 = node.frontmatter.image3 || ""
            const image4 = node.frontmatter.image4 || ""
            const image5 = node.frontmatter.image5 || ""
            return (
              <div key={node.frontmatter.title}>
                <article className="news-item content-article">
                  <img src={image1} />
                  <img src={image2} />
                  <img src={image3} />
                  <img src={image4} />
                  <img src={image5} />
                </article>
              </div>
            )
          })}
        </div>
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
