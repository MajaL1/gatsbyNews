import React from 'react'
import { Component } from 'react'
import { Link, graphql, Image } from 'gatsby'
import Layout from '../components/layout'
import "../css/main.css"
import { FaCalendarAlt } from 'react-icons/fa';


function initNetlifyIdentity() {
  console.log("initNetlifyIdentity called")
  const script = document.createElement('script')

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true;
  document.body.appendChild(script);
}

function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity

  if (netlifyIdentity) {
    netlifyIdentity.open();
  }
  else {
    console.log('netlify identity not defined');
  }



}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity();
  }
  render() {
    return (<div></div>);
  }
}

const IndexPage = (props) => {
  //const data = props.data;//.allFile.edges[0].node.childMarkdownRemark.frontmatter
  //const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <NetlifyIdentity />
      
     {/* <h3 onClick={() => { openNetlifyModal() }}>Login</h3> */}
      <h5 className="item-title">
              Zadnje novice
      </h5>
      
      <div style={{ marginBottom: `1.45rem` }}>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (

            <article className="news-item content-article" key={node.fields.slug}>
              <section className="content-section">
              <header class="news-item-header">
                <small className="news-item-date"><FaCalendarAlt/>{" Objavljeno: "}{node.frontmatter.date}</small>
                <h5>
                  <Link className="news-item-title" style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h5>
                <p className="news-item-intro">{node.frontmatter.intro}</p>
                <hr/>
                <Link className="news-item-link" to={node.fields.slug}>
                  {"Preberi celotni prispevek >> "}
                </Link>
                
              </header>
              </section>
            </article>
          )
        })}
      </div>
    {/*  <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }){
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
            }
        }
    }
  }
}
`
