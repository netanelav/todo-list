import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Container.css";
import TodoList from "../TodoList/TodoList";
import Logo from "../../images/list.svg";

class Container extends Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.placeholder = "Add a to-do...";
    this.getTodo = this.getTodo.bind(this);
    this.getDate = this.getDate.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setDone = this.setDone.bind(this);
    this.setTodo = this.setTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.removeDone = this.removeDone.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.state = {
      todos: [],
      completed: [],
      todo: {
        id: null,
        text: null,
        date: null,
        creation: this.formatDate(new Date()),
        isStar: false
      }
    };
  }

  getTodo(event) {
    let newTodo = { ...this.state.todo };
    newTodo.text = event.target.value;
    newTodo.id = this.counter;
    this.setState({
      todo: newTodo
    });
  }

  getDate(event) {
    let newTodo = { ...this.state.todo };
    newTodo.date = this.setDate(event.target.value);
    this.setState({
      todo: newTodo
    });
  }

  formatDate(date) {
    let formattedDate = `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`;
    return formattedDate;
  }

  addTodo() {
    this.counter++;
    if (!this.input == "") {
      this.input.value = "";
      this.inputDate.value = "";
      this.input.focus();
      this.setState({
        todos: [...this.state.todos, this.state.todo]
      });
    }
  }

  setDate(date) {
    let day = date.substring(8, 10);
    let month = date.substring(5, 7);
    let year = date.substring(0, 4);
    let dueDate = `${day}/${month}/${year}`;
    return dueDate;
  }

  setDone(todo) {
    this.setState({completed: [...this.state.completed, todo]});
    this.removeTodo(todo) 
  }

  setTodo(todo) {
    this.setState({todos: [...this.state.todos, todo]});
    this.removeDone(todo)
  }

  removeTodo(todo) {
    let copiedArray = [...this.state.todos]
    let index = copiedArray.findIndex(obj => obj.id == todo.id);
    copiedArray.splice(index, 1);
    this.setState({todos: [...copiedArray]});
  }

  removeDone(todo) {
    let copiedArray = [...this.state.completed]
    let index = copiedArray.findIndex(obj => obj.id == todo.id);
    copiedArray.splice(index, 1);
    this.setState({completed: [...copiedArray]});
  }

  render() {
    return (
      <React.Fragment>
        <div className="row title">
          <img id="logo" src={Logo} />
          <p className="headline">Todo List</p>
        </div>
        <div className="container">
          <input id="input" type="text" placeholder={this.placeholder} onChange={this.getTodo} ref={(el) => {this.input = el;}}/>
          <input id="input-date" type="date" onChange={this.getDate}  ref={(el) => {this.inputDate = el;}} />
          <button className="btn" onClick={this.addTodo}>Add Todo</button>
          <div className="row">
            <div className="col col-md-12">
              <h2 className="todo-title">TO-DOS</h2>
              <TodoList className="todo-list" setDone={this.setDone} todos={this.state.todos} remove={this.removeTodo}/>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-12">
              <h2 className="done-title">COMPLETED ({this.state.completed.length})</h2>
              <TodoList className="done-list" setTodo={this.setTodo} completed={this.state.completed} remove={this.removeDone}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Container;
