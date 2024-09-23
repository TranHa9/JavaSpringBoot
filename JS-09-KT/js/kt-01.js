$(document).ready(function () {

    //1. Kiểm tra Javascript cơ bản

    //Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
    let array = ['aba', 'aa', 'ad', 'c', 'vcd'];
    function getStringHasMaxLength(array) {
        let maxLength = 0;
        array.forEach(element => {
            if (element.length > maxLength) {
                maxLength = element.length;
            }
        });
        return array.filter(function (item) {
            return item.length === maxLength;
        })
    }
    console.log("Mảng các chuỗi có độ dài lớn nhất là:", getStringHasMaxLength(array))

    //Bài 2. Cho mảng users như sau:
    users = [
        {
            name: "Bùi Công Sơn",
            age: 30,
            isStatus: true
        },
        {
            name: "Nguyễn Thu Hằng",
            age: 27,
            isStatus: false
        },
        {
            name: "Phạm Văn Dũng",
            age: 20,
            isStatus: false
        }
    ]
    //Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
    function getUsersList(users) {
        return users.filter(function (item) {
            return item.age > 25 && item.isStatus === true;
        })
    }
    console.log("Mảng các user có age > 25 và isStatus = true là:", getUsersList(users));

    //Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
    function sortAgeAscending(users) {
        return users.sort(function (a, b) {
            return a.age - b.age;
        })
    }
    console.log("Mảng các user có age tăng dần là:", sortAgeAscending(users));

    //Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
    let array1 = ["one", "two", "three", "one", "one", "three"];
    function getCountElement(array1) {
        let object = {};
        array1.forEach(element => {
            if (object[element]) {
                object[element] += 1;
            } else {
                object[element] = 1;
            }
        });
        return object;
    }
    console.log("Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần:", getCountElement(array1))
})