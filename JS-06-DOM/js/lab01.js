const ul = document.getElementById('list');

//1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const newLi = ['Item 8', 'Item 9', 'Item 10'];
for (let i = 0; i < newLi.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = newLi[i];
    ul.appendChild(li);
}

//Dùng jquery
// $(document).ready(function () { // Chời đợi HTML load xong
//     //const ul = document.getElementById('list');
//     const ul = $("#list");
//     ul.append("<li>Item 8</li>")
// })

//2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
document.querySelector("#list li:nth-child(1)").style.color = 'red';

//3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
document.querySelector("#list li:nth-child(3)").style.backgroundColor = 'green';

//4. Remove thẻ <li> 4
let li4 = document.querySelector("#list li:nth-child(4)");
ul.removeChild(li4);

//5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let liNew = document.createElement('li');
liNew.innerHTML = 'Thẻ mới';
let li5 = document.querySelector("#list li:nth-child(4)");
ul.insertBefore(liNew, li5);
//6. Thêm 1 nút “add” + 1 ô input để nhập text. Mỗi khi bấm nút thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách
const input = document.createElement('input');
input.placeholder = 'Thêm item...';
document.body.appendChild(input);

const button = document.createElement('button');
button.innerText = 'add';
document.body.appendChild(button);

button.addEventListener('click', function () {
    let value = input.value;
    if (value == '') {
        alert('Nội dung không được để trống!')
        return;
    }
    const newLi02 = document.createElement('li');
    newLi02.innerHTML = value;
    ul.appendChild(newLi02);
    input.value = '';
})

//7. Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách
const removeBtn = document.createElement('button');
removeBtn.innerText = 'remove';
document.body.appendChild(removeBtn);

removeBtn.addEventListener('click', function () {
    let liLast = document.querySelector('#list li:last-child');
    if (liLast) {
        ul.removeChild(liLast);
    }
    return;
})

//8. Thêm 1 nút “Hide” trên đầu của danh sách <ul>.
// Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”
// Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”

const btnHide = document.createElement('button');
btnHide.innerText = 'Hide';
document.body.insertBefore(btnHide, ul);

btnHide.addEventListener('click', function () {
    ul.classList.toggle('hide');
    if (ul.classList.contains('hide')) {
        btnHide.innerText = 'Show';
    } else {
        btnHide.innerText = 'Hide';
    }
})