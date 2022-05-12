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

function logout(){
  window.location="index.html";
}
