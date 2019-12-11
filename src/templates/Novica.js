import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

class Novica extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const category = this.props.data.markdownRemark.category
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const image = post.image
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} />
        <article>
          <header>
            <h5 className="news-item-title">{post.frontmatter.title}</h5>
            <p
              style={{
                display: `block`,
              }}
            >
              <small className="news-item-date">
                {"Objavljeno: "}
                {post.frontmatter.date}
              </small>
              {"v "}
              {category}
            </p>
            <p className="news-content-section">{post.frontmatter.intro}</p>
          </header>

          <section
            className="news-content-section"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <p>{image}</p>
          {image && <Img fixed={image} alt="Logo" />}
          <hr />
          <footer></footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
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

export const pageQuery = graphql`
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
        image
        category
        top
      }
    }
  }
`
