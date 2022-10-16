import React, { Component } from 'react'

export default class TodoItem extends Component {
  render(data) {
    return (
      <div>{data.label}</div>
    )
  }
}
