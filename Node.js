document.addEventListener("DOMContentLoaded", function () {
  const HomeText = document.getElementById('Home');
  const DayOfSSCC = document.getElementById("The_Day_Of_SSCC");
  const RoomOfMembers = document.getElementById("Page_For_Members");
  
  function ToHome(){
  　HomeText.hidden = false;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = true;
  }
  
  function ToDayOfSSCC(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = false;
    RoomOfMembers.hidden = true;
  }
  
  function ToRoomOfMenbers(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = false;
  }
}
