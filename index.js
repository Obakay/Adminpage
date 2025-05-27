 
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar')
const closeBtn = document.querySelector('#close_btn');


const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = "block";
});
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none";
});

themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active'); 
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    
}) 

// document.addEventListener('DOMContentLoaded', function() {
//     const themeToggle = document.getElementById('theme-toggle'); // Select your button
//     const body = document.body;

//     // Renamed from darkMode to themeToggle for clarity, as it's the toggle button
//     const lightIcon = themeToggle.querySelector('.light-icon');
//     const darkIcon = themeToggle.querySelector('.dark-icon');

//     // Function to apply the theme and update UI
//     function applyTheme(theme) {
//         if (theme === 'dark') {
//             body.classList.add('dark-theme-variables'); // Your class name
//             themeToggle.classList.add('dark-mode-active'); // For button animation
//             lightIcon.classList.remove('active'); // Adjust icon visibility
//             darkIcon.classList.add('active'); // Adjust icon visibility
//             themeToggle.setAttribute('aria-checked', 'true');
//             themeToggle.setAttribute('aria-label', 'Toggle light mode');
//         } else {
//             body.classList.remove('dark-theme-variables');
//             themeToggle.classList.remove('dark-mode-active');
//             lightIcon.classList.add('active'); // Adjust icon visibility
//             darkIcon.classList.remove('active'); // Adjust icon visibility
//             themeToggle.setAttribute('aria-checked', 'false');
//             themeToggle.setAttribute('aria-label', 'Toggle dark mode');
//         }
//     }

//     // Function to get the current theme preference (from previous answer)
//     function getPreferredTheme() {
//         const storedTheme = localStorage.getItem('theme');
//         if (storedTheme) {
//             return storedTheme;
//         }
//         if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//             return 'dark';
//         }
//         return 'light';
//     }

//     // Apply theme on page load
//     const initialTheme = getPreferredTheme();
//     applyTheme(initialTheme);

//     // Your snippet's click listener, enhanced
//     themeToggle.addEventListener('click', function() {
//         const currentTheme = body.classList.contains('dark-theme-variables') ? 'dark' : 'light';
//         const newTheme = currentTheme === 'light' ? 'dark' : 'light';

//         applyTheme(newTheme);
//         localStorage.setItem('theme', newTheme); // Save preference
//     });

//     // Optional: Listen for system theme changes (from previous answer)
//     if (window.matchMedia) {
//         window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
//             if (!localStorage.getItem('theme')) { // Only apply if user hasn't set explicit preference
//                 applyTheme(e.matches ? 'dark' : 'light');
//             }
//         });
//     }
// });

// $('#menu_bar').click(function(){
//     $('#menu').toggleClass("active");
// })
 