user_name = localStorage.getItem("username");
console.log(user_name);
document.getElementById("welcoming").innerHTML = "Welcome "+user_name;
var firebaseConfig = {
    apiKey: "AIzaSyAvbCo6HfAdBOnkXlFOEIl0Q3d_GMg9cOk",
    authDomain: "let-s-chat-f5f0f.firebaseapp.com",
    databaseURL: "https://let-s-chat-f5f0f-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-f5f0f",
    storageBucket: "let-s-chat-f5f0f.appspot.com",
    messagingSenderId: "218381035203",
    appId: "1:218381035203:web:53fc29b93aae1c01a6a476",
    measurementId: "G-3KXLKSKCH6"
};

firebase.initializeApp(firebaseConfig);

function addRoom(){
  room_name = document.getElementById("room_input").value;
  firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
  });
  console.log(room_name);
  localStorage.setItem("roomName", room_name);
  window.location = "message_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room_names");
row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'><center>#"+Room_names+"</center></div><hr>";
document.getElementById("output").innerHTML = row;
});});}
getData();

function redirectToRoomName (name){
  console.log(name);
  localStorage.setItem("room", name);
  window.location = "message_room.html";
}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomName");
  window.location="index.html";
}