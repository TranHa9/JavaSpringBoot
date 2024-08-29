//Bài 1: Viết function nhận vào 1 mảng số và một số X để trả ra số nguyên tố trong mảng gần với giá trị X nhất.
function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

function soNTGanX(arr, x) {
    let result = null;
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i])) {
            continue;
        }
        if (result === null) {
            temp = Math.abs(arr[i] - x);
            result = arr[i];
        }
        let khoangCach = Math.abs(arr[i] - x);
        if (khoangCach < temp) {
            temp = khoangCach;
            result = arr[i];
        }

    }
    return result;
}

let arr = [10, 15, 20, 3, 11, 29, 14, 17];
let x = 12;
console.log(soNTGanX(arr, x));

// Bài 2: Viết chương trình liệt kê các số nguyên có từ 5 đến 7 chữ số thoả mãn tất cả các điều kiện sau:
// a) Là số nguyên tố.
// b) Là số thuận nghịch.
// c) Không chứa chữ số 4

function checkThuanNghich(number) {
    let oldNumber = number;
    let newNumber = 0;
    while (number > 0) {
        const soDu = number % 10;
        newNumber = newNumber * 10 + soDu;
        number = parseInt(number / 10);
    }
    return newNumber === oldNumber;
}

function check4(number) {
    while (number > 0) {
        const soDu = number % 10;
        if (soDu === 4) {
            return false;
        }
        number = parseInt(number / 10);
    }
    return true;
}

for (let i = 10000; i <= 9999999; i++) {
    if (isPrime(i) && checkThuanNghich(i) && check4(i)) {
        console.log(i);
    }
}

// Bài 3: Viết chương trình liệt kê các số nguyên có 7 chữ số thoả mãn cả 3 điều kiện sau:
// a) Là số nguyên tố.
// b) Tất cả các chữ số là nguyên tố
// c) Đảo của nó cũng là một số nguyên tố

function checkChuSoNT(number) {
    const primes = [2, 3, 5, 7];
    while (number > 0) {
        const soDu = number % 10;
        if (!primes.includes(soDu)) {
            return false;
        }
        number = parseInt(number / 10);
    }
    return true;
}

function checkdaoNghichNT(number) {
    let newNumber = 0;
    while (number > 0) {
        const soDu = number % 10;
        newNumber = newNumber * 10 + soDu;
        number = parseInt(number / 10);
    }
    return isPrime(newNumber)
}
for (let i = 1000000; i <= 9999999; i++) {
    if (isPrime(i) && checkChuSoNT(i) && checkdaoNghichNT(i)) {
        console.log(i);
    }
}

// Bài 4: Viết function nhận vào 1 mảng số. Tìm số lớn thứ hai và vị trí của nó trong dãy. Chú ý trường hợp cả dãy bằng nhau thì sẽ không có số lớn thứ 2.
const arr1 = [7, 7, 7, 7, 7];
function findMax2nd(nums) {
    if (arr.length < 2) return "Không có số lớn thứ 2";
    let max = Math.max(...nums);
    let temp = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < max && (temp === null || nums[i] > temp)) {
            temp = nums[i];
        }
    }
    if (temp === null) return "Không có số lớn thứ 2";
    const index2nd = nums.indexOf(temp);
    return { index: index2nd, value: temp };
}
console.log(findMax2nd(arr1));

//Bài 5: Viết function nhận vào 2 số tự nhiên m và n, sao cho m < n. Hãy liệt kê các số chính phương trong đoạn [m,n]. Có bao nhiêu số chính phương? (Nhớ lại kiến thức về đoạn số được học ở lớp 10, một số x thuộc đoạn [m, n] có nghĩa là m <= x <= n)

function checkChinhPhuong(number) {
    let a = Math.sqrt(number);
    return Number.isInteger(a);
}

function lietKeChinhPhuong(m, n) {
    let result = [];
    for (let i = m; i <= n; i++) {
        if (!checkChinhPhuong(i)) {
            continue;
        }
        result.push(i);
    }
    return result;
}

console.log(lietKeChinhPhuong(1, 16));

//Bài 6: Viết function nhận vào 2 số tự nhiên m và n rồi kiểm tra xem chúng có nguyên tố cùng nhau không. (Hai số nguyên tố cùng nhau là 2 số có ước chung lớn nhất là 1)

function nguyenToCungNhau(m, n) {
    while (n !== 0) {
        let temp = n;
        n = m % n;
        m = temp;
    }
    return m === 1;
}
console.log(nguyenToCungNhau(7, 8))

//Bài 7: Viết function nhận vào số n và kiểm tra n có phải số nguyên tố hay không.
function soNT(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(soNT(7))