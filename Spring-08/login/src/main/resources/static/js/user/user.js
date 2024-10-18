$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: '/api/v1/users/list',
        success: function(users) {
            users.forEach(user => {
                $('#userTableBody').append(`
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.phone || 'Chưa có'}</td>
                            <td>${user.address || 'Chưa có'}</td>
                            <td>${user.dob}</td>
                            <td>${user.gender}</td>
                            <td>
                                <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Xóa</button>
                            </td>
                        </tr>
                    `);
            });
        },
        error: function(data) {
            showToast(data.responseJSON.message, "error");
        }
    });
})
