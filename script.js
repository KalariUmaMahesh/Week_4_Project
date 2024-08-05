// Sample questions for HTML
const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which tag is used to define an unordered list?",
    options: ["<ul>", "<li>", "<ol>", "<div>"],
    answer: "<ul>",
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["<h1>", "<heading>", "<head>", "<h6>"],
    answer: "<h1>",
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["src", "alt", "title", "href"],
    answer: "alt",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a url='http://example.com'>Example</a>",
      "<a href='http://example.com'>Example</a>",
      "<a>http://example.com</a>",
      "<hyperlink>http://example.com</hyperlink>",
    ],
    answer: "<a href='http://example.com'>Example</a>",
  },
  {
    question: "Which HTML element is used to define the structure of a table?",
    options: ["<table>", "<tr>", "<th>", "<td>"],
    answer: "<table>",
  },
  {
    question: "What is the correct HTML for inserting a line break?",
    options: ["<lb>", "<break>", "<br>", "<line>"],
    answer: "<br>",
  },
  {
    question:
      "Which HTML attribute specifies the URL of the page the link goes to?",
    options: ["href", "url", "link", "src"],
    answer: "href",
  },
  {
    question: "What is the correct HTML for creating an unordered list?",
    options: ["<list>", "<ul>", "<ol>", "<li>"],
    answer: "<ul>",
  },
  {
    question: "Which HTML element defines the title of a document?",
    options: ["<head>", "<meta>", "<title>", "<body>"],
    answer: "<title>",
  },
  // Add more HTML questions...
];

// Sample questions for CSS
const cssQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "background-color", "font-size", "text-align"],
    answer: "color",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "text-color", "font-color", "text-style"],
    answer: "color",
  },
  {
    question:
      "What is the correct CSS syntax to select an element with id 'demo'?",
    options: ["#demo", ".demo", "demo", "element.demo"],
    answer: "#demo",
  },
  {
    question:
      "Which CSS property is used to change the background color of an element?",
    options: ["bgcolor", "color", "background-color", "background"],
    answer: "background-color",
  },
  {
    question:
      "Which CSS property is used to change the font size of an element?",
    options: ["text-style", "font-size", "text-size", "size"],
    answer: "font-size",
  },
  {
    question:
      "Which CSS property is used to create space between the element's border and its content?",
    options: ["padding", "margin", "spacing", "gap"],
    answer: "padding",
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "text-style", "bold", "font-bold"],
    answer: "font-weight",
  },
  {
    question:
      "Which CSS property is used to align text to the center of an element?",
    options: ["text-align", "align", "center-text", "text-center"],
    answer: "text-align",
  },
  {
    question: "Which CSS property is used to remove the underline from links?",
    options: ["text-decoration", "decoration", "underline", "link-decoration"],
    answer: "text-decoration",
  },
  // Add more CSS questions...
];

// Sample questions for JavaScript
const javascriptQuestions = [
  {
    question: "What is JavaScript primarily used for?",
    options: [
      "Styling web pages",
      "Adding interactivity to web pages",
      "Defining web page structure",
      "Storing data on the server",
    ],
    answer: "Adding interactivity to web pages",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["let", "variable", "var", "const"],
    answer: "var",
  },
  {
    question: "Which method is used to add a new item to the end of an array?",
    options: ["push()", "append()", "addToEnd()", "insert()"],
    answer: "push()",
  },
  {
    question: "What does the '=== operator' do in JavaScript?",
    options: [
      "Compares values for equality without type conversion",
      "Assigns a value to a variable",
      "Checks if a value is less than or equal to another value",
      "Performs a logical AND operation",
    ],
    answer: "Compares values for equality without type conversion",
  },
  {
    question: "What is the result of the expression: '5 + '5' in JavaScript?",
    options: ["10", "55", "5 + '5'", "Error"],
    answer: "55",
  },
  {
    question: "Which built-in method returns the length of a string?",
    options: ["size()", "length()", "count()", "charAt()"],
    answer: "length()",
  },
  {
    question:
      "What is the purpose of the 'addEventListener()' method in JavaScript?",
    options: [
      "To remove an event listener",
      "To add an event listener to an HTML element",
      "To create a new event",
      "To modify the CSS of an element",
    ],
    answer: "To add an event listener to an HTML element",
  },
  {
    question: "What does the 'typeof' operator return for an array?",
    options: ["object", "array", "array[]", "array()"],
    answer: "object",
  },
  {
    question:
      "Which statement is used to stop the execution of a loop in JavaScript?",
    options: ["continue", "return", "break", "stop"],
    answer: "break",
  },
  // Add more JavaScript questions...
];

