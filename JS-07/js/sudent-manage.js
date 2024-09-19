$(document).ready(function () {
    data = [];
    editId = null;

    initDataAJAX();
    function initDataAJAX() {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:3000/students");

        xhttp.send();

        xhttp.onload = function () {
            data = JSON.parse(this.responseText);
            rendeStudent();
        }
    }

    function rendeStudent() {
        if (!data || data?.length === 0) {
            $("tbody").append("<p>Dữ liệu trống!</p>")
            return;
        }
        $("tbody").empty();
        data.forEach(element => {
            newData = `
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.birthday}</td>
                        <td>${element.phone}</td>
                        <td>${element.hometown}</td>
                        <td>
                            <button type="button" class="edit" item-id="${element.id}">Edit</button>
                            <button type="button" class="delete" item-id="${element.id}">Delete</button>
                        </td>
                    </tr>
                `;
            $("tbody").append(newData);
        });
        $(".edit").click(function (event) {
            const studentId = $(event.currentTarget).attr("item-id");
            const student = data.find(function (item) {
                return item.id === studentId;
            })
            editId = studentId;
            if (!student || student?.length === 0) {
                return;
            }
            $("#name").val(student.name);
            const format = student.birthday.split("/").reverse().join("-");
            $("#birthday").val(format);
            $("#phone").val(student.phone);
            $("#hometown").val(student.hometown);
        })

        $(".delete").click(function (event) {
            const isDelete = confirm("Bạn có chắc chắn muốn xóa không?")
            if (!isDelete) {
                return;
            }
            const studentId = $(event.currentTarget).attr("item-id");
            editId = studentId
            deleteStudent();
        })
    }
    //Hàm tự động tạo id
    function createId() {
        if (data.length === 0) {
            return 1;
        }
        let id = Math.max(...data.map(item => item.id)) + 1;
        return id + "";
    }

    $(".save").click(function () {
        const name = $("#name").val();
        const dob = $("#birthday").val();
        const phone = $("#phone").val();
        const hometown = $("#hometown").val();
        const error = validateData(name, dob, phone, hometown);
        if (error) {
            return;
        }
        const dobDate = new Date(dob);
        const day = String(dobDate.getDate()).padStart(2, '0');
        const month = String(dobDate.getMonth() + 1).padStart(2, '0');
        const year = dobDate.getFullYear();
        const formattedDob = `${day}/${month}/${year}`;
        if (!editId) {
            createNewStudent({
                id: createId(),
                name: name,
                birthday: formattedDob,
                phone: phone,
                hometown: hometown
            });
        } else {
            updateStudent({
                name: name,
                birthday: formattedDob,
                phone: phone,
                hometown: hometown
            })
        }

    })

    $(".reset").click(function () {
        reset();
    })

    function createNewStudent(student) {
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3000/students");
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhttp.send(JSON.stringify(student));

        xhttp.onload = function () {
            location.reload();
            alert('Thêm mới thành công!');
            reset();
        }
    }

    function updateStudent(student) {
        const xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://localhost:3000/students/" + editId);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhttp.send(JSON.stringify(student));
        xhttp.onload = function () {
            location.reload();
            alert('Cập nhật thành công!')
            reset();
        }
    }

    function deleteStudent() {
        const xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", "http://localhost:3000/students/" + editId);

        xhttp.send();

        xhttp.onload = function () {
            location.reload();
        }

    }

    function reset() {
        $(".error-name").addClass("d-none");
        $(".error-birthday").addClass("d-none");
        $(".error-phone").addClass("d-none");
        $(".error-hometown").addClass("d-none");
        $("#name").val('');
        $("#birthday").val('');
        $("#phone").val('');
        $("#hometown").val('');
    }
    function validateData(name, dob, phone, hometown) {
        let error = false;
        if (!name || name?.trim() === "") {
            $(".error-name").removeClass("d-none");
            $(".error-name").text("Tên bắt buộc nhập")
            error = true;
        }
        if (name?.trim()?.length > 100) {
            $(".error-name").removeClass("d-none");
            $(".error-name").text("Tên không được quá 100 ký tự")
            error = true;
        }
        if (!dob || dob?.trim() === "") {
            $(".error-birthday").removeClass("d-none");
            $(".error-birthday").text("Ngày sinh bắt buộc nhập")
            error = true;
        }
        const phoneRegex = /^0\d{9}$/;
        if (!phone || phone?.trim() === "") {
            $(".error-phone").removeClass("d-none");
            $(".error-phone").text("SĐT sinh bắt buộc nhập")
            error = true;
        } else
            if (!phoneRegex.test(phone?.trim())) {
                $(".error-phone").removeClass("d-none");
                $(".error-phone").text("SĐT bắt đầu từ số 0 và có 10 chữ số")
                error = true;
            }
        if (!hometown || hometown?.trim() === "") {
            $(".error-hometown").removeClass("d-none");
            $(".error-hometown").text("Quê quán bắt buộc nhập")
            error = true;
        }
        return error;
    }
});