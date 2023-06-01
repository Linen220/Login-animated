const title = document.querySelector('.title');
const curved= document.querySelector('.curved');
const bgColor= document.querySelector('.bg-color');

title.addEventListener('click', ()=> {
    bgColor.classList.add('active');
    console.log('hola');
});