import React from "react"

import Layout from "../components/layout"

class GalerijaDogodki extends Component {
  constructor(props) {
    super(props)
    //currentNews = props.newsCurrent;
    console.log("1------ ", this.props.data.stickyNews)
    console.log("2019 ------ ", this.props.data.newsfor2019)
    console.log("2018------ ", this.props.data.newsfor2018)
    console.log("2017------ ", this.props.data.newsfor2017)

    //console.log("3------ ", this.props.data.newsFor2018.edges)
    //console.log("4------ ", this.props.data.newsFor2017.edges)

    this.news2017 = this.props.data.newsfor2017
    this.news2018 = this.props.data.newsfor2018
    this.news2019 = this.props.data.newsfor2019

    //this.setState({news2019 : this.props.data.newsfor2019});

    this.stickyNews = this.props.data.stickyNews

    //this._onSelect = this._onSelect.bind(this)
  }
  render() {
    return (
      <Layout>
        <div style={{ marginBottom: `1.45rem` }}>
        
          {console.log(
            "this.props.data.newsfor2019: ",
            this.props.data.newsfor2019.edges
          )}
          <News
            news2019={this.props.data.newsfor2019.edges}
            news2018={this.props.data.newsfor2018.edges}
            news2017={this.props.data.newsfor2017.edges}
          />
        </div>
      </Layout>
    )
  }
}

export default GalerijaDogodki

export const pageQuery = graphql`
  query {
    galerijaDogodki: allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: "Dogodki" }
          top: { eq: false }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            image1
            image2
            image3
            image4
            image5
          }
        }
      }
    }
  }
`
