import React, { Component } from "react";
import "./TodoList.css";
import "bootstrap/dist/css/bootstrap.css";
import deleteIcon from "../../images/trash.svg";

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
                  <span className={todo.starred ? "favorite" : "default"} onClick={() => this.handlePriority(todo)}/>
                  <input type="checkbox" onChange={() => this.handleStatus(todo)}/>
                  <span className="task">{todo.task}</span>
                  <span className="deadline">{`${this.formatDate(todo.deadline)}`}</span>
                  <img src={deleteIcon} className="delete" onClick={() => this.handleRemove(todo)} alt="delete"/>
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
                  <span className="completed">{todo.task}</span>
                  <span className="creation">{`created at ${this.formatDate(todo.creation)}`}</span>
                  <img src={deleteIcon} className="delete" onClick={() => this.handleRemove(todo)} alt="delete"/>
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
