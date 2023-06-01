const title = document.querySelector('.title');
const curved= document.querySelector('.curved');
const bgColor= document.querySelector('.bg-color');

title.addEventListener('click', ()=> {
    bgColor.classList.add('active');
    // Realza un tiempo fuera, un break para que ejecute
    // una accicón, osea ejecutar lo que esta dentro de la
    // función anonima
    // Recibe 2 parametros: una función y un numero
    // que representa el tiempo en milisegundos
    setTimeout(function() {
        bgColor.classList.remove('active');
    }, 1200);

    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    bgColor.style.background = hexColor;
    curved.style.background = hexColor;

    function getRandomNumber() {
        return Math.floor(Math.random()*hex.length);   
    }
});