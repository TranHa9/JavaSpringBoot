function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function findMax1(arr) {
    return Math.max(...arr);
}
console.log(findMax1([1, 2, 4, 5, 6]));

function getOdd(arr) {
    return arr.map(function (value) {
        return value % 2;
    })
}
console.log(getOdd([4, 2, 5, 6, 2, 7]))

console.log("-------")

function isSymmetricString(string) {
    let spaceStr = string.replace(/\s/g, '').toLowerCase();
    let reverseStr = spaceStr.split('').reverse().join('');
    return spaceStr === reverseStr;
}

console.log("-------")

function isSymmetricNum(arr) {
    let indexLeft = 0;
    let indeRight = arr.length - 1;

    while (indexLeft < indeRight) {
        if (arr[indexLeft] !== arr[indeRight]) {
            return false;
        }
        indexLeft++;
        indeRight--;
    }
    return true;
}

function isSymmetricNum1(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isSymmetricNum1([1, 2, 3, 2, 1]))

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
function check068(number) {
    while (number > 0) {
        const soDu = number % 10;
        if (soDu !== 0 && soDu !== 6 && soDu !== 8) {
            return false;
        }
        number = parseInt(number / 10);
    }
    return true;
}
function tongChiaHetCho10(number) {
    let sum = 0;
    while (number > 0) {
        const soDu = number % 10;
        sum += soDu;
        number = parseInt(number / 10);
    }
    return sum % 10 === 0
}

for (let i = 1000000; i <= 9999999; i++) {
    if (checkThuanNghich(i) && check068(i) && tongChiaHetCho10(i)) {
        console.log(i);
    }
}
