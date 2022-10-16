import React, { Component } from "react";
import hello from './index.module.css'
import TodoItem from '../TodoItem'


class TodoInput extends Component {
  state = {
    value: ''
  }
  submit = () => {
    console.log(this.state.value)
    this.props.submit(this.state.value)
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onKeyUp={this.submit} />
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
    ]
  }
  addListItem = (label) => {
    const id = Number(new Date())
    let list = this.state.list.slice()
    list.unshift({ label: label, id: id, check: false })
    this.setState(() => {
      return { list: list }
    })
  }
  changeVal = (id, state) => {
    const newList = this.state.list.slice()
    const item = newList.find(item => item.id === id)
    if (item) {
      item.check = state
    }
    this.setState(() => {
      return { list: newList }
    })
  }
  render() {
    const todoList = this.state.list.map((item) => {
      return <TodoItem data={item} key={item.id} changeVal={this.changeVal} />
    })
    return (
      <div>
        <h2 className={hello.title}>hello~~</h2 >
        <TodoInput submit={this.addListItem} />>
        <div>{todoList}</div>
      </div>
    )
  }
}



