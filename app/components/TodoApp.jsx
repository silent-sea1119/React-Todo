import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export var TodoApp = React.createClass({
  onLoggout(e) {
    var {dispatch} =this.props
    e.preventDefault();

    dispatch(actions.startLoggout());
  },
  render() {
    return (
      <div>
        <div className='page-actions'>
          <a href="#" onClick={this.onLoggout}>Loggout</a>
        </div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp);
