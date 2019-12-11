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

    const gallery = images.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) img-article" key={i}>
          <a
            className="image fit thumb"
            href={obj.source}
            onClick={e => {
              e.preventDefault()
              this.toggleLightbox(i)
            }}
          >
            <img src={obj.thumbnail}  alt=""/>
          </a>

          <h5>{obj.caption}</h5>
          <small>{obj.description}</small>
        </article>
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
