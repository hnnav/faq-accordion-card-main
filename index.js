const questionLines = document.querySelectorAll('.question-line')

questionLines.forEach(questionLine => {
    questionLine.addEventListener('click', showAnswer)
})

function showAnswer() {
    const answer = this.nextElementSibling
    answer.style.display = 'block'
}