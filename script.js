  (async function () {
    const Home = document.getElementById("Home");
    const DayOfSSCC = document.getElementById("The_Day_Of_SSCC");
    const Activity = document.getElementById("Activity");
    const RoomOfMembers = document.getElementById("Page_For_Members");
    const UsefulURL = document.getElementById("usefulURL");
    const Menutab = document.getElementById('menutab');
    const Menuicon = document.getElementById('menuicon');
   Menuicon.addEventListener('click', function() {
  if (Menutab.style.display === 'block') {
    Menutab.style.display = 'none';
  } else {
    Menutab.style.display = 'block';
  }
});

    function showSection(sectionId) {
      const sections = [Home, DayOfSSCC, Activity, , RoomOfMembers];
      sections.forEach((sec) => (sec.hidden = sec.id !== sectionId));
      Menuicon.style.display = 'none';
    }

    showSection("Home");

    window.ToHome = () => showSection("Home");
    window.ToDayOfSSCC = () => showSection("DayOfSSCC");
    window.ToRoomOfMembers = () => showSection("RoomOfMembers");
    window.ToActivity = () => showSection("Activity");
    window.ToUsefulURL = () => showSection("usefulURL");
