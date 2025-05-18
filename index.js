
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_bar");
const closeBtn = document.querySelector("#close_btn");


const themeToggler = document.querySelector(".theme.toggler");

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = "block"
}) 
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none"
}) 

themeToggler.addEventListener('click', ()=>
{
    document.body.classList.toggle('dark-theme-variables');

    const firstSpan = themeToggler.querySelector('span:nth-child(1)');
    const secondSpan = themeToggler.querySelector('span:nth-child(2)');
    firstSpan.classList.toggle('active');
    secondSpan.classList.toggle('active');
});

// $('#menu_bar').click(function(){
//     $('#menu').toggleClass("active");
// })
 