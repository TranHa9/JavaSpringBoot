const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');
const ul = document.getElementById('sub-breeds-list');

async function getBreedList() {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");
    renderBreed(res.data.message);
}

function renderBreed(breeds) {
    for (const ele in breeds) {
        const option = document.createElement("option");
        option.value = ele;
        option.innerHTML = ele;
        select.appendChild(option);
    }
}

getBreedList()

async function getSubBreeds() {
    const breed = select.value;
    const url = 'https://dog.ceo/api/breed/' + breed + '/list'
    let res = await axios.get(url);
    renderSubBreed(breed, res.data.message);
}

function renderSubBreed(breed, subBreeds) {
    ul.innerHTML = '';
    if (subBreeds.length === 0) {
        ul.innerHTML = '<li>Không có sub breed</li>';
        return;
    }
    for (let i = 0; i < subBreeds.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = "<a href='#'>" + subBreeds[i] + "</a>"
        li.addEventListener('click', function () {
            getDogImage(breed, subBreeds[i]);
        });
        ul.appendChild(li);
    }
}
async function getDogImage(breed, subBreed) {
    let res = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);
    image.src = res.data.message;
}