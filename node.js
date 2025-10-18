const fetch = require('node-fetch'); // install with npm i node-fetch@2
const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));

async function run() {
    const res = await fetch('http://localhost:5000/add-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(questions)
    });
    const data = await res.json();
    console.log(data);
}

run();
