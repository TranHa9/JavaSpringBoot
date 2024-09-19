list = [
    {
        name: "Stephen King",
        quote: "Thời điểm đáng sợ nhất luôn luôn là ngay trước khi bạn bắt đầu. Sau đó, mọi thứ nhất định sẽ tốt đẹp hơn.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        color: "red"
    },
    {
        name: "Khuyết Danh",
        quote: "Nơi lạnh nhất không phải là Bắc cực mà là nơi không có tình người.",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        color: "blue"
    },
]

const listAuthor = document.querySelector('.testimonials-container');
const authors = document.querySelector('.authors-container');
const nameAuthor = document.querySelector('.name');
const text = document.querySelector('.text');
const container = document.querySelector('.testimonials-container');
list.forEach(item => {
    const author = document.createElement('div');
    author.classList.add('author');
    author.innerHTML = `<img src="${item.image}" alt="${item.name}"></img>`
    authors.insertAdjacentElement('beforeend', author);
    author.addEventListener('click', function () {
        document.querySelectorAll('.author').forEach(a => a.classList.remove('selected'));
        author.classList.add('selected');
        nameAuthor.innerHTML = item.name;
        text.innerHTML = item.quote;
        container.style.backgroundColor = item.color;
    })
});