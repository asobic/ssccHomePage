const sections = {
  Home: 'Home',
  ClubDay: 'ClubDay',
  MemberRoom: 'MemberRoom',
  Activity: 'Activity'
};

const Menutab = document.getElementById('menutab');
const Menuicon = document.getElementById('menuicon');

document.addEventListener('DOMContentLoaded', () => {
  showSection('Home');
});

function showSection(sectionId) {
  Object.keys(sections).forEach(id => {
    const sectionEl = document.getElementById(id);
    if (sectionEl) {
      sectionEl.hidden = id !== sectionId;
    }

    const tabEls = document.querySelectorAll(`.class${sections[id]}`);
    tabEls.forEach(tabEl => {
      tabEl.style.color = id === sectionId ? 'red' : 'black';
      tabEl.style.fontWeight = id === sectionId ? 'bold' : 'normal';
    });
  });

  if (Menutab) Menutab.classList.remove('active');
}

Object.keys(sections).forEach(id => {
  window[`To${id}`] = () => showSection(id);
});

if (Menuicon && Menutab) {
  Menuicon.addEventListener('click', () => {
    Menutab.classList.toggle('active');
  });
}

window.batsu = () => {
  if (Menutab) Menutab.classList.remove('active');
};