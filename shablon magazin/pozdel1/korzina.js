const produktsBtn = document.querySelector ('.bui');
const cartProductList = document.querySelector('.containertovarovjs');
const fullPrise = document.querySelector('.prais');
let prise = 0;

const randomId = () => {
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
};

const priseWithoutSpaces = (str) => {
    return str.replase(/\s/g, '');
}
const normalPrise = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

const generateCartProduct = (img, title, prise, id) => {
    return `
    <div class="containertovarovjs" data-id="${id}">
    <div class="box1proba qwer66"><img src="${img}"/></div>
    <div class="qwer66">${title}</div>
    <div class="qwer66">${prise}<p><s>5500</s></p></div>
    <div class="qwer66">5000</div>
    <div class="qwer66"><img src="delete.png"/></div>
    </div>
    `;
}
// produktsBtn.forEach(el => {
//     // el.closest('.tovarcontainer').setAttribute('data-id', randomId());
//     el.addEventListener('click', (e) => {
//         let proba = parent.querySelector('.stylestoimost').textContent;
//         console.log(proba);
//     });
// });

// let a = document.querySelector('.rty');
// produktsBtn.addEventListener('click', function() {
//     a.textContent = 'dfigvfdini';
// });