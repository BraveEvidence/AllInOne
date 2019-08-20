import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'MY_API_KEY',
  authDomain: 'allinone-5edb3.firebaseapp.com',
  databaseURL: 'https://.....',
  projectId: 'allinone-5edb3',
  storageBucket: '',
  messagingSenderId: '....',
  appId: '1:.....',
};

let app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
