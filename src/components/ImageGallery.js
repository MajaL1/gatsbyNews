import PropTypes from "prop-types"
import React, { Component } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"

class ImageGallery extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      selectedIndex: 0,
    }

    this.toggleLightbox = this.toggleLightbox.bind(this)
  }
  toggleLightbox(selectedIndex) {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }))
  }
  renderGallery(images) {
    if (!images) return

    const gallery = images.map((node, i) => {
      i++
      console.log("obj:: ", node.node)
      const image1 = node.node.frontmatter.image1
      const image2 = node.node.frontmatter.image2
      const image3 = node.node.frontmatter.image3
      const image4 = node.node.frontmatter.image4
      const image5 = node.node.frontmatter.image5

      console.log("node.frontmatter.image1: ", node.node.frontmatter.image1)
      console.log("node.frontmatter.image1: ", image1)

      return (
        <span key={i}>
          <a
            className="image fit thumb"
            href={image1}
            onClick={e => {
              e.preventDefault()
              this.toggleLightbox(i)
            }}
          >
            <img className="gallery-image" src={image1} alt="" />
            <img className="gallery-image" src={image2} alt="" />
            <img className="gallery-image" src={image3} alt="" />
            <img className="gallery-image" src={image4} alt="" />
            <img className="gallery-image" src={image5} alt="" />
          </a>
        </span>
      )
    })

    return <div className="row">{gallery}</div>
  }
  render() {
    const { images } = this.props
    const { selectedIndex, lightboxIsOpen } = this.state

    return (
      <div>
        {this.renderGallery(images)}
        <ModalGateway>
          {lightboxIsOpen && (
            <Modal onClose={this.toggleLightbox}>
              <Carousel currentIndex={selectedIndex} views={images} />
            </Modal>
          )}
        </ModalGateway>
      </div>
    )
  }
}

ImageGallery.displayName = "Gallery"
ImageGallery.propTypes = {
  images: PropTypes.array,
}

export default ImageGallery
