document.addEventListener("DOMContentLoaded", function () {
  const HomeText = document.getElementById('Home');
  const DayOfSSCC = document.getElementById("The_Day_Of_SSCC");
  const RoomOfMembers = document.getElementById("Page_For_Members");
  const Acticity = document.getElementById("Activity");
  
  window.ToHome = function(){
    HomeText.hidden = false;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = true;
    Activity.hidden = true;
  }
  
  window.ToDayOfSSCC = function(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = false;
    RoomOfMembers.hidden = true;
    Activity.hidden = true;
  }
  
  window.ToRoomOfMembers = function(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = false;
    Activity.hidden = true;
  }

  window.ToActicity = function(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = true;
    RoomOfMembers = true;
    Activity.hidden = false;
});
