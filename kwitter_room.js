const firebaseConfig = {
      apiKey: "AIzaSyCu-FFwZJdaPS72ipI1di8lcPBVMI9CJxw",
      authDomain: "kwitter-5bbc5.firebaseapp.com",
      databaseURL: "https://kwitter-5bbc5-default-rtdb.firebaseio.com",
      projectId: "kwitter-5bbc5",
      storageBucket: "kwitter-5bbc5.appspot.com",
      messagingSenderId: "176016458132",
      appId: "1:176016458132:web:40a564622fdee1b39d0f81"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    var user_name = localStorage.getItem("username");
    document.getElementById("username").innerHTML = " Welcome "+ user_name + "!";

    function AddRoom(){
          var Room_name = document.getElementById("roomname").value;
          console.log(Room_name);
          app.database().ref("/").child(Room_name).update({
                purporse:"adding room name"
          });
          localStorage.setItem("room_name",Room_name);
          window.location = "kwitter_page.html"
    }

    function getData() {app.database().ref("/").on('value', 
    function(snapshot) 
    {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class = 'room_name' id="+Room_names+" onclick='redirect(this.id)' "
      //End code
      });});}
getData();

function LOGOUT(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";

}
function redirect(roomname){
      localStorage.setItem("room_name",roomname);
      window.location = "kwitter_page.html"
}