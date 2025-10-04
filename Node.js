const HomeText = document.getElementById('Home');
const DayOfSSCC = document.getElementById("The_Day_Of_SSCC");
const RoomOfMembers = document.getElementById("Page_For_Members");

function ToHome(){
  document.write("<h1>HTMLタグも使えます</h1>");
　HomeText.hidden = false;
  DayOfSSCC.hidden = true;
  RoomOfMembers = true;
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
  
