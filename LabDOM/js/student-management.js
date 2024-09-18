$(document).ready(function () {

    let data = [
        {
            "id": 1,
            "name": "Demo",
            "birthday": "21/11/2004",
            "phone": "0123456789",
            "hometown": "Hà Nội"
        },
        {
            "id": 2,
            "name": "Demo02",
            "birthday": "21/11/2004",
            "phone": "0123456789",
            "hometown": "Hà Nội"
        },
    ];

    //Hàm tự động tạo id
    function createId() {
        if (data.length === 0) {
            return 1;
        }
        let id = Math.max(...data.map(item => item.id)) + 1;
        return id;
    }

    function renderData() {

        $("tbody").empty();

        data.forEach(element => {
            // Thêm vào bảng 1 dòng mới
            const newRow = `
                <tr>
                    <td  class="checkbox-col"><input type="checkbox" value =${element.id} /></td>
                    <td>${element.name}</td>
                    <td>${element.birthday}</td>
                    <td>${element.phone}</td>
                    <td>${element.hometown}</td>
                </tr>
            `;

            $("tbody").append(newRow);
        });
        $("input[type='checkbox']").change(function () {
            checkboxChange(this);
        });
    }
    renderData();

    let editData = null;

    //Thêm sự kiện cho nút save
    $("#save-btn").click(function () {
        // lấy tất cả dữ liệu được người dùng nhập ở các ô input
        const name = $("#name").val();
        const dob = $("#dob").val();
        const phone = $("#phone").val();
        const hometown = $("#home-town").val();

        // validate dữ liệu
        const error = validateData(name, dob, phone, hometown);
        if (error) {
            return;
        }
        const dobDate = new Date(dob);
        const day = String(dobDate.getDate()).padStart(2, '0');
        const month = String(dobDate.getMonth() + 1).padStart(2, '0');
        const year = dobDate.getFullYear();
        const formattedDob = `${day}/${month}/${year}`;
        //Nếu không có editData thì thêm mới
        if (!editData) {
            const newData = {
                id: createId(),
                name: name,
                birthday: formattedDob,
                phone: phone,
                hometown: hometown
            };
            data.push(newData);
            alert('Thêm mới thành công!')
        } else {
            editData.name = name;
            editData.birthday = formattedDob;
            editData.phone = phone;
            editData.hometown = hometown;
            alert('Cập nhật thành công!')
        }
        renderData();
        resetForm();
    });

    // thêm sự kiện cho nút reset
    $("#reset-btn").click(function () {
        resetForm();
    })


    function checkboxChange(checkbox) {
        const checkedCount = $("input[type='checkbox']:checked").length;
        if (checkedCount > 1) {
            alert("Bạn chỉ được sửa thông tin của 1 sinh viên");
            $(checkbox).prop('checked', false);
        } else if (checkedCount === 1) {
            //Mở nút
            $('#delete-btn').prop('disabled', false);
            $('#edit-btn').prop('disabled', false);

            //Thêm sự kiện cho nút sửa
            $('#edit-btn').click(function () {
                editStudent($("input[type='checkbox']:checked").val())
            });

            //Thêm sự kiện cho nút xóa
            $('#delete-btn').click(function () {
                deleteStudent($("input[type='checkbox']:checked").val());
            });
        } else {
            resetForm();
        }
    }

    //Lấy giá trị muốn sửa lên form
    function editStudent(id) {
        const selectedData = data.find(function (item) {
            return item.id === parseInt(id);
        });
        $("#name").val(selectedData.name);
        $("#phone").val(selectedData.phone);
        let formatDate = selectedData.birthday.split("/").reverse().join("-");
        $("#dob").val(formatDate);
        $("#home-town").val(selectedData.hometown);
        editData = selectedData;
    }

    function deleteStudent(id) {
        const isDelete = confirm("Bạn có chắc chắn muốn xóa sinh viên đang chọn?");
        if (!isDelete) return;
        const index = data.findIndex(function (item) {
            return item.id === parseInt(id);
        });
        if (index !== -1) {
            data.splice(index, 1);
            renderData(data);
        }

    }

    function validateData(name, dob, phone, hometown) {
        let error = false;
        if (!name || name?.trim() === "") {
            $(".form-group:nth-child(1) .error").removeClass("d-none");
            $(".form-group:nth-child(1) .error").text("Tên bắt buộc nhập")
            error = true;
        }
        if (name?.trim()?.length > 10) {
            $(".form-group:nth-child(1) .error").removeClass("d-none");
            $(".form-group:nth-child(1) .error").text("Tên không được quá 100 ký tự")
            error = true;
        }
        if (!dob || dob?.trim() === "") {
            $(".form-group:nth-child(2) .error").removeClass("d-none");
            $(".form-group:nth-child(2) .error").text("Ngày sinh bắt buộc nhập")
            error = true;
        }
        const phoneRegex = /^0\d{9}$/;
        if (!phone || phone?.trim() === "") {
            $(".form-group:nth-child(3) .error").removeClass("d-none");
            $(".form-group:nth-child(3) .error").text("SĐT sinh bắt buộc nhập")
            error = true;
        } else
            if (!phoneRegex.test(phone?.trim())) {
                $(".form-group:nth-child(3) .error").removeClass("d-none");
                $(".form-group:nth-child(3) .error").text("SĐT bắt đầu từ số 0 và có 10 chữ số")
                error = true;
            }
        if (!hometown || hometown?.trim() === "") {
            $(".form-group:nth-child(4) .error").removeClass("d-none");
            $(".form-group:nth-child(4) .error").text("Quê quán bắt buộc nhập")
            error = true;
        }
        return error;
    }

    function resetForm() {
        $(".form-group:nth-child(1) .error").addClass("d-none");
        $(".form-group:nth-child(2) .error").addClass("d-none");
        $(".form-group:nth-child(3) .error").addClass("d-none");
        $(".form-group:nth-child(4) .error").addClass("d-none");
        $("#name").val('');
        $("#dob").val('');
        $("#phone").val('');
        $("#home-town").val('');
        $('#delete-btn').prop('disabled', true);
        $('#edit-btn').prop('disabled', true);
    }

});