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

room_name = localStorage.getItem("roomName");
user_name = localStorage.getItem("username");

function logout(){
    localStorage.removeItem("roomName");
    localStorage.removeItem("username");
    window.location = "index.html";
}

function send(){
    msg = document.getElementById("msg").value;
    console.log(msg);
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        likes: 0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output1").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    message_ids = childKey;
    message_data = childData;
    console.log(message_ids);
    console.log(message_data);
    username = message_data['name'];
    message = message_data['message'];
    likes = message_data['likes'];
    name_tag = "<h4> "+ username +"<img src='chat.png' style='width: 50px; height: 50px;'></h4>";
    message_tag = "<h4 style='padding: 5px; color: grey;'>" + message + "</h4>";
    like_button ="<button id="+message_ids+" value="+likes+" onclick='updateLike(this.id)' class='btn btn-warning'";
    span_tag = "<span>Like: "+ likes +"</span></button><hr>";

   row = name_tag + message_tag +like_button + span_tag;       
   document.getElementById("output1").innerHTML += row;
 } });  }); }
getData();

function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        likes : updated_likes  
    });
}

