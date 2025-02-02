import { questions } from './data.js';

const questionContainer = document.getElementById('question-container');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `
        <label>${q.question}</label>
        <select id="q${index}">
            <option value="0">No</option>
            <option value="1">Yes</option>
        </select>
    `;
    questionContainer.appendChild(div);
});

submitBtn.addEventListener('click', () => {
    let score = 0;
    
    questions.forEach((q, index) => {
        const value = parseInt(document.getElementById(`q${index}`).value);
        score += value * q.weight;
    });

    let message = '';
    if (score >= 0.7) {
        message = "High probability of COVID-19. Please consult a doctor immediately.";
    } else if (score >= 0.4) {
        message = "Moderate symptoms detected. Consider getting tested.";
    } else {
        message = "Low probability. Continue monitoring your health.";
    }

    resultDiv.innerHTML = `<h3>Result:</h3><p>${message}</p>`;
});
