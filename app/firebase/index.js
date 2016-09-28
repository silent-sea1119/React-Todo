import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCtkJ2Ct9SePq4t56DQeFyecEMmtjJ-LAs",
      authDomain: "todoapp-c9ad2.firebaseapp.com",
      databaseURL: "https://todoapp-c9ad2.firebaseio.com",
      storageBucket: "todoapp-c9ad2.appspot.com",
      messagingSenderId: "327761353457"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
