const toggle_btn = document.querySelector('.toggle');
const open = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-xmark');
const menu = document.querySelector('.nav-manu');

toggle_btn.addEventListener('click',()=>
{
    if(!menu.classList.contains('active'))
    {
        open.style.display = 'none';
        close.style.display = 'block';
    }
    else{
        open.style.display = 'block';
        close.style.display = 'none';
    }
    menu.classList.toggle('active');
})