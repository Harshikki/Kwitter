const firebaseConfig = {
      apiKey: "AIzaSyB_mVlIVxcTPWsgMvbAs7ThZbWuvR5_hg0",
      authDomain: "kwitter-123.firebaseapp.com",
      databaseURL: "https://kwitter-123-default-rtdb.firebaseio.com",
      projectId: "kwitter-123",
      storageBucket: "kwitter-123.appspot.com",
      messagingSenderId: "710871513290",
      appId: "1:710871513290:web:2e867a11e2b533309ddc33"
    };
    firebase.initializeApp(firebaseConfig);
  
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding the room"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
      {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      Room_names = childKey;
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}