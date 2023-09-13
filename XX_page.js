const firebaseConfig = {
    apiKey: "AIzaSyAVi0lHa3X-QLMMlI6E0u3pOXsnQDQLBpY",
    authDomain: "exexele.firebaseapp.com",
    databaseURL: "https://exexele-default-rtdb.firebaseio.com",
    projectId: "exexele",
    storageBucket: "exexele.appspot.com",
    messagingSenderId: "994195416002",
    appId: "1:994195416002:web:30b7311296b7dee820ac5b"
  };
  firebase.initializeApp(firebaseConfig)
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send(){
  
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";








}












