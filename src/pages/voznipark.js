import React, { Component } from "react"
import Layout from "../components/layout"
import Img from 'gatsby-image';

class VozniPark extends Component {
  constructor(props) {
    super(props)
    // this.state = { galerijaDogodkiFulls: this.props.data.galerijaDogodkiFulls.edges, galerijaDogodkiThumbs: this.props.data.galerijaDogodkiThumbs.edges }
    console.log("this.props.data. ", this.props.data)
  }
  render() {
    return (
      <Layout>
      <Img fluid={this.props.data.image1.childImageSharp.fluid}
          className={"gallery-image"} /> 
          <Img fluid={this.props.data.image2.childImageSharp.fluid}
          className={"gallery-image"} /> 
          <Img fluid={this.props.data.image3.childImageSharp.fluid}
          className={"gallery-image"} /> 
          <Img fluid={this.props.data.image4.childImageSharp.fluid}
          className={"gallery-image"} /> 
          <Img fluid={this.props.data.image5.childImageSharp.fluid}
          className={"gallery-image"} /> 
      </Layout>
    )
  }
}

export default VozniPark

 export const query = graphql`
  query {
    image1: file(relativePath: { eq: "vozila1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "vozila2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "vozila3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "vozila4.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "vozila5.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "vozila5.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`
