import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
    this.deleteTodo = this.deleteTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
  }

  deleteTodo(e) {
    e.target.parentElement.remove();
  }

  doneTodo(e) {
    let todo = e.target.parentElement;
    todo.setAttribute("data-type", "done");
    this.deleteTodo(e);
    this.props.handleNewDoneTodo(Object.assign({}, this.state));
  }

  render() {
    if (this.props.todos && this.props.todos.length > 0) {
      return (
        <ul>
          {this.props.todos.map((item, index) => (
            <li key={index}>
              <input type="image" src="../../images/star.svg" />
              <input onClick={this.doneTodo} type="checkbox" />
              {`Task: ${item.text} Due time: ${item.date}`}
              <input onClick={this.deleteTodo} type="checkbox" /> delete
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
              <input type="image" src="../../images/star.svg" />
              <input onClick={this.doneTodo} type="checkbox" />
              {`Task: ${item.text} Due time: ${item.date}`}
              <input onClick={this.deleteTodo} type="checkbox" /> delete
            </li>
          ))}
        </ul>
      );
    }
    return <div>No todos yet</div>;
  }
}

export default TodoList;
