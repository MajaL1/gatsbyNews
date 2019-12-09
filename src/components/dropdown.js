import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import { useStaticQuery } from 'gatsby';

const options = [
  '2018', '2017', '2016'
]

class DropdownMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: ''
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('You selected ', option.label)
    // reload zadnje novice
    /* let currentNewsList = useStaticQuery(graphql`
    query getNewsByYear($slug: String!) {
    
      markdownRemark(fields: { slug: { eq: $slug } }) {
        id
        excerpt(pruneLength: 160)
        html
        frontmatter {
          title
          date(formatString: "DD.MM.YYYY")
          intro
          image
          category
          top
        }
      }
    }
  `) */
    this.setState({selected: option})
  }

  render () {
    const defaultOption = this.state.selected

    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return (
      <article>
        <p className="content-section">Starejše novice</p>
       <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Izberi leto" />
      </article>
    )
  }
}

export default DropdownMenu