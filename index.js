const questionLine = document.querySelectorAll('.question-line')

questionLine.forEach(arrow => arrow.addEventListener('click', showAnswer))

function showAnswer() {
    const answer = this.nextElementSibling
    answer.style.display = 'block'
}