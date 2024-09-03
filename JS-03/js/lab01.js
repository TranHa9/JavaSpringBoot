//1
const heading = document.getElementById('heading');
heading.style.color = 'red';
heading.style.textTransform = 'uppercase';

//2
const paras = document.getElementsByClassName('para');
Array.from(paras).map(function (ele) {
    ele.style.color = 'blue';
    ele.style.fontSize = '20px';
})

//3
const para3 = document.querySelector('.para-3');
const link = document.createElement('a');
link.href = 'https://facebook.com';
link.innerHTML = 'Facebook';
para3.insertAdjacentElement("afterend", link);

//4
const title = document.getElementById('title');
title.innerHTML = 'Đây là thẻ tiêu đề';

//5
const description = document.querySelector('.description');
description.classList.add('text-bold');

//6
const button = document.createElement('button');
button.innerHTML = 'Click me';
para3.replaceWith(button);

//7
const para2 = document.querySelector('.para-2');
const para2Clone = para2.cloneNode(true);
para2.insertAdjacentElement("afterend", para2Clone);

//8
const para1 = document.querySelector('.para-1');
para1.remove();