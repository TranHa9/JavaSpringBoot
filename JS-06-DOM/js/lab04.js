//1. Thêm label cho các trường username, password, confirm password (sử dụng thẻ label để thêm các tiêu đề tương ứng cho các ô input)
const inputName = document.getElementById('username');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');

const labelName = document.createElement('label');
labelName.innerText = 'Tên người dùng';
inputName.insertAdjacentElement('beforebegin', labelName);

const labelPassword = document.createElement('label');
labelPassword.innerText = 'Mật khẩu';
inputPassword.insertAdjacentElement('beforebegin', labelPassword);

const labelConfirmPassword = document.createElement('label');
labelConfirmPassword.innerText = 'Xác nhân mật khẩu';
inputConfirmPassword.insertAdjacentElement('beforebegin', labelConfirmPassword);


//2. Kiểm tra xem password và confirm pass có trùng nhau hay không
let valuePassword = '';
let valueConfirmPassword = '';
inputPassword.addEventListener('input', validate);
inputConfirmPassword.addEventListener('input', validate);

function validate() {
    let valuePassword = inputPassword.value.trim();
    let valueConfirmPassword = inputConfirmPassword.value.trim();

    let confirmPassword = document.querySelectorAll('.form-input')[2];
    let existingError = confirmPassword.querySelector('span');
    // Xóa thông báo lỗi cũ nếu có
    if (existingError) {
        existingError.remove();
    }
    if (valuePassword !== valueConfirmPassword) {
        let span = document.createElement('span');
        span.innerText = 'Mật khẩu bạn nhập không khớp!';
        span.style.color = 'red';
        confirmPassword.appendChild(span);
    }
}
//3. Đảm bảo nút ‘Đăng ký’ bị disable cho đến khi người dùng nhập dữ liệu hợp lệ vào tất cả các trường đầu vào.
// Sau khi nhập đầy đủ thì ‘Đăng ký’ được enable.
const btn = document.getElementById('btn');
btn.style.display = 'none';
function validateInputs() {
    const isUsernameValid = username.value.trim() !== '';
    const isPasswordValid = inputPassword.value.trim() !== '';
    const isConfirmPasswordValid = inputConfirmPassword.value.trim() !== '';
    const isPasswordsMatch = inputPassword.value.trim() === inputConfirmPassword.value.trim();

    if (isUsernameValid && isPasswordValid && isConfirmPasswordValid && isPasswordsMatch) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}
inputName.addEventListener('input', validateInputs);
inputPassword.addEventListener('input', validateInputs);
inputConfirmPassword.addEventListener('input', validateInputs);
//4. Khi user nhập đủ thông tin hợp lệ và bấm vào nút submit thì tạo 1 hộp thoại thông báo đăng ký thành công
btn.addEventListener('click', function (event) {
    event.preventDefault();
    alert('Đăng ký thành công!')
});