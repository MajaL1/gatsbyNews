import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
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
    this.setState({selected: option})
  }

  render () {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return (
      <article>
       <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
      </article>
    )
  }
}

export default DropdownMenu