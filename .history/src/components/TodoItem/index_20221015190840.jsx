import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      check: false,
      label: ''
    }
  }

  render() {
    return (
      <div>{this.state.label}</div>
    )
  }
}
