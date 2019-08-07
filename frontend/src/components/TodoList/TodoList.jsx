import React, { Component } from "react";
import "./TodoList.css";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import deleteIcon from "../../images/garbage.svg";


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.setDone = this.setDone.bind(this);
    this.setTodo = this.setTodo.bind(this);
  }

  remove(todo) {
    this.props.remove(todo);
  }

  setDone(todo) {
    this.props.setDone(todo);
  }

  setTodo(todo) {
    this.props.setTodo(todo);
  }

  setStar(e, todo) {
    let item = e.target;
    let li = e.target.parentElement;
    let ul = e.target.parentElement.parentElement;
    if (todo.isStar) {
      item.classList.remove("star-on");
      todo.isStar = false;
      let list = $(ul).find("li");
      for (let i = 0; i < list.length; i++) {
        if (list[i].firstChild.classList.contains("star-on")) {
          $(li).insertAfter($(ul).find("li")[i]);
        }
      }
    } else {
      item.classList.add("star-on");
      todo.isStar = true;
      $(ul).prepend(li);
    }
  }

  // bootstrap
  render() {
    if (this.props.todos && this.props.todos.length > 0) {
      return (
        <div className="row justify-content-center">
          <div className="col col-md-10">
            <ul id="todo-list">
              {this.props.todos.map((todo, i) => (
                <li key={i}>
                  <span className="star" onClick={e => this.setStar(e, todo)} />
                  <input type="checkbox" onClick={e => this.setDone(todo)}></input>
                  <span>{todo.text}</span>
                  {/* <span>{` due date: ${todo.date} `}</span> */}
                  {/* {`${todo.text} - due date: ${todo.date} `} */}
                  <span className="creation">({todo.creation})</span>
                  <img src={deleteIcon} className="delete" onClick={() => this.remove(todo)} />
                </li>))}
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
                  <input type="checkbox" checked onChange={e => this.setTodo(todo)}></input>
                  <span className="completed">{todo.text}</span>
                  {/* <span>{` due date: ${todo.date} `}</span> */}
                  {/* {`${todo.text}  - due date: ${todo.date} `} */}
                  <span className="creation">({todo.creation})</span>
                  <img src={deleteIcon} className="delete" onClick={() => this.remove(todo)}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    // return <div>Waiting for your todos...</div>;
    return <div></div>;
  }
}

export default TodoList;
