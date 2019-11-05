import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {render} from 'react-dom'
import {Router, Link as LinkRouter} from '@reach/router'
import {Home} from '../components/Home'


const IndexPage = ({ data }) => (
  <Layout>
    <p className="content-title">Aktualno</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
    <Link to="/about">About</Link>
    <Link to="/homepage">homepage</Link>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
const Invoice = props => (
  <div>
    <h2>Invoice {props.invoiceId}</h2>
    <Link to="details">Deets</Link>
    <Router>
      <InvoiceDetails path="/details" />
    </Router>
  </div>
)

const InvoiceDetails = props => <div>some deets</div>

const Invoices = props => (
  <div>
    <h2>Invoices</h2>
    <ul>
      <li>
        <Link to="123">Invoice 123</Link>
      </li>
      <li>
        <Link to="abc">Invoice ABC</Link>
      </li>
    </ul>

    {props.children}
  </div>
)

const InvoicesIndex = () => (
  <div>
    <p>Maybe put some pretty graphs here or something.</p>
  </div>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery1 {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`