import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import ImgWrapper from "./img-wrapper"

let prevIndex = state => (state.index - 1) % state.images.length
let nextIndex = state =>
  (state.index + state.images.length + 1) % state.images.length

export default class ImageContainer extends Component {
  constructor(props) {
    super(props)

    const { images } = this.props.images
    const { thumbs } = this.props.thumbs

    /* 
    let fulls =  new Array()
    let thumbnails =  new Array()

    images.map(function (node) {
      let nodeImage
      nodeImage = node.node.frontmatter
      if (!nodeImage.image1.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        fulls.push(nodeImage.image1)
      }
      if (!nodeImage.image2.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        fulls.push(nodeImage.image2)
      }
      if (!nodeImage.image3.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        fulls.push(nodeImage.image3)
      }
      if (!nodeImage.image4.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        fulls.push(nodeImage.image4)
      }
      if (!nodeImage.image5.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        fulls.push(nodeImage.image5)
      }
    })

     thumbs.map(function (node) {
      let nodeImage
      nodeImage = node.node.frontmatter
    
      if (nodeImage.image1.childImageSharp.fixed.height > 1 && nodeImage.image1.childImageSharp.fixed.width > 1) {
        thumbnails.push(nodeImage.image1)
      }
      if (nodeImage.image2.childImageSharp.fixed.height > 1 && nodeImage.image2.childImageSharp.fixed.width > 1) {
        thumbnails.push(nodeImage.image2)
      }
      if (nodeImage.image3.childImageSharp.fixed.height > 1 && nodeImage.image3.childImageSharp.fixed.width > 1) {
        thumbnails.push(nodeImage.image3)
      }
      if (nodeImage.image4.childImageSharp.fixed.height > 1 && nodeImage.image4.childImageSharp.fixed.width > 1) {
        thumbnails.push(nodeImage.image4)
      }
      if (nodeImage.image5.childImageSharp.fixed.height > 1 && nodeImage.image5.childImageSharp.fixed.width > 1) {
        thumbnails.push(nodeImage.image5)
      }
    })  */

    this.state = {
      index: 0,
      isOpen: false,
      images: this.props.images,
      thumbs: this.props.thumbs,
    }

    this.renderLightBox = this.renderLightBox.bind(this)
    this.openLightBox = this.openLightBox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
    this.movePrev = this.movePrev.bind(this)
    this.moveNext = this.moveNext.bind(this)
  }

  openLightBox(index) {
    this.setState({
      index: index,
      isOpen: true,
    })
  }

  renderLightBox() {
    const images = this.state.images
    const thumbs = this.state.thumbs

    return (
      <Lightbox
        mainSrc={images[this.state.index].childImageSharp.fluid.src}
        nextSrc={
          images[nextIndex(this.state)] != null
            ? images[nextIndex(this.state)].childImageSharp.fluid.src
            : ""
        }
        prevSrc={
          images[prevIndex(this.state)] != null
            ? images[prevIndex(this.state)].childImageSharp.fluid.src
            : ""
        }
        mainSrcThumbnail={thumbs[this.state.index]}
        nextSrcThumbnail={thumbs[nextIndex(this.state)]}
        prevSrcThumbnail={thumbs[prevIndex(this.state)]}
        onCloseRequest={this.closeLightbox}
        onMovePrevRequest={this.movePrev}
        onMoveNextRequest={this.moveNext}
        imageLoadErrorMessage=""
        nextLabel="Naprej"
        prevLabel="Nazaj"
        zoomInLabel="Zoom +"
        zoomOutLabel="Zoom -"
        closeLabel="Zapri"
      />
    )
  }
  movePrev() {
    this.setState(prevState => ({
      index: prevIndex(prevState),
    }))
  }

  moveNext() {
    this.setState(prevState => ({
      index: nextIndex(prevState),
    }))
  }

  closeLightbox() {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <React.Fragment>
        {this.props.thumbs.map((thumbnail, index) => {
          return (
            <div
              className="gallery-image-content"
              onClick={() => this.openLightBox(index)}
            >
              <Img
                fixed={thumbnail.childImageSharp.fixed}
                className={"gallery-image"}
              />
            </div>
          )
        })}
        {this.state.isOpen && this.renderLightBox()}
      </React.Fragment>
    )
  }
}

ImageContainer.propTypes = {
  images: PropTypes.array.isRequired,
  thumbs: PropTypes.array.isRequired,
  colWidth: PropTypes.number,
  mdColWidth: PropTypes.number,
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
}
