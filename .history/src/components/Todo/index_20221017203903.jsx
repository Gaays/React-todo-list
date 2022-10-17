import React, { Component } from "react";
import hello from './index.module.css'
import TodoItem from '../TodoItem'


class TodoInput extends Component {
  state = {
    label: ''
  }
  handleInput = (e) => {
    this.setState({ label: e.target.value })
  }
  handleSubmit = (e) => {
    if (e.code === 'Enter') {
      this.props.submit(this.state.label)
      this.setState({ label: '' })

    }
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.label} onChange={this.handleInput} onKeyUp={this.handleSubmit} />
      </div>
    );
  }
}

export default class Todo extends Component {
  state = {
    list: [
      {
        id: 1,
        check: false,
        label: '123'
      },
      {
        id: 2,
        check: false,
        label: '456'
      },
    ],
    checkAll: false
  }
  addListItem = (label) => {
    const id = Number(new Date())
    let list = this.state.list.slice()
    list.unshift({ label: label, id: id, check: false })
    this.setState(() => {
      return { list: list }
    })
  }
  changeState = (id, state) => {
    const newList = this.state.list.slice()
    const item = newList.find(item => item.id === id)
    let checkAll = false
    if (item) {
      item.check = state
    }
    if (this.state.list.length > 0 && this.getUndoneCount === 0) {
      checkAll = true
    }
    this.setState(() => {
      return { list: newList, checkAll: checkAll }
    })
  }

  handleCheckAll = () => {
    const list = this.state.list.slice()
    list.forEach(item => {
      item.check = true
    })
    this.setState(() => {
      return { list: list }
    })
  }

  get getDoneCount() {
    const doneCount = this.state.list.filter(item => item.check).length
    return doneCount
  }

  get getUndoneCount() {
    return this.state.list.filter(item => item.check === false).length
  }


  render() {
    const todoList = this.state.list.map((item) => {
      return <TodoItem data={item} key={item.id} changeState={this.changeState} />
    })
    return (
      <div>
        <h2 className={hello.title}>hello~~</h2 >
        <TodoInput submit={this.addListItem} />
        <div>{todoList}</div>
        <div >
          <input type="checkbox" checked={this.state.checkAll} onChange={this.handleCheckAll} />
          <div>已完成{this.getDoneCount} / 未完成{this.getUndoneCount}</div>
        </div>
      </div>
    )
  }
}



