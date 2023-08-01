let questionIndex = 0;
const dictionary = [{
  question: 'Доброе утро! Время разминки.\nСпускайся в зал и найди все ♡',
  img: '1.jpg',
  answer: '10' 
},{
  question: 'Окей, ты справилась!\nВ холодильнике лежит кое-что вкусное, осмотри это.\n(Напиши число)',
  img: '2.jpg',
  answer: '3' 
},{
  question: 'Умница)\nВеликий почтальон Элвис очень старался!!\nЛадно, последний и самый сложный вопрос: какое сегодня число?(DD-MM)',
  img: '3.jpg',
  answer: '02-08' 
},{
  question: 'молодец возьми с полки пирожок(шучу).\nПора закругляться.\nВ самом пыльном месте нашей комнаты лежит коробочка',
  img: '4.jpg',
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