import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import News from "./news"
import StickyNews from "./stickyNews"
/* function initNetlifyIdentity() {
  console.log("initNetlifyIdentity called")
  const script = document.createElement("script")

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true
  document.body.appendChild(script)
} */

/* function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity

  if (netlifyIdentity) {
    netlifyIdentity.open()
  } else {
    console.log("netlify identity not defined")
  }s
}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity()
  }
  render() {
    return <div></div>
  }
} */
class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <h5 className="item-title">Izpostavljeno</h5>

        <StickyNews stickyNews={this.props.data.stickyNews.edges} />

        <News
          news2020={this.props.data.newsfor2020.edges}
          news2019={this.props.data.newsfor2019.edges}
          news2018={this.props.data.newsfor2018.edges}
          news2017={this.props.data.newsfor2017.edges}
        />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    stickyNews: allMarkdownRemark(
      filter: { frontmatter: { top: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            image1 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            intro
            date(formatString: "DD.MM.YYYY")
            category
            top
          }
        }
      }
    }
    newsfor2020: allMarkdownRemark(
      filter: {
        frontmatter: {
          date: { lt: "2021-01-01", gt: "2020-01-01 " }
          top: { eq: false }
        }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            image1 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            intro
            date(formatString: "DD.MM.YYYY")
            category
            top
          }
        }
      }
    }
    newsfor2019: allMarkdownRemark(
      filter: {
        frontmatter: {
          date: { lt: "2020-01-01", gt: "2019-01-01 " }
          top: { eq: false }
        }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            image1 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            intro
            date(formatString: "DD.MM.YYYY")
            category
            top
          }
        }
      }
    }
    newsfor2018: allMarkdownRemark(
      filter: {
        frontmatter: {
          date: { lt: "2019-01-01", gt: "2018-01-01" }
          top: { eq: false }
        }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            image1 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            intro
            date(formatString: "DD.MM.YYYY")
            category
            top
          }
        }
      }
    }
    newsfor2017: allMarkdownRemark(
      filter: {
        frontmatter: {
          date: { lt: "2018-01-01", gt: "2017-01-01" }
          top: { eq: false }
        }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            image1 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            intro
            date(formatString: "DD.MM.YYYY")
            category
            top
          }
        }
      }
    }
  }
`
