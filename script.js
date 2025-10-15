const sections = {
  Home: document.getElementById('Home'),
  The_Day_Of_SSCC: document.getElementById('The_Day_Of_SSCC'),
  Page_For_Members: document.getElementById('Page_For_Members'),
  Activity: document.getElementById('Activity')
};

const Menutab = document.getElementById('menutab');
const Menuicon = document.getElementById('menuicon');

// 初期表示設定
window.onload = () => showSection('Home');

// セクション表示切り替え関数
function showSection(sectionId) {
  for (const id in sections) {
    sections[id].hidden = id !== sectionId;
  }
  Menutab.style.display = 'none';
}

// 各セクションへのナビゲーション関数
window.ToHome = () => {
  showSection('Home');
  Home.style.color = 'red';
  The_Day_Of_SSCC.style.color = 'white';
  Page_For_Members.style.color = 'white';
  Activity.style.color = 'white';
};

window.ToDayOfSSCC = () => {
  showSection('The_Day_Of_SSCC');
  Home.style.color = 'white';
  The_Day_Of_SSCC.style.color = 'red';
  Page_For_Members.style.color = 'white';
  Activity.style.color = 'white';
};

window.ToRoomOfMembers = () => {
  showSection('Page_For_Members');
  Home.style.color = 'white';
  The_Day_Of_SSCC.style.color = 'white';
  Page_For_Members.style.color = 'red';
  Activity.style.color = 'white';
};

window.ToActivity = () => {
  showSection('Activity');
  Home.style.color = 'white';
  The_Day_Of_SSCC.style.color = 'white';
  Page_For_Members.style.color = 'white';
  Activity.style.color = 'red';
};

// メニューアイコンのクリックイベント
Menuicon.addEventListener('click', () => {
  Menutab.style.display = Menutab.style.display === 'block' ? 'none' : 'block';
});

// メニューを閉じる関数
window.batsu = () => {
  Menutab.style.display = 'none';
};