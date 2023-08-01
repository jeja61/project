let questionIndex = 0;
const dictionary = [{
  question: 'Сколько месяцев в году?',
  img: 'shrek1.webp',
  answer: '12' 
},{
  question: 'Сколько дней в году?',
  img: 'shrek4.jpg',
  answer: '365' 
},{
  question: 'молодец возьми с полки пирожок (там два бери средний)',
  img: 'pepe.jpg',
  answer: '',
  isEnd: true,
}]

const userAnswerInput = document.getElementById('userAnswerInput');
const questionTextLabel = document.querySelector('label');
const submitButton = document.getElementById('submit');
const img = document.getElementById('image');

submitButton.onclick = btnClick;
document.addEventListener("touchstart", function() {}, true);


updateTextLabel();

function btnClick() {
  const value = userAnswerInput.value;
  if (value === dictionary[questionIndex].answer) {
    questionIndex++;
    updateTextLabel();
  }
}

function updateTextLabel() {
  questionTextLabel.innerText = dictionary[questionIndex].question;
  img.src = dictionary[questionIndex].img;
  userAnswerInput.value = '';
  if (dictionary[questionIndex].isEnd) {
    userAnswerInput.disabled = true;
  }
}