let closemodal = document.querySelector ('.closemodal');
let openmodal = document.querySelector ('.buionclick');
let modal = document.querySelector ('.modalproba');


openmodal.addEventListener('click', function () {
    modal.style.display = 'block';
});
closemodal.addEventListener('click', function (){
     modal.style.display = 'none';   
});

// Скрипт для замены картинок в товарах
let oneimg = document.querySelector ('.boximg');
let twoimg = document.querySelector ('.box1');
let imgcentral1 = document.querySelector ('.centralimg1');
let imgcentral2 = document.querySelector ('.probaimg1');

twoimg.addEventListener('click', function(){
    imgcentral1.style.display = 'none';
    imgcentral2.style.display = 'block';
})
oneimg.addEventListener('click', function(){
    imgcentral1.style.display = 'block';
    imgcentral2.style.display = 'none';
})

