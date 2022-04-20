function addUser(){
    username = document.getElementById("name_input").value;
    localStorage.setItem("username", username);
    window.location="chat_room.html";
}