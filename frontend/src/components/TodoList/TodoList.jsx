import React, { Component } from "react";
import "./TodoList.css";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import deleteIcon from "../../images/garbage.svg";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.formatDate = this.formatDate.bind(this)
  }

  handleRemove(todo) {
    this.props.remove(todo);
  }

  handleStatus(todo) {
    this.props.status(todo);
  }

  handlePriority(todo) {
    this.props.priority(todo);
    // let li = e.target.parentElement;
    // let ul = e.target.parentElement.parentElement;
    // if (todo.starred) {
    //   item.classList.remove("starred");
    //   todo.starred = false;
    //   // let list = $(ul).find("li");
    //   // for (let i = 0; i < list.length; i++) {
    //   //   if (list[i].firstChild.classList.contains("starred")) {
    //   //     $(li).insertAfter($(ul).find("li")[i]);}}
    // } else {
    //   item.classList.add("starred");
    //   todo.starred = true;
    //   // $(ul).prepend(li);
    // }
    
  }

  formatDate(date) {
    let day = date.substring(8, 10);
    let month = date.substring(5, 7);
    let year = date.substring(0, 4);
    let dueDate = `${day}/${month}/${year}`;
    return dueDate;
  }

  render() {
    if (this.props.todos) {
      return (
        <div className="row justify-content-center">
          <div className="col col-md-10">
            <ul id="todo-list">
              {this.props.todos.map((todo, i) => (
                <li key={i}>
                  <span className={todo.starred ? "star starred" : "star"} onClick={() => this.handlePriority(todo)}/>
                  <input type="checkbox" onClick={() => this.handleStatus(todo)}/>
                  <span className="task">{todo.text}</span>
                  {/* <span className="due-date">{`due-date: ${this.formatDate(todo.date)}`}</span> */}
                  <span className="creation">({this.formatDate(todo.creation)})</span>
                  <img src={deleteIcon} className="delete" onClick={() => this.handleRemove(todo)}/>
                </li>))}
            </ul>
          </div>
        </div>);
    }
    if (this.props.completed) {
      return (
        <div className="row justify-content-center">
          <div className="col col-md-10">
            <ul id="done-list">
              {this.props.completed.map((todo, i) => (
                <li key={i}>
                  <input type="checkbox" onChange={() => this.handleStatus(todo)} checked/>
                  <span className="completed">{todo.text}</span>
                  {/* <span>{` due date: ${todo.date} `}</span> */}
                  <span className="creation">({this.formatDate(todo.creation)})</span>
                  <img src={deleteIcon} className="delete" onClick={() => this.handleRemove(todo)}/>
                </li>))}
            </ul>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default TodoList;
