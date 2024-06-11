import { allQuestions } from "./questions.js";

let currentQuestionIndex = -1;
let isShowingAnswer = false;
let isShowingEnglishQuestion;
let currentQuestion;
let questions = [...allQuestions];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const newQuestionButton = document.getElementById("new-question");
const showAnswerButton = document.getElementById("show-answer");
const appElement = document.getElementById("app");
const questionContainerElement = document.getElementById('question-container');
const categoryElement = document.getElementById("category");
const categoriesButtonElement = document.getElementById('category-buttons');
const noMoreQuestionsElement = document.getElementById('no-more-questions');
const languageIndicatorElement = document.getElementById('language-indicator');

function showEndMessage() {
  noMoreQuestionsElement.style.display = "block";
  questionContainerElement.style.display = "none";
  newQuestionButton.style.display = "none";
}

function getUniqueCategories() {
  return [...new Set(questions.map(item => item.category))];
}

function getExplicitCategory(category) {
  return questions.find((question) => question.category === category).explicitCategory;
}

function filterQuestionsByCategory(category) {
  noMoreQuestionsElement.style.display = "none";
  questionContainerElement.style.display = "block";

  if (category === 'all') {
    questions = [...allQuestions];
    showNewQuestion();
    return;
  }

  questions = [...allQuestions.filter((question) => question.category === category)]
  showNewQuestion();
}

function addAllCategoriesButton() {
  const allCategories = getUniqueCategories();
  allCategories.forEach((category) => {
    const explicitCategory = getExplicitCategory(category);
    const button = document.createElement('button');
    button.setAttribute('data-category', category);
    button.classList.add('category-button');
    button.textContent = explicitCategory;
    categoriesButtonElement.appendChild(button);
    button.addEventListener("click", () => {
      filterQuestionsByCategory(category);
    });
  });

  const buttonCategoryAll = document.getElementById('category-all');
  buttonCategoryAll.addEventListener("click", () => {
    filterQuestionsByCategory('all');
  });
}

function showNewQuestion() {
    if (questions.length === 0) {
        showEndMessage();
        return;
    }

    isShowingEnglishQuestion = Math.random() < 0.5;

    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[currentQuestionIndex];
    categoryElement.textContent = currentQuestion.explicitCategory;
    
    languageIndicatorElement.textContent = isShowingEnglishQuestion ? 'English:' : 'Français:';
    languageIndicatorElement.classList.remove('language-fr');
    languageIndicatorElement.classList.remove('language-en');
    languageIndicatorElement.classList.add(isShowingEnglishQuestion ? 'language-en' : 'language-fr');
    
    questionElement.textContent = isShowingEnglishQuestion ? currentQuestion.english :  currentQuestion.french;
    

    answerElement.textContent = " ";
    answerElement.classList.add('answer-padding');
    //answerElement.style.display = "none";
    isShowingAnswer = false;

    showAnswerButton.style.display = "inline";
    newQuestionButton.style.display = "none";
}

function showAnswer() {
    //answerElement.style.display = "block";
    answerElement.classList.remove('answer-padding');
    answerElement.textContent = isShowingEnglishQuestion ? currentQuestion.french : currentQuestion.english;
    if (!isShowingAnswer) {
        questions.splice(currentQuestionIndex, 1);   
    }
    console.log({questions})
    isShowingAnswer = true;
    showAnswerButton.style.display = "none";
    newQuestionButton.style.display = "inline";
}

newQuestionButton.addEventListener("click", showNewQuestion);
showAnswerButton.addEventListener("click", showAnswer);

addAllCategoriesButton();
showNewQuestion();