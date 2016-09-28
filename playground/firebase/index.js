import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCtkJ2Ct9SePq4t56DQeFyecEMmtjJ-LAs",
    authDomain: "todoapp-c9ad2.firebaseapp.com",
    databaseURL: "https://todoapp-c9ad2.firebaseio.com",
    storageBucket: "todoapp-c9ad2.appspot.com",
    messagingSenderId: "327761353457"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'TodoApp',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: "Stephen",
    age: 23
  }
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!!'
// });
//
// console.log('Todo id', newNoteRef.key);


var todoRef = firebaseRef.child('todo');

todoRef.on('child_added', (snapshot) => {
  console.log('child added', snapshot.key, snapshot.val());
})

var newTodo = todoRef.push({
  text: 'Change Clothes'
});

var newTodo = todoRef.push({
  text: 'go to bathroom'
});
