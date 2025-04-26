// Pure JS program to calculate percentage of 6 subjects
let prompt = require('prompt-sync')
let totalMarks = 600;
const totalSubjects = 6;

for (let i = 1; i <= totalSubjects; i++) {
    let marks = parseFloat(prompt(`Enter marks for Subject ${i} (out of 100):`));

    // Validate input
    while (isNaN(marks) || marks < 0 || marks > 100) {
        marks = parseFloat(prompt(`Invalid input. Enter marks between 0 and 100 for Subject ${i}:`));
    }

    totalMarks += marks;
}

let percentage = (totalMarks / (totalSubjects * 100)) * 100;

alert(`Total Marks: ${totalMarks} out of 600\nPercentage: ${percentage.toFixed(2)}%`);
