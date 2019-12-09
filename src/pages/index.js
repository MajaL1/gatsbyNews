import React from "react"
import { Component } from "react"
import { Link, graphql, Image } from "gatsby"
import Layout from "../components/layout"
import Dropdown from "../components/dropdown"
import "../css/main.css"
import { FaCalendarAlt } from "react-icons/fa"
import News from "./news";
import { responsePathAsArray } from "graphql";

function initNetlifyIdentity() {
  console.log("initNetlifyIdentity called")
  const script = document.createElement("script")

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true
  document.body.appendChild(script)
}

function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity

  if (netlifyIdentity) {
    netlifyIdentity.open()
  } else {
    console.log("netlify identity not defined")
  }
}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity()
  }
  render() {
    return <div></div>
  }
}

const IndexPage = props => {
  //const data = props.data;//.allFile.edges[0].node.childMarkdownRemark.frontmatter
  //const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  
  const stickyNews = props.data.stickyNews.edges

  return (
    <Layout>
     
      <div style={{ marginBottom: `1.45rem` }}>
        <article>
          <header>
            <h5 className="item-title">Nagovor predsednika</h5>

            <p className="content-section">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="content-section">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur...
            </p>
            <p className="content-section">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur...
            </p>
          </header>
        </article>

        <hr />

        <h5 className="item-title">Izpostavljeno</h5>
        {stickyNews.map(({ node }) => {
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

        <hr />

        <News myProp={props.data.news.edges}/>
      <Dropdown />
        {/* <Link to="/page-2/">Starejse novice</Link> */}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery1 = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
