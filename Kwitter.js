function addUser(){
    user_name=document.getElementsById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="Kwitter_room.html";
}