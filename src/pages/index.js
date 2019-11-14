import React from 'react'
import { Component} from 'react'
import { Link, graphql, Image } from 'gatsby'
import Layout from '../components/layout'
import "../css/main.css"


function initNetlifyIdentity(){
  console.log("initNetlifyIdentity called")
  const script = document.createElement('script')

  script.src="https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async=true;
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
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <small>{node.frontmatter.date}</small>
                <h3
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>

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
          date
          
          
        }
      }
    }
  }
}
`
