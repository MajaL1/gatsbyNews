import React, { Component } from "react"
import Layout from "../components/layout"
import ImageContainer from "../components/ImageContainer"
import { graphql } from 'gatsby'



class PozarniNacrt extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: "",
      thumbs: "",
    }
    let images = []
    let thumbs = []
    if (
      this.props.data.image1.childImageSharp.fixed.height > 1 &&
      this.props.data.image1.childImageSharp.fixed.width > 1
    ) {
      images.push(this.props.data.image1)
    }
    if (
      this.props.data.image1.childImageSharp.fixed.height > 1 &&
      this.props.data.image1.childImageSharp.fixed.width > 1
    ) {
      thumbs.push(this.props.data.image1)
    }
    this.state = {
      images: images,
      thumbs: thumbs,
    }
  }
  render() {

    return (
      <Layout>
        <section className="content-section">
          <br />
          <p className="content-section section-title">
            Na našem območju pokrivamo naselja:
            <br />
            <small>
              (Klikni za povečavo)
          </small>
          </p>

          <div className="gallery-content">
            <ImageContainer
              images={this.state.images}
              thumbs={this.state.thumbs}
            />
          </div>
          <section className="content-section section-table">
            <div>
              <table>
                <thead>
                  <tr>
                    <th className="item-title">Vir: statistični urad RS 2019</th>
                    <th className="item-title">Površina [km2]</th>
                    <th className="item-title">
                      prebivalci s stalnim naslovom [2019]
                  </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dragovšek</td>
                    <td>1,75</td>
                    <td>66</td>
                  </tr>
                  <tr>
                    <td>Gozd - Reka</td>
                    <td>7,7</td>
                    <td>144</td>
                  </tr>
                  <tr>
                    <td>Jastrebnik</td>
                    <td>1,63</td>
                    <td>39</td>
                  </tr>
                  <tr>
                    <td>Koške Poljane</td>
                    <td>1,72</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>Mala Štanga</td>
                    <td>1,81</td>
                    <td>32</td>
                  </tr>
                  <tr>
                    <td>Račica</td>
                    <td>2,37</td>
                    <td>57</td>
                  </tr>
                  <tr>
                    <td>Ščit</td>
                    <td>2,78</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Štangarske Poljane</td>
                    <td>0,89</td>
                    <td>76</td>
                  </tr>
                  <tr>
                    <td>Velika Štanga</td>
                    <td>2,87</td>
                    <td>117</td>
                  </tr>
                  <tr>
                    <td>Volčja Jama</td>
                    <td>2,9</td>
                    <td>101</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Skupaj </strong>
                    </td>
                    <td>
                      <strong>26,42</strong>
                    </td>
                    <td>
                      <strong>668</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Kar predstavlja</strong>
                    </td>
                    <td>
                      <strong>28%</strong>
                    </td>
                    <td>
                      <strong>12%</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Celotna občina Šmartno pri Litiji</strong>
                    </td>
                    <td>
                      <strong>94,97</strong>
                    </td>
                    <td>
                      <strong>5.603</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <br />
        </section>
      </Layout >
    )
  }
}



export default PozarniNacrt

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "pozarni_nacrt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "pozarni_nacrt.jpg" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
