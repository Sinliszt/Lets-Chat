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
    console.log("msg");
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        likes: 5000
    });
    document.getElementById("msg").value = "";
}