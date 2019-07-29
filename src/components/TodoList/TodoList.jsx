import React, { Component } from "react";
import "./TodoList.css";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
// import deleteIcon from "../../images/remove.png";
import deleteIcon from "../../images/garbage.svg";
// import todoIcon from "../../images/todo.svg";
// import doneIcon from "../../images/done.svg";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.removeDone = this.removeDone.bind(this);
    this.setDone = this.setDone.bind(this);
    this.setTodo = this.setTodo.bind(this);
  }

  removeTodo(todo) {
    // let index = this.props.todos.findIndex(obj => obj.id == todo.id);
    // let filteredArray = this.props.todos.slice(index);
    this.props.remove(todo);
    // e.target.parentElement.remove();
  }

  removeDone(todo) {
    // let index = this.props.todos.findIndex(obj => obj.id == todo.id);
    // let filteredArray = this.props.todos.slice(index);
    this.props.remove(todo);
    // e.target.parentElement.remove();
  }

  setDone(e, todo) {
    this.removeTodo(e);
    this.props.setDone(todo);
  }

  setTodo(e, todo) {
    this.removeTodo(e);
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
      // let index = this.props.todos.findIndex(elm => elm.id === todo.id);
      // let filteredArray = this.props.todos.slice(index);
      // console.log(filteredArray);
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
                  <span className="star" onClick={e => this.setStar(e, todo)} />
                  {/* <img className="checked" onClick={e => this.setDone(e, todo)} src={todoIcon}/> */}
                  <input type="checkbox" onClick={e => this.setDone(e, todo)}></input>
                  {`${todo.text}  due Date: ${todo.date} `}
                  <span className="creation">({todo.creation})</span>
                  <img src={deleteIcon} className="delete" onClick={() => this.removeTodo(todo)} />
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
                  {/* <img className="checked" onClick={e => this.setTodo(e, todo)} src={doneIcon}/> */}
                  <input type="checkbox" checked onClick={e => this.setTodo(e, todo)}></input>
                  {`${todo.text}  due Date: ${todo.date} `}
                  <span className="creation">({todo.creation})</span>
                  <img src={deleteIcon} className="delete" onClick={() => this.removeDone(todo)}/>
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
