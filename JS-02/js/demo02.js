const arr = [1, 5, -9, 3, -6, 2];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("-------------")

arr.forEach(element => {
    console.log(element)
});

console.log("-------------")
for (element of arr) {
    console.log(element)
}
console.log("-------------")
const result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        continue;
    }
    result.push(arr[i]);
}
console.log(result);

console.log("-------------")

//filter
const ketQua = arr.filter(function (value) {
    return value > 0;
})
console.log(ketQua)

const testMap = arr.map(function (value) {
    return value * 2;
})
console.log(testMap)