// Add more sample questions for other subjects...
// Sample questions for Python
const pythonQuestions = [
  {
    question: "What is Python?",
    options: [
      "A programming language",
      "A type of snake",
      "A type of pasta",
      "A character from a movie",
    ],
    answer: "A programming language",
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["def", "function", "define", "fun"],
    answer: "def",
  },
  {
    question: "What is the result of 5 + 3 * 2 in Python?",
    options: ["16", "11", "10", "13"],
    answer: "11",
  },
  {
    question: "Which of the following data types is immutable in Python?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    answer: "Tuple",
  },
  {
    question: "What is the output of the following code: print('Hello' * 3)?",
    options: ["HelloHelloHello", "Hello 3 times", "HelloHello", "Error"],
    answer: "HelloHelloHello",
  },
  {
    question:
      "Which module in Python can be used to work with regular expressions?",
    options: ["re", "regex", "regexpy", "regular"],
    answer: "re",
  },
  {
    question: "What does the 'in' keyword do in Python?",
    options: [
      "Checks if a value is present in a list",
      "Declares a variable",
      "Defines a function",
      "Checks if a value is divisible by another value",
    ],
    answer: "Checks if a value is present in a list",
  },
  {
    question: "Which method is used to read input from the user in Python?",
    options: ["input()", "read()", "getInput()", "scanf()"],
    answer: "input()",
  },
  {
    question: "What is the output of the following code: len('Python')?",
    options: ["5", "6", "7", "Error"],
    answer: "6",
  },
  {
    question: "Which operator is used for exponentiation in Python?",
    options: ["**", "^", "^^", "//"],
    answer: "**",
  },
];
// Sample questions for Java
const javaQuestions = [
  {
    question: "What is Java?",
    options: [
      "A programming language",
      "A type of coffee",
      "An island in Indonesia",
      "A type of dance",
    ],
    answer: "A programming language",
  },
  {
    question: "Which of the following is a valid Java identifier?",
    options: ["2variable", "_variable", "variable-name", "variable name"],
    answer: "_variable",
  },
  {
    question:
      "What is the output of the following code?\n\n```\nint x = 5;\nSystem.out.println(++x);\n```",
    options: ["5", "6", "7", "Error"],
    answer: "6",
  },
  {
    question: "Which keyword is used to declare a constant in Java?",
    options: ["final", "const", "static", "define"],
    answer: "final",
  },
  {
    question: "What is the result of 10 % 3 in Java?",
    options: ["3", "1", "0", "10"],
    answer: "1",
  },
  {
    question: "Which loop is guaranteed to execute at least once in Java?",
    options: ["for loop", "while loop", "do-while loop", "switch loop"],
    answer: "do-while loop",
  },
  {
    question: "What is the purpose of the 'break' statement in Java?",
    options: [
      "To end the execution of a loop or switch statement",
      "To skip the execution of a specific iteration of a loop",
      "To exit a method",
      "To return a value from a method",
    ],
    answer: "To end the execution of a loop or switch statement",
  },
  {
    question: "Which data type is used to store a single character in Java?",
    options: ["char", "character", "String", "byte"],
    answer: "char",
  },
  {
    question: "What is the result of 'Hello' + 5 in Java?",
    options: ["Hello5", "Error", "Hello 5", "505"],
    answer: "Hello5",
  },
  {
    question:
      "Which of the following is a correct way to declare a two-dimensional array in Java?",
    options: [
      "int[][] array = new int[];",
      "int[][] array = new int[3,3];",
      "int[][] array = new int[3][3];",
      "int[][] array = new int[][];",
    ],
    answer: "int[][] array = new int[3][3];",
  },
];

// Sample questions for SQL
const sqlQuestions = [
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "Simple Query Language",
      "Structured Question Language",
    ],
    answer: "Structured Query Language",
  },
  {
    question: "Which SQL keyword is used to retrieve data from a database?",
    options: ["SELECT", "FROM", "WHERE", "RETRIEVE"],
    answer: "SELECT",
  },
  {
    question:
      "Which SQL clause is used to filter records based on a specified condition?",
    options: ["WHERE", "SELECT", "FILTER", "CONDITION"],
    answer: "WHERE",
  },
  {
    question: "Which SQL command is used to insert new data into a database?",
    options: ["INSERT INTO", "UPDATE", "ADD", "CREATE"],
    answer: "INSERT INTO",
  },
  {
    question: "Which SQL statement is used to delete records from a database?",
    options: ["DELETE FROM", "REMOVE", "DROP", "ERASE"],
    answer: "DELETE FROM",
  },
  {
    question:
      "Which SQL keyword is used to change existing data in a database?",
    options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
    answer: "UPDATE",
  },
  {
    question:
      "Which SQL function is used to count the number of rows returned by a query?",
    options: ["COUNT()", "SUM()", "AVG()", "MAX()"],
    answer: "COUNT()",
  },
  {
    question:
      "Which SQL command is used to retrieve unique values from a database?",
    options: ["SELECT DISTINCT", "SELECT UNIQUE", "UNIQUE", "DISTINCT"],
    answer: "SELECT DISTINCT",
  },
  {
    question:
      "Which SQL clause is used to sort the result set in ascending or descending order?",
    options: ["ORDER BY", "SORT", "GROUP BY", "SORT BY"],
    answer: "ORDER BY",
  },
  {
    question: "Which SQL command is used to create a new database?",
    options: [
      "CREATE DATABASE",
      "NEW DATABASE",
      "ADD DATABASE",
      "MAKE DATABASE",
    ],
    answer: "CREATE DATABASE",
  },
];

