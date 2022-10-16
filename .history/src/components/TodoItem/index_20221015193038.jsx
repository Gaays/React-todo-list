import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" value={this.props.data.check} />
        <div>{this.props.data.label}</div>
      </div>
    )
  }
}
