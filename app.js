import { renderJerry } from './utils.js';
const defeatedNumber = document.querySelector('#defeated-number');
const catHPEl = document.querySelector('#farmer-hp');
const catImg = document.querySelector('#tom-img');
const form = document.querySelector('#mouse-form');
const mouseListEl = document.querySelector('.toms');

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

function displayMice() {
    mouseListEl.textContent = '';
    for (let data of miceData) {
        const miceEl = renderJerry(data);

        miceEl.addEventListener('click', () => {
            miceClickHandler(data);
        });
        mouseListEl.append(miceEl);
    }
}

function miceClickHandler(mice) {
    if (mice.hp === 0) return;
    if (playerHp === 0) return;
    const tomHit = Math.random();
    if (tomHit < 0.5) {
        mice.hp--;
        displayMice();
        alert(`You have trapped ${mice.name}!`);
        if (mice.hp === 0) {
            defeatedMiceCount++;
            defeatedNumber.textContent = defeatedMiceCount;
        }
    } else {
        alert(`you tried to trapped ${mice.name}, but he was faster than you!`);
    }

    const miceHit = Math.random();
    if (miceHit < 0.5) {
        playerHp--;
        catHPEl.textContent = playerHp;
        alert(`${mice.name} has trapped you!`);
        if (playerHp === 0) {
            alert('GAME OVER');
        }
    } else {
        alert(`hurry ${mice.name} trapped you`);
    }
}

displayMice();
