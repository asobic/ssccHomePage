  (async function () {
    const Home = document.getElementById("Home");
    const DayOfSSCC = document.getElementById("The_Day_Of_SSCC");
    const Activity = document.getElementById("Activity");
    const RoomOfMembers = document.getElementById("Page_For_Members");
    const Menutab = document.getElementById('menutab');
    const Menuicon = document.getElementById('menuicon');
   Menuicon.addEventListener('click', function() {
  if (Menutab.style.display === 'block') {
    Menutab.style.display = 'none';
  } else {
    Menutab.style.display = 'block';
  }
});

    function showSection(sectionId, bool) {
      const sections = [Home, DayOfSSCC, Activity, RoomOfMembers];
      sections.forEach((sec) => (sec.hidden = sec.id !== sectionId));
      if (bool){
        Menuicon.style.display = 'none';}
    }

    showSection("Home",False);

    window.ToHome = () => showSection("Home",True);
    window.ToDayOfSSCC = () => showSection("DayOfSSCC",True);
    window.ToRoomOfMembers = () => showSection("RoomOfMembers",True);
    window.ToActivity = () => showSection("Activity",True);
  })();
