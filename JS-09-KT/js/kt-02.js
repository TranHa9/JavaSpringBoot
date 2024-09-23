$(document).ready(function () {
    const quizes = [
        {
            id: 1,
            question: "1 + 1 = ?",
            answers: [1, 2, 3, 4],
        },
        {
            id: 2,
            question: "2 + 2 = ?",
            answers: [2, 3, 4, 5],
        },
        {
            id: 3,
            question: "3 + 3 = ?",
            answers: [3, 4, 5, 6],
        }
    ];

    function renderQuiz() {
        quizes.forEach(element => {
            const quizItems = `
            <h3>${element.question}</h3>
            <div class="quiz-answer">
               <div class="quiz-answer-item">
                    <input type="radio" name="${element.id}">
                    <label">${element.answers[0]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${element.id}">
                    <label">${element.answers[1]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${element.id}">
                    <label">${element.answers[2]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${element.id}">
                    <label">${element.answers[3]}</label>
                </div>
            </div>
            `;
            $(".quiz-item").append(quizItems);
        });
    }
    renderQuiz();

    $("#btn").click(function () {
        quizes.forEach(element => {
            const random = Math.floor(Math.random() * element.answers.length);
            //console.log(random)
            const radios = document.querySelectorAll(`input[name="${element.id}"]`);
            //console.log(radios)
            radios.forEach(radio => {
                radio.checked = false;
            });
            radios[random].checked = true;
        });
    });

})