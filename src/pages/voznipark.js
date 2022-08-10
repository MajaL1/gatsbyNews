import React, { Component } from "react"
import Layout from "../components/layout"
import ImageContainer from "../components/ImageContainer"
import { graphql } from 'gatsby'

class VozniPark extends Component {
  constructor(props) {
    super(props)

    let images = []
    let thumbs = []

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


    this.state = {
      images: images,
      thumbs: thumbs,
    }
  }
  render() {
    return (
      <Layout>
        <article>
          <section className="content-section">
            <h5 className="item-title news-item-title ">
              Vozni park
            </h5>
            <br />
            <div className="gallery-content">
              <ImageContainer
                images={this.state.images}
                thumbs={this.state.thumbs}
              />
            </div>
            <br />
            <p className="item-title news-item-title ">
              GVV1
            </p>
            <br />
            <p> Namen/vrsta vozila: Manjše gasilsko vozilo z vodo</p>
            <p> Leto izdelave: 2008</p>
            <p> Registrska oznaka: LJ 61-3RT</p>
            <p> Posadka vozila: 1 + 5</p>
            <p> Proizvajalec: MERCEDES BENZ</p>
            <p> Oznaka: SPRINTER 515/CDI</p>
            <p> Nadgradnja: GASILSKA VOZILA SVIT-ZOLAR</p>
            <p> Prostornina: 2200 cm3</p>
            <p> Moč: 110 kW</p>
            <p> Dimenzije vozila d/š/v (mm): 5730/1994/2590</p>
            <p> Količina vode: 300 l</p>
            <p> Količina penila: 20 l</p>
            <p> Motorna črpalka: ZIEGLER TS8/8</p>
            <p> Elektroagregat: 5,0 kVA</p>
            <p> Svetlobni stolp: 2 X 500 W</p>
            <p> Vlečni vitlj: 9000 kg</p>
            <p> Hitro napadalna cev: 2 X 50m</p>
            <p> Izolirni dihalni aparat: 2 X AUER</p>
            <p> Tlačne posode za IDA: 4 kom</p>
            <p> Gasilska C cev: 16 kom</p>
            <p> Gasilska B cev: 12 kom</p>
            <p> Sesalne cevi: 4 kom</p>
            <p> Turbo ročnik: 2 X Pohorje</p>
            <p>150Svetilke: 4 X M-FIRE AG</p>
            <p> Motorna žaga: STIHL MS211</p>
            <p> Reševalna torba: 1 kom</p>
            <p> Oprema za pomoč pri škripčevju: 1 kom</p>
            <p> Nastavek za podzemni hidrant: 1 kom</p>
            <p> Skladno s tipizacijo je v vozilu še veliko manjše opreme</p>
          </section>
        </article>
      </Layout>
    )
  }
}

export default VozniPark

export const query = graphql`
  query {
            image1: file(relativePath: {eq: "vozila1.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          }
        }
    image1: file(relativePath: {eq: "vozila1.jpg" }) {
            childImageSharp {
            fixed(width: 220) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    image2: file(relativePath: {eq: "vozila2.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          }
        }
    image2: file(relativePath: {eq: "vozila2.jpg" }) {
            childImageSharp {
            fixed(width: 220) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    image3: file(relativePath: {eq: "vozila3.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          }
        }
    image3: file(relativePath: {eq: "vozila3.jpg" }) {
            childImageSharp {
            fixed(width: 220) {
            ...GatsbyImageSharpFixed
          }
          }
        }
      }
    `
