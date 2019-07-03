import React from "react";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.state = {
      todos: []
    };
  }

  handleNewTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    return (
      <div>
        <TodoForm handleNewTodo={this.handleNewTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer;
