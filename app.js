import { renderJerry } from './utils.js';
const defeatedNumber = document.querySelector('#defeated-number');
const catHPEl = document.querySelector('#farmer-hp');
const catImg = document.querySelector('#tom-img');
const form = document.querySelector('#mouse-form');
const mouseListEl = document.querySelector('#toms');

// let state
let defeatedMiceCount = 0;
let playerHp = 10;
let miceData = [
    { id: 1, name: 'cacao', hp: 1 },
    { id: 2, name: 'honey', hp: 3 },
    { id: 3, name: 'Fluffy', hp: 2 },
];
let currentId = 3;

//form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const mouseDatas = new FormData(form);
    const mouseName = mouseDatas.get('mouse-name');

    const newMouse = {
        id: currentId,
        name: mouseName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;

    miceData.push(newMouse);

    displayMice();
});
