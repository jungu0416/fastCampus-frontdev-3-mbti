import {questions} from './data.js';

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.question-box .number')
const questionEl = document.querySelector('.question-box .question')
const choice1El = document.querySelector('.question-box .choice1')
const choice2El = document.querySelector('.question-box .choice2')

let currentNumber = 0
let mbti = ''

let renderQuestion = () => {
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%"
}

let nextQuestion = choiceNumber => {
  if(currentNumber === questions.length - 1) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value

  currentNumber++
  renderQuestion()
}

let showResultPage = () => {
  location.href = '/result.html?mbti=' + mbti
}


choice1El.addEventListener('click', () => {
  nextQuestion(0);
})

choice2El.addEventListener('click', () => {
  nextQuestion(1);
})

renderQuestion()