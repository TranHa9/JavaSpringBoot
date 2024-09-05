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
let breed = 'affenpinscher';
function getSubBreeds() {
    breed = select.value;
}

async function subMit() {
    const url = 'https://dog.ceo/api/breed/' + breed + '/list'
    let res = await axios.get(url);
    renderSubBreed(res.data.message);
}

function renderSubBreed(subBreeds) {
    ul.innerHTML = '';
    if (subBreeds.length === 0) {
        ul.innerHTML = '<li>Không có sub breed</li>';
        return;
    }
    for (let i = 0; i < subBreeds.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = "<a href='#'>" + subBreeds[i] + "</a>"
        li.addEventListener('click', function () {
            getDogImage(subBreeds[i]);
        });
        ul.appendChild(li);
    }
}
async function getDogImage(subBreed) {
    let res = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);
    image.src = res.data.message;
}