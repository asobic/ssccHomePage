document.addEventListener("DOMContentLoaded", function () {
  const HomeText = document.getElementById('Home');
  const DayOfSSCC = document.getElementById("The_Day_Of_SSCC");
  const RoomOfMembers = document.getElementById("Page_For_Members");
  
  window.ToHome = function(){
  　HomeText.hidden = false;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = true;
  }
  
  window.ToDayOfSSCC = function(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = false;
    RoomOfMembers.hidden = true;
  }
  
  window.ToRoomOfMembers = function(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = false;
  }
}
