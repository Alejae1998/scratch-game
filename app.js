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

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
