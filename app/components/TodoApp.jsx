var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id:1,
          text:'Walk the dog'
        }, {
          id:2,
          text: 'Clean the house'
        }, {
          id:3,
          text: 'Feed cat'
        }, {
          id:4,
          text: 'Wash dishes'
        }
      ]
    };
  },
  handleAddTodo: function (todoText) {
    alert("new todo " + todoText);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});


module.exports = TodoApp;
