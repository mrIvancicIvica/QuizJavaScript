const form = document.getElementById('myForm');
const answers = document.getElementsByName('q1');
const bttn = document.getElementById('bttn');
const correctAnswers = ['A', 'C'];

  

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userAnswers = Array.from(answers)
    .filter((input) => input.checked )
    .map((input) => input.value);

  const isCorrect = userAnswers.every((answer) =>
    correctAnswers.includes(answer)
  );
  
  console.log('Is answer correct?', isCorrect);
});
bttn.disabled = true;
