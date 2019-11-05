import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {Router, Link as LinkRouter} from '@reach/router'
import "../css/main.css"

const publishDate = "Objavljeno: 29.10.2019"

const IndexPage = ({data, test="test" }) => (
  <Layout>
    <p className="content-title">Aktualno</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
       
        <li className="news-title" key={document.node.id}>
          <span className="news-date">Objavljeno: {document.node.created_at}, </span>
          <span className="news-date">{document.node.author.username}</span>
          
          <h5 className="news-header3" >
            <Link className="news-link" to={`/${document.node.id}`}>{document.node.title}</Link>
          </h5>
         
          <span className="news-date">{test}</span>
          <p className="news-content">{document.node.content}</p>
          <hr/>
        </li>
      ))}
    </ul>
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
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          created_at(formatString: "DD.MM. YYYY")
          author {username}
        }
      }
    }
  }
`