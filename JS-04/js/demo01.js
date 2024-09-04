//JS là ngôn ngữ bất đồng bộ

function sum(a, b) {
    setTimeout(function () {
        console.log(a + b)
    }, 4000)
}

function subtract(a, b) {
    setTimeout(function () {
        console.log(a - b)
    }, 4000)
}

sum(2, 4);
subtract(sum, 3);

//callback là một hàm sẽ được thực hiện sau khi một hàm khác đã thực hiện xong (xử lý bất đồng bộ)