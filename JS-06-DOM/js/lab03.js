//1. Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.
const jobs = document.querySelector('.jobs');
const job1 = document.querySelector('.job-card');

const job2 = job1.cloneNode(true);
const job3 = job1.cloneNode(true);
const job4 = job1.cloneNode(true);

jobs.appendChild(job2);
jobs.appendChild(job3);
jobs.appendChild(job4);

//2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
job2.querySelector('h3').innerText = 'JavaScript Developer';
job3.querySelector('h3').innerText = 'Java Developer';
job4.querySelector('h3').innerText = 'Python Developer';

//3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const countJobs = document.querySelector('#jobs-listed span');
let jobCard = document.querySelectorAll('.job-card');
countJobs.innerText = jobCard.length;
//4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
const input = document.getElementById('search');
input.addEventListener('keyup', function () {
    let value = this.value
    Array.from(jobCard).forEach(function (job) {
        const jobTile = job.querySelector('h3').innerText;
        if (jobTile.toLowerCase().includes(value.toLowerCase())) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
})

//5. Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc
const btnShowAll = document.getElementById('show-all');
btnShowAll.addEventListener('click', function () {
    input.value = '';
    Array.from(jobCard).forEach(function (job) {
        job.style.display = 'block';
    });
})