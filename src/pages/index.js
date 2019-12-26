import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { FaCalendarAlt } from "react-icons/fa"
import News from "./news"

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
  constructor(props) {
    super(props)
    //currentNews = props.newsCurrent;
    //console.log("1------ ", this.props.data.stickyNews)
    //console.log("2019 ------ ", this.props.data.newsfor2019)
    //console.log("2018------ ", this.props.data.newsfor2018)
    //console.log("2017------ ", this.props.data.newsfor2017)

    //console.log("3------ ", this.props.data.newsFor2018.edges)
    //console.log("4------ ", this.props.data.newsFor2017.edges)

    this.news2017 = this.props.data.newsfor2017
    this.news2018 = this.props.data.newsfor2018
    this.news2019 = this.props.data.newsfor2019

    //this.setState({news2019 : this.props.data.newsfor2019});

    this.stickyNews = this.props.data.stickyNews

    //this._onSelect = this._onSelect.bind(this)
  }
  //const data = props.data;//.allFile.edges[0].node.childMarkdownRemark.frontmatter
  //const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  render() {
    return (
      <Layout>
        <div style={{ marginBottom: `1.45rem` }}>
          <article>
            <header>
              <h5 className="item-title">Nagovor predsednika</h5>

              <p className="content-section">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="content-section">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur...
              </p>
              <p className="content-section">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur...
              </p>
            </header>
          </article>

          <hr />

          <h5 className="item-title">Izpostavljeno</h5>

          {this.props.data.stickyNews.edges.map(({ node }) => {
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
                      <p className="news-item-intro">
                        {node.frontmatter.intro}
                      </p>
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
          <News
            news2019={this.props.data.newsfor2019.edges}
            news2018={this.props.data.newsfor2018.edges}
            news2017={this.props.data.newsfor2017.edges}
          />

          {/* <Link to="/page-2/">Starejse novice</Link> */}
        </div>
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
