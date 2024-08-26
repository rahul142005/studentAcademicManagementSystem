const marksData = {
    "Semester 1": {
        "CIA1": [
            { subject: "Mathematics", marks: 45 },
            { subject: "Physics", marks: 40 },
            { subject: "Chemistry", marks: 42 }
        ],
        "CIA2": [
            { subject: "Mathematics", marks: 46 },
            { subject: "Physics", marks: 41 },
            { subject: "Chemistry", marks: 43 }
        ],
        "Model": [
            { subject: "Mathematics", marks: 65 },
            { subject: "Physics", marks: 60 },
            { subject: "Chemistry", marks: 63 }
        ],
        "Semester": [
            { subject: "Mathematics", marks: 75 },
            { subject: "Physics", marks: 72 },
            { subject: "Chemistry", marks: 73 }
        ]
    },
    "Semester 2": {
        "CIA1": [
            { subject: "Mathematics", marks: 48 },
            { subject: "Physics", marks: 47 },
            { subject: "Chemistry", marks: 44 }
        ],
        //Semester 2 exams
    },
    //Semester 3
};

function showMarks(examType) {
    const semester = document.getElementById('semester-dropdown').value;
    const semesterKey = `Semester ${semester}`;
    const table = document.getElementById('marks-table');
    table.innerHTML = '';

    if (marksData[semesterKey] && marksData[semesterKey][examType]) {
        const marksArray = marksData[semesterKey][examType];

        const headerRow = document.createElement('tr');
        const subjectHeader = document.createElement('th');
        subjectHeader.textContent = 'Subject';
        const marksHeader = document.createElement('th');
        marksHeader.textContent = 'Marks';
        headerRow.appendChild(subjectHeader);
        headerRow.appendChild(marksHeader);
        table.appendChild(headerRow);

        marksArray.forEach(entry => {
            const row = document.createElement('tr');
            const subjectCell = document.createElement('td');
            subjectCell.textContent = entry.subject;
            const marksCell = document.createElement('td');
            marksCell.textContent = entry.marks;
            row.appendChild(subjectCell);
            row.appendChild(marksCell);
            table.appendChild(row);
        });

        document.getElementById('marks-display').style.display = 'block';
    } else {
        document.getElementById('marks-display').style.display = 'none';
        alert('No data available for this exam.');
    }
}
