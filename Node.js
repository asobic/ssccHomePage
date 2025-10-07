  const HomeText = document.getElementById('Home');
  const DayOfSSCC = document.getElementById("The_Day_Of_SSCC");
  const RoomOfMembers = document.getElementById("Page_For_Members");
  const Activity = document.getElementById("Activity");
  const Menutab = document.getElementById('menutab');
  const Menuicon = document.getElementById('menuicon');


  window.onload =function(){
    HomeText.hidden = false;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = true;
    Activity.hidden = true;
  }
  
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

  window.ToActivity = function(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = true;
    Activity.hidden = false;
};
  Menuicon.addEventListener('click', function() {
    if (Menutab.style.display === 'none') {
        Menutab.style.display = 'block';
        alert(123456789);
        
    } else {
        Menutab.style.display = 'none';
        alert(123456789);
    }
});

