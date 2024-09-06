const button = document.getElementById('btn');
const input = document.getElementById("input-password");

button.onclick = function () {
    const typePassword = input.getAttribute('type');
    if (typePassword === 'password') {
        input.setAttribute('type', 'text');
        button.innerHTML = 'Hide';
    } else {
        input.setAttribute('type', 'password');
        button.innerHTML = 'Show';
    }

}