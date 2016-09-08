var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var uuid = require('node-uuid');


var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id:uuid(),
          text:'Walk the dog',
          completed: false
        }, {
          id:uuid(),
          text: 'Clean the house',
          completed: true
        }, {
          id:uuid(),
          text: 'Feed cat',
          completed: true
        }, {
          id:uuid(),
          text: 'Wash dishes',
          completed: false
        }
      ]
    };
  },
  handleAddTodo: function (todoText) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todoText,
          completed: false
        }
      ]
    });
  },
  handleToggle:  function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText){
    this.setState ({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});


module.exports = TodoApp;
