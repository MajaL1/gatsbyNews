import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from 'gatsby-image'

class Novica extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const category = post.frontmatter.category
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    let image1, image2, image3, image4, image5

    if(! post.frontmatter.image1.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")){
      image1 = post.frontmatter.image1
    }
    if(! post.frontmatter.image2.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")){
      image2 = post.frontmatter.image2
    }
    if(! post.frontmatter.image3.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")){
      image3 = post.frontmatter.image3
    }
    if(! post.frontmatter.image4.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")){
      image4 = post.frontmatter.image4
    }
    if(! post.frontmatter.image5.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")){
      image5 = post.frontmatter.image5
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} />
        <article className="content-section">
          <header>
            <h5 className="news-item-title">{post.frontmatter.title}</h5>
            <p>
              <small className="news-item-date">
                {"Objavljeno: "}
                {post.frontmatter.date}
                {" v "}
                {category}
              </small>
            </p>
            <p className="news-content-section">{post.frontmatter.intro}</p>
          </header>
          
          { image1 && <Image fluid={post.frontmatter.image1.childImageSharp.fluid} /> }
          { image2 && <Image fluid={post.frontmatter.image2.childImageSharp.fluid} /> }
          { image3 && <Image fluid={post.frontmatter.image3.childImageSharp.fluid} /> }
          { image4 && <Image fluid={post.frontmatter.image4.childImageSharp.fluid} /> }
          { image5 && <Image fluid={post.frontmatter.image5.childImageSharp.fluid} /> }
         
          <section
            className="news-content-section"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr />
          <footer></footer>
        </article>

        <nav>
          <ul className="ul-news-link">
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
        image2 {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
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
        image4 {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
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
      }
    }
  }
`
