//Khai báo mảng
const arr = [2, 3, 1, 4, 5, -2];

const emptyArr = [];

const nullArr = null;

const undefinedArr = undefined;

console.log(arr[0]);

//arr[0] = "Trần Văn A";

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    arr[i]++;
}
console.log(arr);

console.log("Sắp xếp:")
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);

console.log("-----------------------")
const arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1)

console.log(arr1.pop())

console.log(arr1)

arr1.push(7)

console.log(arr1)

console.log("-----------------------")

console.log(arr1.shift())

console.log(arr1)

arr1.unshift(-1)

console.log(arr1)

console.log("-----------------------")

//delete arr1[0]; //Không nên dùng
//console.log(arr1);

console.log("-----------------------")

const result = arr1.concat([-10, 9, 8, 9]);
console.log(result);

console.log("-----------------------")

console.log(result.indexOf(9));
console.log(result.lastIndexOf(9));

console.log(result.includes(8));

const first = result.find(function (value, index, array) {
    return value > 8;
});

console.log(first)


