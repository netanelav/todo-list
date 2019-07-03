import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
    this.doneCounter = 0;
    this.redoCounter = 0;
    this.deleteTodo = this.deleteTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
    this.returnTodo = this.returnTodo.bind(this);
  }

  deleteTodo(e) {
    e.target.parentElement.remove();
  } 

  doneTodo(e) {
    // let todo = e.target.parentElement;
    // todo.setAttribute("data-type", "done");
    this.deleteTodo(e);
    this.props.handleNewDoneTodo(Object.assign({}, this.props.todos[this.doneCounter]));
    this.doneCounter ++;
  }

  returnTodo(e) {
    // let todo = e.target.parentElement;
    // todo.setAttribute("data-type", "todo");
    this.deleteTodo(e);
    this.props.handleNewTodo(Object.assign({}, this.props.completed[this.redoCounter]));
    this.redoCounter++;
  }

  render() {
    if (this.props.todos && this.props.todos.length > 0) {
      return (
        <ul>
          {this.props.todos.map((item, index) => (
            <li key={index}>
              <input onClick={this.doneTodo} type="checkbox" />
              {`${item.text} Due time: ${item.date}`}
              <button onClick={this.deleteTodo}>X</button>
            </li>
          ))}
        </ul>
      );
    }
    if (this.props.completed && this.props.completed.length > 0) {
      return (
        <ul>
          {this.props.completed.map((item, index) => (
            <li key={index}>
              <input onClick={this.returnTodo} type="checkbox" />
              {`${item.text} Due time: ${item.date}`}
              <button onClick={this.deleteTodo}>X</button>
            </li>
          ))}
        </ul>
      );
    }
    return <div>Waiting for your todos...</div>;
  }
}

export default TodoList;
