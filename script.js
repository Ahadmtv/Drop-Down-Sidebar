const arrows=document.querySelectorAll('.arrow');
const btn=document.querySelector('.container i');
const menu=document.querySelector('.menu');
const dropLeft=document.querySelector('.dropLeft');
const account=document.querySelector('.account');
const logo=document.querySelector('.logo-details');
btn.addEventListener('click',(e)=>{
menu.classList.toggle('close');
dropLeft.classList.toggle('come');
account.classList.toggle('less');
logo.classList.toggle('small');
})
arrows.forEach((arrow)=>{
    arrow.addEventListener('click',(e)=>{
        const submenu=e.target.parentElement.parentElement;
        submenu.classList.toggle('hidden');
    })
});
