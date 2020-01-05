import PropTypes from "prop-types"
import React, { Component } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import Image from 'gatsby-image'

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
      if (typeof node.node == "undefined") return <div>Ni slik</div>

      let image1, image2, image3, image4, image5, nodeFrontmatter
      nodeFrontmatter = node.node.frontmatter
      if (!nodeFrontmatter.image1.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        image1 = nodeFrontmatter.image1

      }
      if (!nodeFrontmatter.image2.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        image2 = nodeFrontmatter.image2

      }
      if (!nodeFrontmatter.image3.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        image3 = nodeFrontmatter.image3
      }
      if (!nodeFrontmatter.image4.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        image4 = nodeFrontmatter.image4
      }
      if (!nodeFrontmatter.image5.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        image5 = nodeFrontmatter.image5
      }
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          {image1 && <a
            className="image fit thumb"
            href={image1.childImageSharp.fluid.src}
            onClick={e => {
              e.preventDefault()
              this.toggleLightbox(i)
            }}
          >
            <Image key={image1.childImageSharp.fluid.src} fluid={image1.childImageSharp.fluid} className="gallery-image" /> }
          </a>
          }

          {image2 && <a
            className="image fit thumb"
            href={image2.childImageSharp.fluid.src}
            onClick={e => {
              e.preventDefault()
              this.toggleLightbox(i)
            }}
          >
            <Image key={image2.childImageSharp.fluid.src} fluid={image2.childImageSharp.fluid} className="gallery-image" /> }
          </a>
          }

          {image3 && <a
            className="image fit thumb"
            href={image3.childImageSharp.fluid.src}
            onClick={e => {
              e.preventDefault()
              this.toggleLightbox(i)
            }}
          >
            <Image key={image3.childImageSharp.fluid.src} fluid={image3.childImageSharp.fluid} className="gallery-image" /> 
          </a>
          }
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
