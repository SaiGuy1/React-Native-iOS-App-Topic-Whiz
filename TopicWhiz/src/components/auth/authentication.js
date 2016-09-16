import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDRN5FW1w9fBiY3gzcB1pahADWbkqLCtfo",
    authDomain: "topicwhiz-6b446.firebaseapp.com",
    databaseURL: "https://topicwhiz-6b446.firebaseio.com",
    storageBucket: "topicwhiz-6b446.appspot.com",
    messagingSenderId: "237378371325"
  };

export const firebaseApp = firebase.initializeApp(config);
