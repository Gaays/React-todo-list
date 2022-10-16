import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" name="" id="" />
        <div>{this.props.data.label}</div>
      </div>
    )
  }
}
