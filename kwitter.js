function adduser(){
    username = document.getElementById("UserName").value;
    localStorage.setItem("username",username);
    window.location = "Kwitter_room.html";
}