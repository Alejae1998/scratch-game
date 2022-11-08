/* Imports */
import { renderBerries, renderGrass, renderCow } from './utils.js';
/* Get DOM Elements */
const cowsEl = document.querySelector('.cow');
const cowInputEl = document.getElementById('cow-name');
const berriesEl = document.querySelector('.berries');
const grassEl = document.querySelector('.grass');
const addBerrieButton = document.getElementById('add-berrie-button');
const addGrassButton = document.getElementById('add-grass-button');
const addCow = document.getElementById('add-cow-button');

/* State */
let berriesCount = 3;
let grassCount = 3;

const cowData = [
    {
        name: 'Bessie',
        starving: '2',
    },
    {
        name: 'Clarabella',
        starving: '1',
    },
    {
        name: 'Magic',
        starving: '1',
    },
    {
        name: 'Snowflake',
        starving: '2',
    },
    {
        name: 'Sprinkles',
        starving: '2',
    },
];
/* Events */
addBerrieButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert(`you have fed a cow with berries!`);
        berriesCount++;
        displayBerries();
    }
});

/* Display Functions */
function displayBerries() {
    berriesEl.textContent = '';
    for (let i = 0; i < berriesCount; i++) {
        const berrieEl = renderBerries();
        berriesEl.append(berrieEl);
    }
}

function displayGrass() {
    for (let i = 0; i < grassCount; i++) {
        const grasssEl = renderGrass();

        grassEl.append(grasssEl);
    }
}

function displayCows() {
    cowsEl.textContent = '';

    for (let cow of cowData) {
        const cowEl = renderCow(cow);

        cowEl.addEventListener('click', () => {
            if (berriesCount > 0 && cow.starving < 3) {
                cow.starving++;
                berriesCount--;
                // displayCows();
                // displayBerries();
            } else if (grassCount > 0 && cow.starving < 3) {
                cow.starving++;
                grassCount--;
            }
            console.log(cow);
            displayCows();
            displayGrass();
            displayBerries();
        });
        cowsEl.append(cowEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)

displayBerries();
displayCows();
displayGrass();
