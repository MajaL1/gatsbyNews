import React, { Component } from 'react'
import { Link, graphql, Image, StaticQuery, useStaticQuery } from "gatsby"
import "../css/main.css"
import { FaCalendarAlt } from "react-icons/fa"
import DropdownMenu from "../components/dropdown"
const options = [
  '2019','2018', '2017', '2016'
]

let posts;

class News extends Component {
  
  constructor (props) {
    super(props)
    posts = props.myProp;
   
    console.log("\n\n\nposts:  ", props.myProp);
    
    
    //this._onSelect = this._onSelect.bind(this)
  }

  myCallback = (selectedYear) => {
    console.log("selected:: ", selectedYear);
  }

  onChange (option) {
    console.log('333 You selected ', option.label)
    //this.setState({option})

    console.log('new props... ', this.props);
    //posts = this.props.myProp;
     const query1 = useStaticQuery(graphql`
    {
      newsfor20100: allMarkdownRemark(
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
    `);

    console.log("query1.newsFor20100", query1.newsFor20100);
 

  
  }

  render() { 
    
    return(
    
      <div style={{ marginBottom: `1.45rem` }}>
        <DropdownMenu onChange={this.onChange}/>
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
}

export default News

/* export const pageQuery1 = graphql`
  query {
    newsfor2019: allMarkdownRemark(
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
    newsfor2018: allMarkdownRemark(
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
    newsfor2017: allMarkdownRemark(
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
` */
