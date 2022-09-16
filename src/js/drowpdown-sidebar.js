const chevronBtn = document.querySelectorAll('.chevron-btn');
chevronBtn.forEach((item) => {
  if (chevronBtn.length) {
    item.addEventListener('click', (e) => {
      const chevronParent = e.target.parentElement.parentElement;
      console.log(chevronParent);
      chevronParent.classList.toggle('show-menu');
    });
  }
});
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

const sidebarBtn = document.querySelector('.nav__menu-btn');
sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('close');
  content.classList.toggle('close');
});