const htmlBtn = document.getElementById("htmlBtn");
const cssBtn = document.getElementById("cssBtn");
const javascriptBtn = document.getElementById("javascriptBtn");
const pythonBtn = document.getElementById("pythonBtn");
const javaBtn = document.getElementById("javaBtn");
const sqlBtn = document.getElementById("sqlBtn");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const backToQuizzesBtn = document.getElementById("backToQuizzesBtn");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const resultSection = document.getElementById("result");
const subjectSelectionSection = document.getElementById("subject-selection");
const quizSection = document.getElementById("quiz");
const timerElement = document.getElementById("timer");

let currentQuestion = 0;
let score = 0;
let questions = [];
let selectedOption = null;
let timer;
let timeLeft = 30; // 5 minutes in seconds

htmlBtn.addEventListener("click", () => startQuiz("HTML"));
cssBtn.addEventListener("click", () => startQuiz("CSS"));
javascriptBtn.addEventListener("click", () => startQuiz("JavaScript"));
javaBtn.addEventListener("click", () => startQuiz("Java"));
pythonBtn.addEventListener("click", () => startQuiz("Python"));
sqlBtn.addEventListener("click", () => startQuiz("SQL"));

function startQuiz(subject) {
  switch (subject) {
    case "HTML":
      questions = htmlQuestions;
      break;
    case "CSS":
      questions = cssQuestions;
      break;
    case "JavaScript":
      questions = javascriptQuestions;
      break;
    case "Python":
      questions = pythonQuestions;
      break;
    case "Java":
      questions = javaQuestions;
      break;
    case "SQL":
      questions = sqlQuestions;
      break;
    default:
      questions = [];
  }

  // Hide subject selection section and display quiz section
  subjectSelectionSection.style.display = "none";
  quizSection.style.display = "block";
  resultSection.style.display = "none";

  // Reset and start the timer
  timeLeft = 30; // Reset timer to 5 minutes
  startTimer();

  // Display the first question
  displayQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      showResult(); // Show result when time is up
    }
  }, 1000);
}

function displayQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";
  selectedOption = null;

  question.options.forEach((option) => {
    const optionElement = document.createElement("button");
    optionElement.textContent = option;
    optionElement.classList.add("option");
    optionElement.addEventListener("click", () => {
      selectedOption = option;
      resetAnswer();
      optionElement.classList.add("active");
    });
    optionsElement.appendChild(optionElement);
  });

  submitBtn.style.display = "block";
}

function resetAnswer() {
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach((button) => button.classList.remove("active"));
}

function checkAnswer() {
  const question = questions[currentQuestion];
  const optionButtons = document.querySelectorAll(".option");

  optionButtons.forEach((button) => {
    if (button.textContent === question.answer) {
      button.classList.add("correct");
    } else if (button.textContent === selectedOption) {
      button.classList.add("incorrect");
    }
  });

  if (selectedOption === question.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(displayQuestion, 1000);
  } else {
    showResult();
  }
}

function showResult() {
  quizSection.style.display = "none";
  resultSection.style.display = "block";
  scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
  backToQuizzesBtn.style.display = "block";
  clearInterval(timer); // Stop the timer
}

// restartBtn.addEventListener("click", () => {
//   currentQuestion = 0;
//   score = 0;
//   quizSection.style.display = "block";
//   resultSection.style.display = "none";
//   startTimer();
//   displayQuestion();
// });

submitBtn.addEventListener("click", () => {
  if (selectedOption) {
    checkAnswer();
  } else {
    alert("Please select an option before submitting.");
  }
});

backToQuizzesBtn.addEventListener("click", () => {
  resultSection.style.display = "none";
  subjectSelectionSection.style.display = "block";
});

subjectSelectionSection.style.display = "block";
quizSection.style.display = "none";
resultSection.style.display = "none";
