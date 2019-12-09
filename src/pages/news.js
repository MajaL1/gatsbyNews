import React from "react"
import { Link, graphql, Image } from "gatsby"
import "../css/main.css"
import { FaCalendarAlt } from "react-icons/fa"


const News = props => {

    console.log("\n\n\nposts:  ", props.myProp);
    //console.log("1 posts:  ", props.myProp.data.news.edges);
  const posts = props.myProp
  

  return (
    
      <div style={{ marginBottom: `1.45rem` }}>
        <h5 className="item-title">Zadnje novice</h5>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const category = node.frontmatter.category
          return (
            <div key={node.fields.slug}>
              <article
                className="news-item content-article"
                key={node.fields.slug}
              >
                <section className="content-section">
                  <header className="news-item-header">
                    <small className="news-item-date">
                      <FaCalendarAlt />
                      {" Objavljeno: "}
                      {node.frontmatter.date}

                      {" v "}
                      {category}
                    </small>
                    <h5>
                      <Link
                        className="news-item-title"
                        style={{ boxShadow: `none` }}
                        to={node.fields.slug}
                      >
                        {title}
                      </Link>
                    </h5>
                    <p className="news-item-intro">{node.frontmatter.intro}</p>
                    <hr />
                    <Link className="news-item-link" to={node.fields.slug}>
                      {"Preberi celotni prispevek >> "}
                    </Link>
                  </header>
                </section>
              </article>
            </div>
          )
        })}
      </div>
  )
}

export default News

export const pageQuery1 = graphql`
  query {
    news: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
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
