const questionLines = document.querySelectorAll('.question-line')

questionLines.forEach(questionLine => {
    questionLine.addEventListener('click', showAnswer)
})

function showAnswer() {
    const answer = this.nextElementSibling

    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}