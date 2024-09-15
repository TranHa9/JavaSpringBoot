let data = [];
async function fetchData() {
    const response = await fetch('student.json');
    const dataStudent = await response.json();
    data = dataStudent;
    renderData(data);
}
fetchData();

const table = document.getElementById('table');
const username = document.getElementById('username');
const birthday = document.getElementById('birthday');
const phone = document.getElementById('phone');
const hometown = document.getElementById('hometown');
const edit = document.querySelector('.edit');
const reset = document.querySelector('.reset')
const save = document.querySelector('.save')
const deleteData = document.querySelector('.delete')

function renderData(data) {
    table.innerHTML = `
         <tr>
            <th></th>
            <th>Name</th>
            <th>Birthday</th>
            <th>Mobile phone</th>
            <th>Hometown</th>
        </tr>
    `;
    let selectedCount = 0;
    data.forEach(ele => {
        let student = document.createElement('tr');
        let tdCheckbox = document.createElement('td');
        let name = document.createElement('td');
        let birthday = document.createElement('td');
        let phone = document.createElement('td');
        let hometown = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = ele.id;
        checkbox.classList.add('checkbox')

        tdCheckbox.appendChild(checkbox);

        name.innerText = ele.name;
        birthday.innerText = ele.birthday;
        phone.innerText = ele.phone;
        hometown.innerText = ele.hometown;

        student.appendChild(tdCheckbox);
        student.appendChild(name);
        student.appendChild(birthday);
        student.appendChild(phone);
        student.appendChild(hometown);
        table.appendChild(student);

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                selectedCount++;
            } else {
                selectedCount--;
            }
            if (selectedCount > 1) {
                alert("Bạn chỉ được sửa thông tin của 1 sinh viên");
                this.checked = false;
                selectedCount--;
                return;
            }
            if (!this.checked) {
                resetForm();
                edit.disabled = true;
                deleteData.disabled = true;
            } else {
                selectCheckBox(checkbox);
            }
        });
    });
}
renderData(data);

function selectCheckBox(checkbox) {
    const tr = checkbox.closest('tr');
    const td = tr.querySelectorAll('td');
    const inputCheckbox = td[0].querySelector('input');
    const studentData = {
        id: inputCheckbox.value,
        name: td[1].innerText,
        birthday: td[2].innerText,
        phone: td[3].innerText,
        hometown: td[4].innerText
    };
    edit.disabled = false;
    deleteData.disabled = false;
    edit.addEventListener('click', function () {
        getStudentForm(studentData);
    });
    deleteData.addEventListener('click', function () {
        deleteStudent(checkbox.value);
    });
}

function getStudentForm(data) {
    username.value = data.name;
    phone.value = data.phone
    hometown.value = data.hometown
    let newdate = data.birthday.split("/").reverse().join("-");
    birthday.value = newdate;
    editStudent(data.id);
}

reset.addEventListener('click', function () {
    resetForm();
})

function createId() {
    if (data.length === 0) {
        return 1;
    }
    let id = Math.max(...data.map(item => item.id)) + 1;
    return id;
}

let dataEdit = null;
function editStudent(id) {
    const student = data.find(item => item.id === parseInt(id));
    dataEdit = student;
};

save.addEventListener('click', function () {
    if (!validate()) {
        return;
    } else if (dataEdit) {
        console.log('abc')
        dataEdit.name = username.value.trim();
        dataEdit.birthday = birthday.value;
        dataEdit.phone = phone.value.trim();
        dataEdit.hometown = hometown.value.trim();
        renderData(data);
        resetForm();
        alert('Cập nhật thành công!')
    } else {
        const newData = {
            id: createId(),
            name: username.value.trim(),
            birthday: birthday.value,
            phone: phone.value.trim(),
            hometown: hometown.value.trim()
        };
        console.log(newData)
        data.push(newData);
        renderData(data);
        resetForm();
        alert('Thêm thành công!');
    }
})

function deleteStudent(id) {
    const isDelete = confirm("Bạn có chắc chắn muốn xóa không?");
    if (!isDelete) return;
    const index = data.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
        data.splice(index, 1);
        renderData(data);
    }
};
function resetForm() {
    username.value = '';
    phone.value = '';
    hometown.value = '';
    birthday.value = '';
    clearErrors();
    dataEdit = null;
    edit.disabled = true;
    deleteData.disabled = true;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}
function validate() {
    clearErrors();
    errors = [];
    if (username.value.trim() === '') {
        errors.push('Tên không được trống');
        const err = document.createElement('span');
        err.style.color = 'red';
        err.innerHTML = 'Tên không được trống';
        username.insertAdjacentElement('afterend', err);
    }
    if (birthday.value.trim() === '') {
        errors.push('Ngày sinh không được trống');
        const err = document.createElement('span');
        err.style.color = 'red';
        err.innerHTML = 'Ngày sinh không được trống';
        birthday.insertAdjacentElement('afterend', err);
    }
    const regex = /^\d{10}$/;
    if (phone.value.trim() === '') {
        errors.push('Số điện thoại không được trống');
        const err = document.createElement('span');
        err.style.color = 'red';
        err.innerHTML = 'Số điện thoại không được trống';
        phone.insertAdjacentElement('afterend', err);
    } else if (!regex.test(phone.value.trim())) {
        errors.push('Số điện thoại phải 10 chữ số');
        const err = document.createElement('span');
        err.style.color = 'red';
        err.innerHTML = 'Số điện thoại phải 10 chữ số';
        phone.insertAdjacentElement('afterend', err);
    }
    if (hometown.value.trim() === '') {
        errors.push('Quên quán không được trống');
        const err = document.createElement('span');
        err.style.color = 'red';
        err.innerHTML = 'Quên quán không được trống';
        hometown.insertAdjacentElement('afterend', err);
    }
    if (errors.length > 0) {
        return false;
    }
    return true;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('span');
    errorMessages.forEach(err => err.remove());
}
