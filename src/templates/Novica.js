import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageContainer from "../components/ImageContainer"

class Novica extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const category = post.frontmatter.category
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    let images = new Array()
    let thumbs = new Array()

    if (
      post.frontmatter.image1.childImageSharp.fixed.height > 1 &&
      post.frontmatter.image1.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(post.frontmatter.image1)
    }
    if (
      post.frontmatter.image2.childImageSharp.fixed.height > 1 &&
      post.frontmatter.image2.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(post.frontmatter.image2)
    }
    if (
      post.frontmatter.image3.childImageSharp.fixed.height > 1 &&
      post.frontmatter.image3.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(post.frontmatter.image3)
    }
    if (
      post.frontmatter.image4.childImageSharp.fixed.height > 1 &&
      post.frontmatter.image4.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(post.frontmatter.image4)
    }
    if (
      post.frontmatter.image5.childImageSharp.fixed.height > 1 &&
      post.frontmatter.image5.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(post.frontmatter.image5)
    }
    if (
      !post.frontmatter.image1.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(post.frontmatter.image1)
    }
    if (
      !post.frontmatter.image2.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(post.frontmatter.image2)
    }
    if (
      !post.frontmatter.image3.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(post.frontmatter.image3)
    }
    if (
      !post.frontmatter.image4.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(post.frontmatter.image4)
    }
    if (
      !post.frontmatter.image5.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(post.frontmatter.image5)
    }

    this.state = {
      images: images,
      thumbs: thumbs,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} />
        <article className="content-section">
          <header>
            <h5 className="news-item-title item-title">
              {post.frontmatter.title}
            </h5>
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

          {/*  { image1 && <Image fluid={post.frontmatter.image1.childImageSharp.fluid} /> }
          { image2 && <Image fluid={post.frontmatter.image2.childImageSharp.fluid} /> }
          { image3 && <Image fluid={post.frontmatter.image3.childImageSharp.fluid} /> }
          { image4 && <Image fluid={post.frontmatter.image4.childImageSharp.fluid} /> }
          { image5 && <Image fluid={post.frontmatter.image5.childImageSharp.fluid} /> } */}
          <div className="gallery-content">
            <ImageContainer
              images={this.state.images}
              thumbs={this.state.thumbs}
            />
          </div>
          {/* 
          <ImageContainer
            images={images.map(({ node, index }) => ({
              node, index
            }))} thumbs={thumbs.map(({ node, index }) => ({
              node, index
            }))}
          /> */}
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
