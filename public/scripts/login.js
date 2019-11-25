var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// reference form buttons
const loginBtn = document.getElementById('login');
const cancelBtn = document.getElementById('cancel');

// verify that all content is loaded
document.addEventListener('DOMContentLoaded', () => {

});

// create login event listener
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

});

// create cancel event listener
cancelBtn.addEventListener('click', (e) => {
  e.preventDefault();

});
