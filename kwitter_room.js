
const firebaseConfig = {
      apiKey: "AIzaSyA46YLye4Yx4HfGk14mOhkBzHVD4UYY2wE",
      authDomain: "kwitter-9495a.firebaseapp.com",
      databaseURL: "https://kwitter-9495a-default-rtdb.firebaseio.com",
      projectId: "kwitter-9495a",
      storageBucket: "kwitter-9495a.appspot.com",
      messagingSenderId: "368534696437",
      appId: "1:368534696437:web:3746389456a90a488670bc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
