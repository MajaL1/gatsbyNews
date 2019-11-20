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

      <h3 onClick={() => { openNetlifyModal() }}>Login</h3>
      <div style={{ marginBottom: `1.45rem` }}>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (

            <article className="news-item" key={node.fields.slug}>
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
              <section>

              </section>
            </article>
          )
        })}



        <ul>

          {/*    {data.allFile.edges.map(document => (
       
        <li className="news-title" key={document.node.id}>
          <p className="news-content">test {document.childMarkdownRemark}</p>
          <span className="news-date">Objavljeno: {document.node.created_at}, </span>
          
          <h5 className="news-header3" >
            <Link className="news-link" to={`/${document.node.id}`}>{document.node.title}</Link>
          </h5>
         
          
          <p className="news-content">{document.node.content}</p>
          <hr/>
        </li>
      ))} */}

        </ul>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
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
