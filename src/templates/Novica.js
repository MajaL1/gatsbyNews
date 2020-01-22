import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageContainer from "../components/ImageContainer"
import { FaCalendarAlt } from "react-icons/fa"

class Novica extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      images: "",
      thumbs: "",
    }
    const node = this.props.data.markdownRemark

    let images = []
    let thumbs = []
    if (
      node.frontmatter.image1.childImageSharp.fixed.height > 1 &&
      node.frontmatter.image1.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(node.frontmatter.image1)
    }
    if (
      node.frontmatter.image2.childImageSharp.fixed.height > 1 &&
      node.frontmatter.image2.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(node.frontmatter.image2)
    }
    if (
      node.frontmatter.image3.childImageSharp.fixed.height > 1 &&
      node.frontmatter.image3.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(node.frontmatter.image3)
    }
    if (
      node.frontmatter.image4.childImageSharp.fixed.height > 1 &&
      node.frontmatter.image4.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(node.frontmatter.image4)
    }
    if (
      node.frontmatter.image5.childImageSharp.fixed.height > 1 &&
      node.frontmatter.image5.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(node.frontmatter.image5)
    }
    if (
      !node.frontmatter.image1.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(node.frontmatter.image1)
    }
    if (
      !node.frontmatter.image2.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(node.frontmatter.image2)
    }
    if (
      !node.frontmatter.image3.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(node.frontmatter.image3)
    }
    if (
      !node.frontmatter.image4.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(node.frontmatter.image4)
    }
    if (
      !node.frontmatter.image5.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(node.frontmatter.image5)
    }

    this.state = {
      images: images,
      thumbs: thumbs,
    }
  }
  render() {
    const post = this.props.data.markdownRemark
    const category = post.frontmatter.category
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} />
        <article className="content-section">
          <header>
            <p>
              <FaCalendarAlt />
              <small className="news-item-date">
                {"Objavljeno: "}
                {post.frontmatter.date}
                {" v "}
                {category}
              </small>
            </p>
            <h5 className="news-item-title item-title">
              {post.frontmatter.title}
            </h5>

            <p className="news-content-section">{post.frontmatter.intro}</p>
          </header>
          <div className="gallery-content">
            <ImageContainer
              images={this.state.images}
              thumbs={this.state.thumbs}
            />
          </div>
          <section
            className="news-content-section"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <nav>
          <ul className="ul-news-link">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev" className="link-news">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next" className="link-news">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default Novica

export const pageQuery1 = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        intro
        category
        top
        image1 {
          childImageSharp {
            fluid(maxWidth: 800) {
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
            fluid(maxWidth: 800) {
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
            fluid(maxWidth: 800) {
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
            fluid(maxWidth: 800) {
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
            fluid(maxWidth: 800) {
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
`
