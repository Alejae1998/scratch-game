export function renderBerries() {
    const div = document.createElement('div');
    div.classList.add('berries');

    return div;
}

export function renderGrass() {
    const div = document.createElement('div');
    div.classList.add('grass');
}

export function renderCow(cow) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');

    div.classList.add('cow');
    nameEl.classList.add('name');
    emojiEl.classList.add('emoji');

    nameEl.textContent = cow.name;

    if (cow.starving === 1) {
        emojiEl.textContent = '🐮';
    }

    if (cow.starving === 2) {
        emojiEl.textContent = '🐄';
    }

    if (cow.starving === 3) {
        emojiEl.textContent = '💚';
    }
}
