const questions = [
  {
      question: "Kolik koní má Porsche 911 GT3 RS?",
      a: "645",
      b: "560",
      c: "525",
      d: "480",
      correct: "c",
  },

  {
      question: "kdy bylo založeno Ferrari?",
      a: "1939",
      b: "1941",
      c: "1937",
      d: "1945",
      correct: "a",
  },

  {
      question: "Co za motor má Volkswagen Phaeton?",
      a: "1,5 W3",
      b: "6,0 W12",
      c: "5,3 W8",
      d: "3,2 V6",
      correct: "b",
  },

  {
      question: "Za co pojede Hamilton F1?",
      a: "Mercedes",
      b: "Ferrari",
      c: "McLaren",
      d: "Red Bull",
      correct: "b",
  },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz() {
  deselectAnswers()
  const currentQuizData = questions[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === questions[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < questions.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>Máte správně ${score}/${questions.length} otázek</h2>
         <p>První správná odpověď  - 525 koní</p>
         <p>Druhá správná odpověď  - Bylo založeno 1939</p>
         <p>Třetí správná odpověď  - Měl motor 6,0 W12</p>
         <p>Čtvrtý správná odpověď - Hamilton pojede za Ferrari</p>
         `
     }
  }
})