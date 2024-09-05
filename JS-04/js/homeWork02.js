const tbody = document.querySelector('tbody');

async function getUserList() {
    let res = await axios.get("https://api.github.com/users");
    setupPagination(res.data)
}
getUserList();

function renderUserTable(users) {
    for (let i = 0; i < users.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${i + 1}</td>
            <td><img src="${users[i].avatar_url}" alt="${users[i].login}" width="50"></td>
            <td>${users[i].login}</td>
            <td><a href="${users[i].html_url}">${users[i].html_url}</a></td>
            <td><a href="${users[i].repos_url}">${users[i].repos_url}</a></td>
        `;
        tbody.appendChild(row);
    }
}

function setupPagination(users) {
    $('.pagination-container').pagination({
        dataSource: users,
        pageSize: 5,
        callback: function (data, pagination) {
            renderUserTable(data);
        }
    });
}
