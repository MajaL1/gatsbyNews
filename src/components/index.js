import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {render} from 'react-dom'
import {Router, Link as LinkRouter} from '@reach/router'
import {Home} from '../components/Home'


const IndexPage = ({ data }) => (
  <Layout>
    <p className="content-title">Aktualno</p>
    <h1>{data.title}</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        
      </div>
    <Link to="/about">About</Link>
    <Link to="/homepage">homepage</Link>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title           
          }
        }
      }
    }
  }
}`