import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.scss'
export default class TodoItem extends Component {
  changeState = (e, data) => {
    let { check, id } = this.props.data
    const checkState = !check
    this.props.changeState(id, checkState)
  }

  deleteItem = () => {
    const confirm = window.confirm('确定需要删除？')
    if (confirm) {
      this.props.handleDelete(this.props.data.id)
    }
  }

  render() {
    return (
      <div className='todo-item' onClick={this.changeState}>
        <input className='check-item' type="checkbox" checked={this.props.data.check} readOnly />
        <div>{this.props.data.label}</div>
        <div className='remove-btn' onClickCapture={this.deleteItem}>删除</div>
      </div>
    )
  }
}


TodoItem.prototypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  check: PropTypes.bool,
}