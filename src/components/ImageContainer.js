import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import ImgWrapper from './img-wrapper'
import Row from './row'
import Col from './column'

let prevIndex = state => (state.index - 1) % state.images.length
let nextIndex = state =>
  (state.index + state.images.length + 1) % state.images.length


export default class ImageContainer extends Component {
  constructor(props) {
    super(props);

    const { images } = this.props

    let imageGallery = new Array()
    
    images.map(function (node) {
      let nodeImage
      nodeImage = node.node.frontmatter
      console.log("nodeImage", nodeImage);
      if (!nodeImage.image1.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        imageGallery.push(nodeImage.image1)
      }
      if (!nodeImage.image2.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        imageGallery.push(nodeImage.image2)
      }
      if (!nodeImage.image3.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        imageGallery.push(nodeImage.image3)
      }
      if (!nodeImage.image4.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        imageGallery.push(nodeImage.image4)
      }
      if (!nodeImage.image5.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        imageGallery.push(nodeImage.image5)
      }
    })

    imageGallery.map(function (node) {
      console.log("NODE:: ", node)
    })
    

    this.state = {
      index: 0,
      isOpen: false,
      images: imageGallery,
      thumbs: imageGallery,
    };

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
    const { images, thumbs, index } = this.state
    //const { imageGallery } = this.state
    
    console.log("0..images, ",images)
    console.log("1..thumbs, ",thumbs)
    console.log("2..index, ",this.state.index)
    console.log("2..index - no state, ",index)
    console.log("3..previndex, ",this.state.prevIndex)
    console.log("4..nextindex, ",this.state.nextIndex)
    
    console.log("MAIN SRC", images[this.state.index].childImageSharp.fluid.src)
    //console.log("PREV SRC", images[prevIndex(this.state)].childImageSharp.fluid.src)
    console.log("NEXT SRC", images[nextIndex(this.state)].childImageSharp.fluid.src)
   
    return (
      <Lightbox
        mainSrc={images[this.state.index].childImageSharp.fluid.src}
        nextSrc={images[nextIndex(this.state)] !=null ? images[nextIndex(this.state)].childImageSharp.fluid.src : ""}
        prevSrc={images[prevIndex(this.state)] !=null ? images[prevIndex(this.state)].childImageSharp.fluid.src : ""}
        mainSrcThumbnail={thumbs[this.state.index]}
        nextSrcThumbnail={thumbs[nextIndex(this.state)]}
        prevSrcThumbnail={thumbs[prevIndex(this.state)]}
        onCloseRequest={this.closeLightbox}
        onMovePrevRequest={this.movePrev}
        onMoveNextRequest={this.moveNext}
        imageLoadErrorMessage="Impossible de charger cette image"
        nextLabel="Image suivante"
        prevLabel="Image précédente"
        zoomInLabel="Zoomer"
        zoomOutLabel="Dézoomer"
        closeLabel="Fermer"
      />
    )
  }
  movePrev() {
    this.setState(prevState => ({
      index: prevIndex(prevState),
    }))
    console.log("prevState, ",this.state.index)
    
  }

  moveNext() {
    this.setState(prevState => ({
      index: nextIndex(prevState),
    }))
    console.log("nextState, ",this.state.index)
    
  }

  closeLightbox() {
    this.setState({ isOpen: false })
  }

  render() {
    const {
      colWidth = 100 / 3,
      mdColWidth = 100 / 4,
      gutter = '0.25rem',
      imgClass = '',
    } = this.props

    return (
      <React.Fragment>
        <Row>
          {this.state.thumbs.map((thumbnail, index) => {
            console.log("index", index)
            return (
              <Col
                width={colWidth}
                md={mdColWidth}
                key={index}
                onClick={() => this.openLightBox(index)}
              >
                <ImgWrapper margin={gutter}>
                  <Img fluid={thumbnail.childImageSharp.fluid} className={imgClass} />
                </ImgWrapper>
              </Col>
            )
          })}
        </Row>
        {this.state.isOpen && this.renderLightBox()}
      </React.Fragment>
    )
  }
}


  /* render() {
    const { images } = this.props
    const { selectedImage, showLightbox } = this.state;
    let imageGallery = new Array()

    images.map(function (node) {

      let nodeImage
      nodeImage = node.node.frontmatter
      console.log("nodeImage", nodeImage);
      if (!nodeImage.image1.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        imageGallery.push(nodeImage.image1)
      }
      if (!nodeImage.image2.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        imageGallery.push(nodeImage.image2)
      }
      if (!nodeImage.image3.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        imageGallery.push(nodeImage.image3)
      }
      if (!nodeImage.image4.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        imageGallery.push(nodeImage.image4)
      }
      if (!nodeImage.image5.childImageSharp.fluid.sizes.startsWith("(max-width: 1px)")) {
        imageGallery.push(nodeImage.image5)
      }
    })

    return (
      <Fragment>
        <ImageContainer>
          {imageGallery.map((node, index) => (
            <PreviewButton
              key={node.childImageSharp.fluid.src}
              type="button"
              onClick={() => this.setState({ showLightbox: true, selectedImage: node, index: index  })}
            >
              <Img fluid={node.childImageSharp.fluid} />
            </PreviewButton>
          ))}
        </ImageContainer>
        {showLightbox && (
          <Dialog>
            <button type="button" className="image-backward" onClick={() => this.openLightBox(index)}>
              Nazaj
            </button>
            <Img fluid={selectedImage.childImageSharp.fluid} />
            <button type="button" className="image-forward" onClick={() => this.openLightBox(index)}>
              Naprej
            </button>
            <button type="button" onClick={() => this.setState({ showLightbox: false })}>
              Close
            </button>
          </Dialog>
        )}
      </Fragment>
    );
  } 
}*/
ImageContainer.propTypes = {
  images: PropTypes.array.isRequired,
  thumbs: PropTypes.array.isRequired,
  colWidth: PropTypes.number,
  mdColWidth: PropTypes.number,
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
}