import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { FaCalendarAlt } from "react-icons/fa"
import News from "./news"
import Img from "gatsby-image"
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

    this.news2017 = this.props.data.newsfor2017
    this.news2018 = this.props.data.newsfor2018
    this.news2019 = this.props.data.newsfor2019
    this.stickyNews = this.props.data.stickyNews
  }
  render() {
    return (
      <Layout>
        <div>
          <article>
            <header>

              <h5 className="item-title">Nagovor predsednika</h5>
              <div className="nagovor-predsednika">
                <br />
                <br />
                <section className="content-section">
                  POZDRAVLJENI DRAGI PRIJATELJI GASILSTVA!
              </section>
                <br />
                <br />
                <section className="content-section">
                  V majhni slovenski občini s površino 94,9 km2 in približno 5200 prebivalci smo, znotraj Gasilske zveze
                  Šmartno pri Litiji, eno izmed devetih društev, tudi Prostovoljno gasilsko društvo Štangarske Poljane.
                  Naša organizacija šteje preko 120 članov, od tega nas približno 60 aktivno skrbi za razvoj gasilstva, 15
                  operativno opremljenih članov pa je pripravljenih vsak trenutek pomagati pomoči potrebnim
                  sokrajanom in obiskovalcem naših krajev v različnih nastalih situacijah.
                  Udarna ekipa in močno zaledje sta tisto, kar ljudje od gasilcev pričakujejo po vseh slovenskih krajih in
                  ravno to se vam v najtežjih trenutkih tudi trudimo ponuditi.
                  V letu 2022 bomo obeležili že 90. obletnico našega društva, ravno zato si želimo v naših krajih biti še
                  naprej pristni, pošteni, predvsem pa živeti človeški odnos do vsakega, ki je bodisi naš sosed ali
                  oddaljen sokrajan. Želimo si, da bi se med nami počutili domače. Da boste dobro obveščeni nas
                  spremljajte tudi na naši spletni strani.
              </section>
                <br />

                <section className="content-section">
                  Z gasilskim pozdravom: »NA POMOČ!«
              </section>
                <br />
                <br />
                <section className="content-section">
                  Matej Jug,
              </section>
                <section className="content-section">
                  predsednik PGD
              </section>
                <br/>
                <br/>
              <section className="content-section">
                  Kontakt:
              </section>
              <br/>
                <section className="content-section">
                  PGD Štangarske Poljane
              </section>
                <section className="content-section">
                  Štangarske Poljane 1a
              </section>
                <section className="content-section">
                  1275, Šmartno pri Litiji
              </section>
                <section className="content-section">
                  pgdstangarskepoljane@gmail.com
              </section>
                <section className="content-section">
                  Davčna Št. : 14804638
              </section>
                <section className="content-section">
                  Matična Št.: 5131413000
              </section>
                <section className="content-section">
                  Predsednik: Matej Jug 031 351 579
              </section>
                <section className="content-section">
                  Poveljnik: Tomaž Menegalija 041 579 687
              </section>
              </div>
            </header>
          </article>

          <hr />

          <h5 className="item-title">Izpostavljeno</h5>

          {this.props.data.stickyNews.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const category = node.frontmatter.category
            console.log("node.frontmatter.image1, ", node.frontmatter.image1);

            return (
              <div key={node.fields.slug}>
                <article className="news-item content-article" key={node.fields.slug}>
                  <section className="content-section">
                    <header className="news-item-header sticky-news">
                      <Link className="news-front-image" to={node.fields.slug}>
                        <Img fluid={node.frontmatter.image1.childImageSharp.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                          alt=""
                          className={"gallery-image"} />
                      </Link>
                      <div className="news-front-content">
                        <small className="news-item-date">
                          <FaCalendarAlt />
                          {" Objavljeno: "} {node.frontmatter.date}{" v "}{category}
                        </small>
                        <h5>
                          <Link className="news-item-title" to={node.fields.slug}>
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
                      </div>
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
            image1 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
            image1 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
            image1 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
            image1 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
