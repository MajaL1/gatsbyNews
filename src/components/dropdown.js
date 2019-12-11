import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
// import { useStaticQuery } from 'gatsby';

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
   // console.log('You selected ', option.label)
    this.setState({selected: option})
    this.props.onChange(option);
  }

  render () {
    const defaultOption = this.state.selected

    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return (
      <article>
        <p className="content-section">Starejše novice</p>
       <Dropdown options={options} callbackFromParent={this.myCallback} onChange={this._onSelect} value={defaultOption} placeholder="Izberi leto" />
      </article>
    )
  }
}

export default DropdownMenu