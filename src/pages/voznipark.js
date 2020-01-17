import React, { Component } from "react"
import Layout from "../components/layout"
import ImageContainer from "../components/ImageContainer"

class VozniPark extends Component {
  constructor(props) {
    super(props)

    let images = new Array()
    let thumbs = new Array()

    if (
      this.props.data.image1.childImageSharp.fixed.height > 1 &&
      this.props.data.image1.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(this.props.data.image1)
    }
    if (
      this.props.data.image2.childImageSharp.fixed.height > 1 &&
      this.props.data.image2.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(this.props.data.image2)
    }
    if (
      this.props.data.image3.childImageSharp.fixed.height > 1 &&
      this.props.data.image3.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(this.props.data.image3)
    }
    if (
      this.props.data.image4.childImageSharp.fixed.height > 1 &&
      this.props.data.image4.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(this.props.data.image4)
    }
    if (
      this.props.data.image5.childImageSharp.fixed.height > 1 &&
      this.props.data.image5.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(this.props.data.image5)
    }

    if (
      !this.props.data.image1.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(this.props.data.image1)
    }
    if (
      !this.props.data.image2.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(this.props.data.image2)
    }
    if (
      !this.props.data.image3.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(this.props.data.image3)
    }
    if (
      !this.props.data.image4.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(this.props.data.image4)
    }
    if (
      !this.props.data.image5.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      images.push(this.props.data.image5)
    }

    this.state = {
      images: images,
      thumbs: thumbs,
    }
  }
  render() {
    return (
      <Layout>
        <div class="gallery-content">
          <ImageContainer
            images={this.state.images}
            thumbs={this.state.thumbs}
          />
        </div>
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
    image1: file(relativePath: { eq: "vozila1.jpg" }) {
      childImageSharp {
        fixed(width: 220, height: 150) {
          ...GatsbyImageSharpFixed
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
    image2: file(relativePath: { eq: "vozila2.jpg" }) {
      childImageSharp {
        fixed(width: 220, height: 150) {
          ...GatsbyImageSharpFixed
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
    image3: file(relativePath: { eq: "vozila3.jpg" }) {
      childImageSharp {
        fixed(width: 220, height: 150) {
          ...GatsbyImageSharpFixed
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
    image4: file(relativePath: { eq: "vozila4.jpeg" }) {
      childImageSharp {
        fixed(width: 220, height: 150) {
          ...GatsbyImageSharpFixed
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
    image5: file(relativePath: { eq: "vozila5.jpeg" }) {
      childImageSharp {
        fixed(width: 220, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
