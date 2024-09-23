$(document).ready(function () {
    const grades = [
        { name: 'John', grade: 8, sex: 'M' },
        { name: 'Sarah', grade: 12, sex: 'F' },
        { name: 'Bob', grade: 16, sex: 'M' },
        { name: 'Johnny', grade: 2, sex: 'M' },
        { name: 'Ethan', grade: 4, sex: 'M' },
        { name: 'Paula', grade: 18, sex: 'F' },
        { name: 'Donald', grade: 5, sex: 'M' },
        { name: 'Jennifer', grade: 13, sex: 'F' },
        { name: 'Courtney', grade: 15, sex: 'F' },
        { name: 'Jane', grade: 9, sex: 'F' }
    ]
    //1. Viết function tính thứ hạng trung bình của cả lớp
    let sum = 0;
    function averageRank() {
        grades.forEach(element => {
            sum += element.grade;
        });
        console.log("Hạng trung bình cả lớp là:", sum / grades.length);
    }
    averageRank();

    //2. Viết function tính thứ hạng trung bình của nam trong lớp
    let sumM = 0
    let count = 0;
    function averageRankM() {
        grades.forEach(element => {
            if (element.sex === "M") {
                sumM += element.grade;
                count++;
            }
        });
        console.log("Hạng trung bình các bạn nam là:", sumM / count);
    }
    averageRankM();

    //3. Viết function tính thứ hạng trung bình của Nữ trong lớp
    let sumF = 0
    let countF = 0;
    function averageRankF() {
        grades.forEach(element => {
            if (element.sex === "F") {
                sumF += element.grade;
                countF++;
            }
        });
        console.log("Hạng trung bình các bạn nữ là:", sumF / countF);
    }
    averageRankF();

    //4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
    let newGradesM = [];
    function highestRankM() {
        grades.forEach(element => {
            if (element.sex === "M") {
                newGradesM.push(element);
            }
        });
        if (newGradesM.length > 0) {
            newGradesM.sort(function (a, b) {
                return b.grade - a.grade;
            })
        }
        console.log("Học viên nam có thứ hạng cao nhất là:", "\"" + newGradesM[0].name + "\"", "với thứ hạng là:", newGradesM[0].grade)
    }
    highestRankM();

    //5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
    let newGradesF = [];
    function highestRankF() {
        grades.forEach(element => {
            if (element.sex === "F") {
                newGradesF.push(element);
            }
        });
        if (newGradesF.length > 0) {
            newGradesF.sort(function (a, b) {
                return b.grade - a.grade;
            })
        }
        console.log("Học viên nữ có thứ hạng cao nhất là:", "\"" + newGradesF[0].name + "\"", "với thứ hạng là:", newGradesF[0].grade)
    }
    highestRankF();

    //6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
    let gradesM = [];
    function lowestRankM() {
        grades.forEach(element => {
            if (element.sex === "M") {
                gradesM.push(element);
            }
        });
        if (gradesM.length > 0) {
            gradesM.sort(function (a, b) {
                return a.grade - b.grade;
            })
        }
        console.log("Học viên nam có thứ hạng thấp nhất là:", "\"" + gradesM[0].name + "\"", "với thứ hạng là:", gradesM[0].grade)
    }
    lowestRankM();

    //7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
    let gradesF = [];
    function lowestRankF() {
        grades.forEach(element => {
            if (element.sex === "F") {
                gradesF.push(element);
            }
        });
        if (gradesF.length > 0) {
            gradesF.sort(function (a, b) {
                return a.grade - b.grade;
            })
        }
        console.log("Học viên nữ có thứ hạng thấp nhất là:", "\"" + gradesF[0].name + "\"", "với thứ hạng là:", gradesF[0].grade)
    }
    lowestRankF();

    //8. Viết function thứ hạng cao nhất của cả lớp
    function highestRank() {
        grades.sort(function (a, b) {
            return b.grade - a.grade
        })
        console.log("Thứ hạng cao nhất của lớp là:", "\"" + grades[0].name + "\"", "với thứ hạng là:", grades[0].grade)
    }
    highestRank();

    //9. Viết function thứ hạng thấp nhất của cả lớp
    function lowestRank() {
        grades.sort(function (a, b) {
            return a.grade - b.grade
        })
        console.log("Thứ hạng thấp nhất của lớp là:", "\"" + grades[0].name + "\"", "với thứ hạng là:", grades[0].grade)
    }
    lowestRank();

    //10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
    let studentFs = [];
    function getFemaleLists() {
        grades.forEach(element => {
            if (element.sex === "F") {
                studentFs.push(element);
            }
        });
        console.log("Danh sách các bạn học viên nữ trong lớp:", studentFs);
    }
    getFemaleLists();

    //11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
    function sortToAlphabet() {
        grades.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        })
        console.log("Sắp xếp tên các học viên theo thứ tự tăng dần của bảng chữ cái", grades)
    }
    sortToAlphabet();

    //12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
    function rankDecreasing() {
        grades.sort(function (a, b) {
            return b.grade - a.grade
        })
        console.log("Thứ hạn của các học viên theo chiều giảm dần:", grades)
    }
    rankDecreasing();

    //13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
    function getNameStudentJ() {
        const student = grades.filter(function (item) {
            return item.sex === 'F' && item.name.startsWith('J')
        });
        console.log("Học viên Nữ có tên bắt đầu bằng “J”:", student)
    }
    getNameStudentJ();
    //14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
    function top5HighestRank() {
        const students = grades.sort(function (a, b) {
            b.grade - a.grade
        }).slice(0, 5);
        console.log("Top 5 người có thứ hạng cao nhất trong lớp:", students)
    }
    top5HighestRank();
})