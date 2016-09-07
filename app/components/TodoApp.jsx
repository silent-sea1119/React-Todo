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
          text:'Walk the dog'
        }, {
          id:uuid(),
          text: 'Clean the house'
        }, {
          id:uuid(),
          text: 'Feed cat'
        }, {
          id:uuid(),
          text: 'Wash dishes'
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
          text: todoText
        }
      ]
    });
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
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});


module.exports = TodoApp;
