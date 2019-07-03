import React from "react";

class TodoList extends React.Component {
  render() {
    if (this.props.todos && this.props.todos.length > 0) {
      return (
        <ul>
          {this.props.todos.map((item,index) => 
            <li key={index}>{`Task: ${item.text} Due time: ${item.date}`}</li>
          )}
        </ul>
      );
    }
    return <div>No todos yet</div>;
  }
}

export default TodoList;
