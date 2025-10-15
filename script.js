const sections = {
  Home: 'Home',
  DayOfSSCC: 'The_Day_Of_SSCC',
  RoomOfMembers: 'Page_For_Members',
  Activity: 'Activity'
};

const Menutab = document.getElementById('menutab');
const Menuicon = document.getElementById('menuicon');

// 初期表示（DOMが読み込まれたら Home を表示）
document.addEventListener('DOMContentLoaded', () => {
  showSection('Home');
});

// セクション表示切り替え
function showSection(sectionId) {
  Object.keys(sections).forEach(id => {
    const sectionEl = document.getElementById(id);
    const tabEl = document.querySelector(`.${sections[id]}`);

    // セクションの表示・非表示
    if (sectionEl) {
      sectionEl.hidden = id !== sectionId;
    }

    // タブの色とスタイル変更
    if (tabEl) {
      if (id === sectionId) {
        tabEl.style.color = 'red';
        tabEl.style.fontWeight = 'bold';
      } else {
        tabEl.style.color = 'black';
        tabEl.style.fontWeight = 'normal';
      }
    }
  });

  // メニューを自動で閉じる
  if (Menutab) Menutab.style.display = 'none';
}

// ナビゲーション関数を自動生成（ToHome(), ToActivity() など）
Object.keys(sections).forEach(id => {
  window[`To${id}`] = () => showSection(id);
});

// メニューアイコンのクリックイベント
if (Menuicon && Menutab) {
  Menuicon.addEventListener('click', () => {
    Menutab.style.display = Menutab.style.display === 'block' ? 'none' : 'block';
  });
}

// メニューを閉じる関数
window.batsu = () => {
  if (Menutab) Menutab.style.display = 'none';
};
