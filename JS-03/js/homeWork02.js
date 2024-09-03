//1. Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn (background = “yellow”)
const para = document.querySelector('p');
const text = para.textContent;

para.innerHTML = text.split(" ").map(function (item) {
    if (item.length >= 5) {
        return `<span style="background-color: yellow;">${item}</span>`
    } else {
        return item
    }
}).join(" ");

//2. Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const link = document.createElement('a');
link.href = 'https://facebook.com';
link.innerHTML = 'Facebook';
para.insertAdjacentElement("afterend", link);

//3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const textCount = text.split(" ").length;
const textCountDiv = document.createElement("div");
textCountDiv.innerHTML = `Số từ trong đoạn văn là : ${textCount}`;
link.insertAdjacentElement("afterend", textCountDiv);

//4. Thay thế ký hiệu (, - dấu phẩy) => 🤔 và (. - dấu chấm) => 😲
const updateText = text.replace(/\,/g, "🤔").replace(/\./g, "😲");
para.innerHTML = updateText.split(" ").map(function (item) {
    if (item.length >= 5) {
        return `<span style="background-color: yellow;">${item}</span>`
    } else {
        return item
    }
}).join(" ");