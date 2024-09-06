let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

const boxe = document.querySelector('.boxes');
const button = document.getElementById('btn');
const point = document.querySelector('.points');

function renderBoxes() {
    for (let i = 0; i < colors.length; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.background = colors[i];
        boxe.appendChild(box);
        if (point.innerHTML === "") {
            point.innerHTML = 0;
        }
        point.innerHTML = parseInt(point.innerHTML) + 1;
        box.addEventListener('click', function () {
            boxe.removeChild(box);
            point.innerHTML = parseInt(point.innerHTML) - 1;
        })
    }
}
renderBoxes();

button.onclick = function () {
    renderBoxes();
}