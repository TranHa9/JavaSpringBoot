const input = document.getElementById('search');
const mealsClass = document.getElementById("meals");
//const meal = document.querySelector('.meal');
const detailMeal = document.querySelector('.single-meal')
const timKiem = document.getElementById('result-heading')



async function getMealFinder() {
    let item = input.value;
    timKiem.innerHTML = `<h2>Kết quả tìm kiếm cho từ khóa '${item}':</h2>`
    let res = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + item);
    renderMeal(res.data.meals);
}

async function getMealRandom() {
    let res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
    getMealDetail(res.data.meals[0].idMeal)
}

function renderMeal(meals) {
    for (let i = 0; i < meals.length; i++) {
        const meal = document.createElement("div");
        meal.className = 'meal';
        meal.innerHTML = `<img src=${meals[i].strMealThumb} alt=${meals[i].strMeal}>` + "<div class='meal-info'><h3>" + meals[i].strMeal + "</h3></div>";
        meal.addEventListener('click', function () {
            getMealDetail(meals[i].idMeal);
        });
        mealsClass.insertAdjacentElement("beforeend", meal);
    }
}
async function getMealDetail(id) {
    detailMeal.innerHTML = '';
    let res = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
    detailMeal.innerHTML = `
        <h1>${res.data.meals[0].strMeal}</h1>
        <img src="${res.data.meals[0].strMealThumb}" alt="${res.data.meals[0].strMeal}">
        <div class="single-meal-info">
            <p>${res.data.meals[0].strCategory}</p>
            <p>${res.data.meals[0].strArea}</p>
        </div>
        <div class="main">
        <p>${res.data.meals[0].strInstructions}</p>
        <h2>Ingredients</h2>
    `;
    const ul = document.createElement('ul');
    for (let i = 1; i <= 20; i++) {
        const ingredient = res.data.meals[0][`strIngredient${i}`];
        const measure = res.data.meals[0][`strMeasure${i}`];
        if (ingredient !== '' && measure !== '') {
            const li = document.createElement("li");
            li.innerHTML = ingredient + " - " + measure;
            ul.appendChild(li);
        }
    }
    detailMeal.insertAdjacentElement("beforeend", ul);
}
