import React, { Component } from "react";
import './index.scss'
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
        <input className="todo-input" type="text" value={this.state.label} onChange={this.handleInput} onKeyUp={this.handleSubmit} placeholder="请输入你的任务名称，按回车确认" />
      </div>
    );
  }
}

export default class Todo extends Component {
  state = {
    list: [],
    checkAll: false
  }
  addListItem = (label) => {
    if (label !== '') {
      const id = Number(new Date())
      let list = this.state.list.slice()
      list.unshift({ label: label, id: id, check: false })
      this.setState(() => {
        return { list: list }
      })
    } else {
      window.alert("请输入内容后再提交")
    }

  }

  handleDelete = (ids) => {
    console.log('🚀 ~ Todo ~ handleDelete ~ ids', ids);
    let list = this.state.list.slice()
    if (typeof ids === 'number') {
      list = list.filter(item => item.id !== ids)
    } else if (Array.isArray(ids)) {
      list = list.filter(item => ids.indexOf(item.id) === -1)
    }

    this.setState(() => {
      return { list: list }
    })

  }

  removeDone = () => {
    const doneList = this.state.list.filter(item => item.check === true)
    this.handleDelete(doneList)
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
    const checkAllFlag = !this.state.checkAll
    const list = this.state.list.slice()
    list.forEach(item => {
      item.check = checkAllFlag
    })
    this.setState(() => {
      return { list: list, checkAll: checkAllFlag }
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
    let todoList = null;
    if (this.state.list.length > 0) {
      const itemlist = this.state.list.map((item) => {
        return <TodoItem data={item} key={item.id} changeState={this.changeState} handleDelete={this.handleDelete} />
      })
      todoList = <div className="todo-list">{itemlist}</div>
    }

    let deleteDoneBtn = null
    if (this.getDoneCount > 0) {
      console.log(123)
      deleteDoneBtn = <div className="remove-btn" onClick={this.removeDone}>删除已完成任务</div>
    }


    return (
      <div className="todo-box">
        <TodoInput submit={this.addListItem} />
        {todoList}
        <div className="state-box">
          <input className="check-all" type="checkbox" checked={this.state.checkAll} onChange={this.handleCheckAll} />
          <div>已完成{this.getDoneCount} / 未完成{this.getUndoneCount}</div>
          {deleteDoneBtn}
        </div>
      </div>
    )
  }
}



