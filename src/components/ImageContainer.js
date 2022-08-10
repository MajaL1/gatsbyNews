import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import "@reach/dialog/styles.css"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

let prevIndex = state => (state.index - 1) % state.images.length
let nextIndex = state =>
  (state.index + state.images.length + 1) % state.images.length

export default class ImageContainer extends Component {
  constructor(props) {
    super(props)

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
              key={index}
            >
              <Img
                fixed={thumbnail.childImageSharp.fixed}
                className={"gallery-image"}
                objectFit="contain"
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
