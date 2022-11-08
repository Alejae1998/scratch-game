export function renderJerry(mouseData) {
    const mouseEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    mouseEl.classList.add('mouse');

    nameEl.textContent = mouseData.name;
    hpEl.id = `mouse-hp-${mouseData.id}`;
    hpEl.textContent = mouseData.hp < 0 ? 0 : mouseData.hp;

    faceEl.id = `mouse-face-${mouseData.id}`;
    faceEl.textContent = mouseData.hp > 0 ? '🐭' : '🪤';
    if (mouseData.hp < 0) {
        mouseEl.classList.add('trapped');
    }

    mouseEl.append(nameEl, faceEl, hpEl);
    return mouseEl;
}
