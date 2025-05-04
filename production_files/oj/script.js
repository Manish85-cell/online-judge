// document.querySelector('form').addEventListener('submit', function() {
//     document.getElementById('input_data').value = document.getElementById('input_data_visible').value;
// });
// function showSection(sectionId) {
//     document.querySelectorAll('.input-section, .test-cases').forEach(function(section) {
//         section.classList.remove('active-section');
//     });
//     document.getElementById(sectionId).classList.add('active-section');
// }
// document.getElementById("input").style.display = 'none';

function showSection(section, close){
         document.getElementById(section).style.display='block';
         document.getElementById(close).style.display='none';
}



// const themeSwitch = document.getElementById('theme-switch');
// const body = document.body;

// themeSwitch.addEventListener('change', () => {
//   body.classList.toggle('light-theme');
//   body.classList.toggle('dark-theme');
// });

// Set initial theme based on system preference
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   body.classList.add('dark-theme');
//   themeSwitch.checked = true;
// } else {
//   body.classList.add('light-theme');
// }


// feather.replace(); 

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');

  // Load the active state from localStorage
  const activeItemId = localStorage.getItem('activeNavItem');
  if (activeItemId) {
      const activeItem = document.querySelector(`.nav-item[data-id="${activeItemId}"]`);
      if (activeItem) {
          activeItem.classList.add('active');
      }
  }

  navItems.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default action

          navItems.forEach(item => {
              item.classList.remove('active'); // Remove active class from all items
          });

          const targetItem = event.target.closest('.nav-item');
          if (targetItem) {
              targetItem.classList.add('active'); // Add active class to clicked item

              // Store the active state in localStorage
              localStorage.setItem('activeNavItem', targetItem.getAttribute('data-id'));

              // Redirect manually using the URL from data-url attribute
              window.location.href = targetItem.querySelector('a').getAttribute('data-url');
          }
      });
  });
});


let body = document.querySelector('body')
document.querySelector('#dark').addEventListener('click', function(){
    body.style.backgroundColor = '';
})
document.querySelector('#light').addEventListener('click', function(){
    body.style.backgroundColor = '';
})