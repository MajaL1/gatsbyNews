import React, { Component } from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

let image2, image3, image5
class AedLokacije extends Component {
  constructor(props) {
    super(props)
    if (
      this.props.data.image2.childImageSharp.fixed.height > 1 &&
      this.props.data.image2.childImageSharp.fixed.width > 1
    ) {
      image2 = this.props.data.image2
    }
    if (
      this.props.data.image3.childImageSharp.fixed.height > 1 &&
      this.props.data.image3.childImageSharp.fixed.width > 1
    ) {
      image3 = this.props.data.image3
    }
    if (
      this.props.data.image5.childImageSharp.fixed.height > 1 &&
      this.props.data.image5.childImageSharp.fixed.width > 1
    ) {
      image5 = this.props.data.image5
    }
    if (
      !this.props.data.image2.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      image2 = this.props.data.image2
    }

    if (
      !this.props.data.image3.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      image3 = this.props.data.image3
    }

    if (
      !this.props.data.image5.childImageSharp.fluid.sizes.startsWith(
        "(max-width: 1px)"
      )
    ) {
      image5 = this.props.data.image5
    }
  }
  render() {
    return (
      <Layout>
        <article>
          <section className="content-section">
            <h5 className="item-title news-item-title ">
              Lokacije AED - PGD Štangarske Poljane
            </h5>
            <br />
            <p>
              Pisno sporočamo, da smo v sklopu krajanov organizirali in izvedli
              nakup defibrilatorjev na območju PGD Štangarske Poljane (
              Štangarske Poljane, Volčja Jama, Jastrebnik, Ščit, Dragovšek, Reka
              Gozd, Velika Štanga, Mala Štanga, Račica, Koške Poljane). Vsi
              AED-ji so letnik 2018 - Defibtech ( Življenjska doba baterije 5
              let, elektrode 3 leta, imamo pa na vseh lokacijah tudi dodane
              otroške elektrode)
            </p>
            <br />
            <p className="item-title">
              1. AED na Gasilskem domu PGD Štangarske Poljane 1a
            </p>
            <Img
              fixed={image2.childImageSharp.fixed}
              className={"gallery-image"}
            />
            <hr />
            <p className="item-title">
              2. AED na kulturnem domu v Veliki Štangi 9
            </p>
            <Img
              fixed={image3.childImageSharp.fixed}
              className={"gallery-image"}
            />
            <hr />
            <p className="item-title">
              3. AED na avtobusni postaji v Reka Gozd (20m pred hišno št. 9a)
            </p>
            <Img
              fixed={image5.childImageSharp.fixed}
              className={"gallery-image"}
            />
            <hr />
          </section>
        </article>
      </Layout>
    )
  }
}

export default AedLokacije

export const query = graphql`
  query {
    image2: file(relativePath: { eq: "aed2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "aed2.jpg" }) {
      childImageSharp {
        fixed(width: 220, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image3: file(relativePath: { eq: "aed3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "aed3.jpg" }) {
      childImageSharp {
        fixed(width: 220, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image4: file(relativePath: { eq: "aed4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "aed4.jpg" }) {
      childImageSharp {
        fixed(width: 220, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image5: file(relativePath: { eq: "aed5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "aed5.jpg" }) {
      childImageSharp {
        fixed(width: 220, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
