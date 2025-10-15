const sections = {
  Home: document.getElementById('Home'),
  The_Day_Of_SSCC: document.getElementById('The_Day_Of_SSCC'),
  Page_For_Members: document.getElementById('Page_For_Members'),
  Activity: document.getElementById('Activity')
};

const Menutab = document.getElementById('menutab');
const Menuicon = document.getElementById('menuicon');
const home = document.querySelector('.home');
const today = document.querySelector('.today');
const toroom = document.querySelector('.toroom');
const activity = document.querySelector('.activity');
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
  home.style.color = 'red';
  today.style.color = 'white';
  toroom.style.color = 'white';
  activity.style.color = 'white';
};

window.ToDayOfSSCC = () => {
  showSection('The_Day_Of_SSCC');
  home.style.color = 'white';
  today.style.color = 'red';
  toroom.style.color = 'white';
  activity.style.color = 'white';
};

window.ToRoomOfMembers = () => {
  showSection('Page_For_Members');
  home.style.color = 'white';
  today.style.color = 'white';
  toroom.style.color = 'red';
  activity.style.color = 'white';
};

window.ToActivity = () => {
  showSection('Activity');
  home.style.color = 'white';
  today.style.color = 'white';
  toroom.style.color = 'white';
  activity.style.color = 'red';
};

// メニューアイコンのクリックイベント
Menuicon.addEventListener('click', () => {
  Menutab.style.display = Menutab.style.display === 'block' ? 'none' : 'block';
});

// メニューを閉じる関数
window.batsu = () => {
  Menutab.style.display = 'none';
};