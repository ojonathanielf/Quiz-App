const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})



 function startGame() {
 	startButton.classList.add('hide')
 	shuffledQuestions = questions.sort(() => Math.random() - .5)
 	currentQuestionIndex = 0
 	questionContainerElement.classList.remove('hide')
 	setNextQuestion()
 }


 function setNextQuestion() {
 	resetState()
 	showQuestion(shuffledQuestions[currentQuestionIndex])

 }

 function showQuestion(question) {
 	questionElement.innerText = question.question
 	question.answers.forEach(answer => {
 		const button = document.createElement('button')
 		button.innerText = answer.text
 		button.classList.add('btn')
 		if(answer.correct) {
 			button.dataset.correct = answer.correct
 		}
 		button.addEventListener('click', selectAnswer)
 		answerButtonsElement.appendChild(button)
 	})
 }


 function resetState() {
 	nextButton.classList.add('hide')
 	while (answerButtonsElement.firstChild){
 		answerButtonsElement.removeChild
 		(answerButtonsElement.firstChild)
 	}
 }

 function selectAnswer(e) {
 	const selectedButton = e.target
 	const correct = selectedButton.dataset.correct
 	setStatusClass(document.body, correct)
 	Array.from(answerButtonsElement.children).forEach(button => {
 		setStatusClass(button,button.dataset.correct)
 	})

 	if(shuffledQuestions.length > currentQuestionIndex + 1) {
 		nextButton.classList.remove('hide')

 	}else{
 		startButton.innerText = 'Restart'
 		startButton.classList.remove('hide')
 	}

 	
 }


 function setStatusClass(element, correct) {
 	clearStatusClass(element)
 	if (correct) {
 		element.classList.add('correct')
 	}else {
 		element.classList.add('wrong')
 	}
 }

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

 const questions = [

 	{
 		question: 'What is 2 + 2?',
 		answers: [

 			{text: '4', correct: true},
 			{text: '22', correct: false},
 			{text: 'Ask my primary school teacher', correct: false},
 			{text: 'That is too simple', correct: false}

 		]
 	},

 	{
 		question: 'Who is the President of Nigeria?',
 		answers: [

 			{text: 'Buhari', correct: true},
 			{text: 'Jones James', correct: false},
 			{text: 'Akin Makinde', correct: false},
 			{text: 'Alfa Afeez', correct: false}

 		]
 	},

 	{
 		question: 'What is the shape of the earth?',
 		answers: [

 			{text: 'square', correct: false},
 			{text: 'trapezium', correct: false},
 			{text: 'Spherical', correct: true},
 			{text: 'A big head', correct: false}

 		]
 	},

 	{
 		question: 'How many planets are there?',
 		answers: [

 			{text: '9', correct: true},
 			{text: 'count them yourself', correct: false},
 			{text: '2 million', correct: false},
 			{text: 'They increase everyday', correct: false}

 		]
 	},


 	{
 		question: 'Identify the third book of the Bible',
 		answers: [

 			{text: 'James', correct: false},
 			{text: 'I do not know', correct: false},
 			{text: 'Habakuk', correct: false},
 			{text: 'Leviticus', correct: true}

 		]
 	},


 	{
 		question: 'How many letters are in the Greek alphabet?',
 		answers: [

 			{text: '24', correct: true},
 			{text: '5000', correct: false},
 			{text: '26', correct: false},
 			{text: '300', correct: false}

 		]
 	},


 	{
 		question: 'How many people are in the world?',
 		answers: [

 			{text: 'uncountable', correct: false},
 			{text: '7.888 billion', correct: true},
 			{text: 'They are too many', correct: false},
 			{text: '6.5 billion', correct: false}

 		]
 	},


 	{
 		question: 'If you have two mangoes and you eat two, how many do you have left?',
 		answers: [

 			{text: '0', correct: true},
 			{text: '5', correct: false},
 			{text: 'I have many in the cupboard', correct: false},
 			{text: '5 biscuits', correct: false}

 		]
 	}

 ]