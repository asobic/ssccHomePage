(function () {
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

  function showSection(sectionId, hideMenuIcon) {
    const sections = [Home, DayOfSSCC, Activity, RoomOfMembers];
    sections.forEach((sec) => (sec.hidden = sec.id !== sectionId));
    if (hideMenuIcon) {
      Menuicon.style.display = 'none';
    } else {
      Menuicon.style.display = 'flex';
    }
    Menutab.style.display = 'none'; // メニューは閉じる
  }

  showSection("Home", false);

  window.ToHome = () => showSection("Home", true);
  window.ToDayOfSSCC = () => showSection("The_Day_Of_SSCC", true);
  window.ToRoomOfMembers = () => showSection("Page_For_Members", true);
  window.ToActivity = () => showSection("Activity", true);
})();