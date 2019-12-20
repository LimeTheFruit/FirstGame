// import {updateHighScore} from '../highScoreModule.js';


// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVjVs2FiENEUVyN05mnL9ftD0B8dIFjFM",
    authDomain: "highscorestorage.firebaseapp.com",
    databaseURL: "https://highscorestorage.firebaseio.com",
    projectId: "highscorestorage",
    storageBucket: "highscorestorage.appspot.com",
    messagingSenderId: "407629551770",
    appId: "1:407629551770:web:b5ce7c376a3441d7e02723"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var ref = database.ref('scores');

ref.on('value', gotData, errData);

function gotData(data){
    console.log("I'm triggered");
    console.log(data);
}

function errData(error){
    console.log("Error!");
    console.log(err);
}