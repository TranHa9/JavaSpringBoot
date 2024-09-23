$(document).ready(function () {
    async function getPostsList() {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        //console.log(res.data);
        renderList(res.data.slice(0, 50), "posts");
    }
    async function getPhotosList() {
        let res = await axios.get("https://jsonplaceholder.typicode.com/photos");
        //console.log(res.data);
        renderList(res.data.slice(0, 50), "photos");
    }
    async function getAlbumssList() {
        let res = await axios.get("https://jsonplaceholder.typicode.com/albums");
        //console.log(res.data);
        renderList(res.data.slice(0, 50), "albums");
    }
    getPostsList()

    function renderList(data, type) {
        $('ul').empty();
        if (!data || data?.length === 0) {
            $('ul').append(`<li>Danh sách rỗng</li>`);
            return;
        }
        data.forEach(element => {
            //console.log(element)
            const newData = `
                <li>${element.title}</li>
                `;
            $('ul').append(newData);
            if (type === "posts") {
                $('h1').text("Type: posts");
                $('.btn-photos').removeClass('highlight-btn');
                $('.btn-albums').removeClass('highlight-btn');
                $('.btn-posts').addClass('highlight-btn');
            } else if (type === "photos") {
                $('h1').text("Type: photos");
                $('.btn-posts').removeClass('highlight-btn');
                $('.btn-albums').removeClass('highlight-btn');
                $('.btn-photos').addClass('highlight-btn');
            } else if (type === "albums") {
                $('h1').text("Type: albums");
                $('.btn-posts').removeClass('highlight-btn');
                $('.btn-photos').removeClass('highlight-btn');
                $('.btn-albums').addClass('highlight-btn');
            }
        });
    }
    $(".btn-posts").click(function () {
        getPostsList();
    })
    $(".btn-photos").click(function () {
        getPhotosList();
    })
    $(".btn-albums").click(function () {
        getAlbumssList();
    })

});