const fetch = require('node-fetch'); // make sure you installed node-fetch@2
const fs = require('fs');

// Read questions.json (make sure this file exists in same folder)
const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));

async function run() {
    try {
        const res = await fetch('http://localhost:5000/add-questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(questions)
        });
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error('Error:', err);
    }
}

run();
