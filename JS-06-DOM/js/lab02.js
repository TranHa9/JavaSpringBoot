//1. Một tính năng mới vào gói Pro: ‘24/7 Phone support’
const ul01 = document.querySelector('#pro-plan ul');
const li = document.createElement('li');
li.innerText = "24/7 Phone support";
ul01.appendChild(li);

//2. Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)
const cards = document.querySelectorAll('.col-md-4');
const row = document.querySelector('.row');
//làm rỗng cha
row.innerHTML = '';
//Thêm lại con theo thứ tự yêu cầu
row.appendChild(cards[1]);
row.appendChild(cards[0]);

//3. Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’
const btnPro = document.querySelector('#pro-plan button');
btnPro.style.backgroundColor = '#0984e3';
btnPro.style.color = "#fff";
btnPro.innerText = "Buy Now";

//4. Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
const proStorage = document.querySelector('#pro-plan .storage-amount');
const basicStorage = document.querySelector('#basic-plan .storage-amount');

proStorage.innerText = proStorage.innerText * 1.25;
basicStorage.innerText = basicStorage.innerText * 1.5;