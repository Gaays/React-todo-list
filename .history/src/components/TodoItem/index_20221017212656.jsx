import React, { Component } from 'react'
import './index.scss'
export default class TodoItem extends Component {
  changeState = (e, data) => {
    e.stopPropagation()
    let { check, id } = data
    const checkState = !check
    console.log('changeState', e)
    this.props.changeState(id, checkState)
  }

  render() {
    return (
      <div className='todo-item' onClick={(e) => this.changeState(e, this.props.data)}>
        <input className='check-item' type="checkbox" checked={this.props.data.check} />
        <div>{this.props.data.label}</div>
        <div className='remove-btn' onClick={}>删除</div>
      </div>
    )
  }
}
