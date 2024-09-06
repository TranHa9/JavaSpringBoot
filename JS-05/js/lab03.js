const counter = document.getElementById('counter');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

nextBtn.onclick = function () {
    //console.log(typeof counter.innerText);
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    colorCounter();
}

prevBtn.onclick = function () {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    colorCounter();
}
function colorCounter() {
    if (counter.innerText > 0) {
        counter.style.color = 'green';
    } else if (counter.innerText < 0) {
        counter.style.color = 'red';
    } else {
        counter.style.color = '#333333';
    }
}
