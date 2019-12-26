import React, { Component } from "react"
import { Link } from "gatsby"
import "../css/main.css"
import { FaCalendarAlt } from "react-icons/fa"
import DropdownMenu from "../components/dropdown"

//let stickyNews;

class News extends Component {
  constructor(props) {
    super(props)
    // console.log("\n\n 000 news2019:  ", this.props.news2019);
    // console.log("\n\n 000 news2018:  ", this.props.news2018);
    // console.log("\n\n 000 news2017:  ", this.props.news2017);

    /*  this.setState({
      test: "Maja"
     });
 */
    this.onChange = this.onChange.bind(this)

    this.state = {
      test: "Maja",
      currentNews: this.props.news2019,
      news2019: this.props.news2019,
      news2018: this.props.news2018,
      news2017: this.props.news2017,
    }
    /* this.setState({
      currentNews: this.props.news2019
    });
 */
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
    }
  }

  render() {
    if (typeof this.state.currentNews == "undefined") return <div>No data</div>

    return (
      <div style={{ marginBottom: `1.45rem` }}>
        <DropdownMenu onChange={this.onChange} />
        <h5 className="item-title">Zadnje novice</h5>

        {this.state.currentNews.map(({ node }) => {
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
