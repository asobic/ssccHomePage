const sections = {
  Home: 'Home',
  DayOfSSCC: 'The_Day_Of_SSCC',
  RoomOfMembers: 'Page_For_Members',
  Activity: 'Activity'
};

const Menutab = document.getElementById('menutab');
const Menuicon = document.getElementById('menuicon');

// 初期表示
window.onload = () => showSection('Home');

// セクション表示切り替え
function showSection(sectionId) {
  Object.keys(sections).forEach(id => {
    document.getElementById(id).hidden = id !== sectionId;
    document.querySelector(`.${sections[id]}`).style.color = id === sectionId ? 'red' : 'black';
  });
  Menutab.style.display = 'none';
}

// ナビゲーション関数を自動生成
Object.keys(sections).forEach(id => {
  window[`To${id}`] = () => showSection(id);
});

// メニューアイコンのクリックイベント
Menuicon.addEventListener('click', () => {
  Menutab.style.display = Menutab.style.display === 'block' ? 'none' : 'block';
});

// メニューを閉じる関数
window.batsu = () => {
  Menutab.style.display = 'none';
};