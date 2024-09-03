//Câu 1
const para = document.getElementById("text");
para.style.color = "#777";
para.style.fontSize = "2rem";
para.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."

//Câu 2:
const list = document.getElementsByTagName('li')
for (let i = 0; i < list.length; i++) {
    list[i].style.color = 'blue';
}

//Câu 3:
//Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const list1 = document.getElementById('list');
const itemNew = ['Item 8', 'Item 9', 'Item 10'];
for (let i = 0; i < itemNew.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = itemNew[i];
    list1.appendChild(li);
}
//Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = document.querySelector('#list li:nth-child(1)');
li1.style.color = 'red';

//Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector('#list li:nth-child(3)');
li3.style.backgroundColor = 'green';

//Remove thẻ <li> 4
const li4 = document.querySelector('#list li:nth-child(4)');
li4.remove();

//Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const li4New = document.createElement('li');
li4New.innerHTML = "Thẻ li mới";
li3.insertAdjacentElement("afterend", li4New);