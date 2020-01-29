import React, { Component } from "react"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"

const options = ["2020", "2019", "2018", "2017"]

class DropdownMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "",
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect(option) {
    this.setState({ selected: option })
    this.props.onChange(option)
  }

  render() {
    const defaultOption = this.state.selected

    return (
      <article>
        <p className="content-section">Starejše novice</p>
        <Dropdown
          className="dropdown"
          options={options}
          callbackFromParent={this.myCallback}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Izberi leto"
        />
        <br />
      </article>
    )
  }
}

export default DropdownMenu
