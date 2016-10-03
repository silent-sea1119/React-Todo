var expect = require('expect');
var df = require('deep-freeze-strict');


var reducers = require('reducers');



describe('Reducers', () =>{
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText);
    });
  });

  describe('authReducer', () => {
    it('should update uid to state on LOGIN', () =>{
      var action = {
        type:'LOGIN',
        uid: '1723Aw'
      };

      var res = reducers.authReducer(undefined, df(action));

      expect(res.uid).toEqual(action.uid);
    });

    it('should delete uid on the state', () => {
      const action = {
        type:'LOGOUT'
      };
      const authData = {
        uid: '123gas'
      };

      var res = reducers.authReducer(df(authData), df(action));
    });

    expect(res).toEqual({});
  });


  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type:'ADD_TODO',
        todo:{
          id: 'abc123',
          text: 'Something',
          completed: false,
          createdAt: 2314123
        }
      };

      var res = reducers.todosReducer(df([]),df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [{
          id: '123',
          text: 'Dog Walk',
          completed: true,
          createdAt: 123,
          completedAt: 125
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      var todos = [{
        id:'111',
        text: 'Dog',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);

    });
  });
});
