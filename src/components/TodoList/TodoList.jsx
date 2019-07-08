import React, { Component } from "react";
import "./TodoList.css";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import deleteIcon from "../../images/remove.png";
import todoIcon from "../../images/todo.svg";
import doneIcon from "../../images/done.svg";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.setDone = this.setDone.bind(this);
    this.setTodo = this.setTodo.bind(this);
  }

  removeTodo(event) {
    event.target.parentElement.remove();
  }

  setDone(e,todo) {
    this.removeTodo(e);
    this.props.setDone(todo);
  }

  setTodo(e,todo) {
    this.removeTodo(e);
    this.props.setTodo(todo);
  }

  setStar(e,todo) {
    let item = e.target;
    let li = e.target.parentElement;
    let ul = e.target.parentElement.parentElement;
    if (todo.isStar) {
      item.classList.remove("star-on");
      // let list = $(ul).find("li");
      // for (let i = 0; i < list.length; i++) {
      //   if (list[i].firstChild.classList.contains("star-on")) {
      //     $(li).insertAfter($(ul).find("li")[i]);
      //   }
      // }
    } else {
      item.classList.add("star-on");
      console.log(todo.id);
      let index = this.props.todos.findIndex(elm => elm.id === todo.id);
      console.log(index)
      // console.log(this.props.todos.find(todo.id));
      $(ul).prepend(li);
    }
  }

  render() {
    if (this.props.todos && this.props.todos.length > 0) {
      return (
        <div className="row justify-content-center">
          <div className="col col-md-10">
            <ul id="todo-list">
              {this.props.todos.map((todo, i) => (
                <li key={i}>
                  <span className="star" onClick={(e) => this.setStar(e,todo)} />
                  <img className="checked" onClick={(e) => this.setDone(e,todo)} src={todoIcon}/>
                  {`${todo.text} Due Date: ${todo.date} Created at: ${todo.creation}`}
                  <img src={deleteIcon} className="delete" onClick={this.removeTodo}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    if (this.props.completed && this.props.completed.length > 0) {
      return (
        <div className="row justify-content-center">
          <div className="col col-md-10">
            <ul id="done-list">
              {this.props.completed.map((todo, i) => (
                <li key={i}>
                  <img className="checked" onClick={(e) => this.setTodo(e,todo)} src={doneIcon}/>
                  {`${todo.text} Due Date: ${todo.date} Created at: ${todo.creation}`}
                  <img src={deleteIcon} className="delete" onClick={this.removeTodo}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    return <div>Waiting for your todos...</div>;
  }
}

export default TodoList;
