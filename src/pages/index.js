import React from 'react'
import { Link, graphql, Image } from 'gatsby'
import Layout from '../components/layout'
import "../css/main.css"

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>

      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage


// In your index.js file

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
          }
        }
      }
    }
  }
}`