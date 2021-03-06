const correctAnswers =  ['B', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const resultSpan = document.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    let score = 0;

    userAnswers.forEach((answers, index) => {
        if(answers === correctAnswers[index]) {
            score += 25;
        }
    });

    scrollTo(0,0);
    result.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        resultSpan.textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    },10);

});