$(document).ready(function () {

    let currentId = -1;
    let data = [];
    let editingTaskId = null;

    initDataAJAX();

    function initDataAJAX() {
        data = [];
        editingTaskId = null;
        currentId = -1;
        // 1 - chuẩn bị 1 REQUEST (XMLHttpRequest)
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:3000/tasks"); // GET là phương thức để lấy dữ liệu

        // 2 - gửi REQUEST lên server
        xhttp.send();

        // 3 - Nhận lại kết quả khi server trả về (nhận lại repsonse)
        xhttp.onload = function () {
            // console.log(this.responseText);
            data = JSON.parse(this.responseText);
            getCurrentId();
            renderTable();
        }
    }

    function getCurrentId() {
        if (!data || data?.length === 0) {
            return;
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].id > parseInt(currentId)) {
                currentId = parseInt(data[i].id);
            }
        }
    }

    function renderTable() {
        if (!data || data?.length === 0) {
            return;
        }

        $('tobdy').find('tr').remove();

        for (let i = 0; i < data.length; i++) {
            const task = data[i];

            const newRow = `
                <tr>
                    <td>${task.id}</td>
                    <td>${task.name}</td>
                    <td class="action-col">
                        <button type="button" class="edit-btn" task-id="${task.id}">Edit</button>
                        <button type="button" class="delete-btn" task-id="${task.id}">Delete</button>
                    </td>
                </tr>
            `;

            $("tbody").append(newRow);
        }

        $(".edit-btn").click(function (event) {
            // console.log(event.currentTarget); 
            const taskId = $(event.currentTarget).attr("task-id");
            editingTaskId = taskId;
            const task = findTaskById(taskId);
            if (task === null) {
                alert("Không tìm thấy task");
                return;
            }
            $("#name").val(task.name);

        });

        $(".delete-btn").click(function (event) {
            const isDelete = confirm("Bạn có chắc chắn muốn xóa task này?");
            if (!isDelete) {
                return;
            }
            // console.log(event.currentTarget); 
            const taskId = $(event.currentTarget).attr("task-id");
            editingTaskId = taskId;
            handleDelete();
        });
    }

    $("#save-btn").click(function () {
        const taskName = $("#name").val();
        if (!taskName || taskName?.trim().length === 0) {
            alert("Tên task bắt buộc nhập");
            return;
        }

        // lưu lại -> gọi lên server để server lưu

        // check xem người dùng đang muốn tạo mới hay là muốn cập nhật???
        // => check bằng edittingTaskId

        if (editingTaskId === null) {// tạo mới
            createNewTask(taskName);
        } else { // cập nhật
            updateTask(taskName);
        }


    });

    function findTaskById(id) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id !== id) {
                continue;
            }
            return data[i];
        }
        return null;
    }

    function createNewTask(taskName) {
        // 1 - chuẩn bị 1 REQUEST (XMLHttpRequest)
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3000/tasks"); // POST là phương thức để tạo mới dữ liệu
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


        // 2 - gửi REQUEST lên server
        xhttp.send(JSON.stringify({
            id: currentId + 1 + "",
            name: taskName
        }));

        // 3 - Nhận lại kết quả khi server trả về (nhận lại repsonse)
        xhttp.onload = function () {
            currentId++;
            $("#name").val("");
            // console.log(this.responseText);
            // data.push(JSON.parse(this.responseText));
            // renderTable();
            location.reload();
        }

    }

    function updateTask(taskName) {
        // 1 - chuẩn bị 1 REQUEST (XMLHttpRequest)
        const xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://localhost:3000/tasks/" + editingTaskId); // PUT là phương thức để cập nhật dữ liệu
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


        // 2 - gửi REQUEST lên server
        xhttp.send(JSON.stringify({
            id: editingTaskId + "",
            name: taskName
        }));

        // 3 - Nhận lại kết quả khi server trả về (nhận lại repsonse)
        xhttp.onload = function () {
            $("#name").val("");
            location.reload();
        }

    }

    function handleDelete() {
        // 1 - chuẩn bị 1 REQUEST (XMLHttpRequest)
        const xhttp = new XMLHttpRequest();
        xhttp.open("DELETE", "http://localhost:3000/tasks/" + editingTaskId); // DELETE là phương thức để xóa dữ liệu


        // 2 - gửi REQUEST lên server
        xhttp.send();

        // 3 - Nhận lại kết quả khi server trả về (nhận lại repsonse)
        xhttp.onload = function () {
            location.reload();
        }

    }

});
