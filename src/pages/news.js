import React, { Component } from "react"
import { Link } from "gatsby"
import "../css/main.css"
import { FaCalendarAlt } from "react-icons/fa"
import DropdownMenu from "../components/dropdown"
import Img from "gatsby-image"

class News extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)

    this.state = {
      currentNews: this.props.news2019,
      news2019: this.props.news2019,
      news2018: this.props.news2018,
      news2017: this.props.news2017,
    }
  }
  onChange(option) {
    switch (option.label) {
      case "2019":
        this.setState({
          currentNews: this.props.news2019,
        })
        break
      case "2018":
        this.setState({
          currentNews: this.props.news2018,
        })
        break
      case "2017":
        this.setState({
          currentNews: this.props.news2017,
        })
        break
      default:
        this.setState({
          currentNews: this.props.news2019,
        })
        break
    }
  }

  render() {
    if (typeof this.state.currentNews == "undefined") return <div>No data</div>

    return (
      <div>
        <h5 className="item-title">Novice</h5>

        {this.state.currentNews.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const category = node.frontmatter.category
          return (
            <div key={node.fields.slug}>
              <section
                className="news-item content-section"
                key={node.fields.slug}
              >
                <header className="news-item-header">
                  <Link className="news-front-image" to={node.fields.slug}>
                    <Img
                      fluid={node.frontmatter.image1.childImageSharp.fluid}
                      className={"gallery-image"}
                    />
                  </Link>
                  <div className="news-front-content">
                    <small className="news-item-date">
                      <FaCalendarAlt />
                      {" Objavljeno: "} {node.frontmatter.date}
                      {" v "}
                      {category}
                    </small>
                    <h5>
                      <Link
                        className="news-item-title section-title"
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
                  </div>
                </header>
              </section>
            </div>
          )
        })}
        <div className="content-section">
          <DropdownMenu onChange={this.onChange} />
        </div>
      </div>
    )
  }
}

export default News
