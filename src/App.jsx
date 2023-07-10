import "./App.css";
import { Component } from "react";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button } from "antd";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
      editing: false,
      colors: false,
      currentid: "",
      currentValue: "",
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onAddTask = (e) => {
    e.preventDefault();

    if (this.state.value.trim()) {
      const obj = {
        name: this.state.value,
        id: Date.now(),
      };
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  };

  onDeleteTask = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };

  onEditTodo = (id, newValue) => {
    this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.name = newValue;
      }
    });
  };

  onSubmitEditTodo = (e) => {
    e.preventDefault();

    this.onEditTodo(this.state.currentid, this.state.currentValue);
    this.setState({ editing: false });
  };

  onToggleEdit = (todo) => {
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
  };

  onEditInputChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  redLin = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };

  render() {
    const mylist = this.state.todos.map((todo) => (
      <div key={todo.id} className="control-todo-items">
        <li className="title-items">{todo.name}</li>

        <li className="edit-items" onClick={() => this.onToggleEdit(todo)}>
          <EditTwoTone />
        </li>
        <li className="edit-items" onClick={() => this.onDeleteTask(todo.id)}>
          <DeleteTwoTone />
        </li>
      </div>
    ));

    return (
      <div className="container">
        <div className="App">
          {this.state.editing === false ? (
            <form className="form-input" onSubmit={this.onAddTask}>
              <input
                className="input-hero"
                placeholder="add items"
                value={this.state.value}
                onChange={this.onChange}
              />
              <Button onClick={this.onAddTask} type="primary">
                Add Item
              </Button>
            </form>
          ) : (
            <form className="form-input" onSubmit={this.onSubmitEditTodo}>
              <input
                className="input-hero"
                placeholder="edit your task"
                value={this.state.currentValue}
                name={this.state.currentValue}
                onChange={this.onEditInputChange}
              />
              <Button onClick={this.onSubmitEditTodo} type="primary">
                Update{" "}
              </Button>
            </form>
          )}
          <ul className="todo_wrapper">{mylist}</ul>
        </div>
      </div>
    );
  }
}

export default App;
