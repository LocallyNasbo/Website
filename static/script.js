// 1. matches buttons
document.addEventListener('DOMContentLoaded', () => {
const tabs = ['aboutme', 'gimmicks', 'comforts', 'article'];
let currentIndex = 0;
const switchTab = (newIndex) => {
if (newIndex === currentIndex) return;
const direction = newIndex > currentIndex ? 'slide-left' : 'slide-right';
currentIndex = newIndex;

tabs.forEach((tabId, i) => {
const btn = document.getElementById(`${tabId}-btn`);
const pge = document.getElementById(`${tabId}-pge`);
if (btn && pge) {
 if (i === newIndex) {
 btn.classList.add('active');
 pge.classList.remove('hide');
 pge.classList.remove('slide-left', 'slide-right');
 void pge.offsetWidth; 
 pge.classList.add(direction);
} else {
btn.classList.remove('active');
pge.classList.add('hide');
pge.classList.remove('slide-left', 'slide-right');
        }
      }
    });
  };
  tabs.forEach((tabId, index) => {
  const btn = document.getElementById(`${tabId}-btn`);
  if (btn) btn.addEventListener('click', () => switchTab(index));
  });
  });