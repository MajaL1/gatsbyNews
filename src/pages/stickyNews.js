import React, { Component } from "react"
import { Link } from "gatsby"
import { FaCalendarAlt } from "react-icons/fa"
import Img from "gatsby-image"


class StickyNews extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stickyNews: this.props.stickyNews,
    }
  }

  render() {
    if (typeof this.state.stickyNews == "undefined") return <div>No data</div>

    return (
      this.state.stickyNews.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const category = node.frontmatter.category

        return (
          <div key={node.fields.slug} >
            <article
              className="news-item content-article"
              key={node.fields.slug}
            >
              <section className="content-section">
                <header className="news-item-header sticky-news">
                  <Link className="news-front-image" to={node.fields.slug}>
                    <Img
                      fluid={node.frontmatter.image1.childImageSharp.fluid}
                      className={"gallery-image"}
                    />
                  </Link>
                  <div className="news-front-content">
                    <small className="news-item-date">
                      <FaCalendarAlt />
                      {" Objavljeno: "} {node.frontmatter.date}
                      {" v "}
                      {category}
                    </small>
                    <h5>
                      <Link className="news-item-title" to={node.fields.slug}>
                        {title}
                      </Link>
                    </h5>
                    <p className="news-item-intro">
                      {node.frontmatter.intro}
                    </p>
                    <hr />
                    <Link className="news-item-link" to={node.fields.slug}>
                      {"Preberi celotni prispevek >> "}
                    </Link>
                  </div>
                </header>
              </section>
            </article>
          </div >
        )
      }
      )
    )
  }
}

export default StickyNews
