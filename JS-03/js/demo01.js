const elements = document.getElementsByClassName('container');
// console.log(elements)
// elements[0].style.color = 'red';
// elements[1].style.color = 'blue';

//Hàm này chỉ trả ra 1 phần tử duy nhất nếu không tìm được trả ra null
const element = document.getElementById("div-1");
// console.log(element)
// element.style.border = '1px solid red'
// element.style.borderRadius = '5px'

const allPara = document.getElementsByTagName('p');
// console.log(para);

const para = document.querySelector("p:nth-child(3)");
// console.log(para);