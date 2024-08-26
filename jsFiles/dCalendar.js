const events = {
    "2024-06-21": {type: "holiday", description: "Holiday"},
    "2024-06-28": {type: "holiday", description: "Holiday"},
    "2024-06-29": {type: "holiday", description: "Holiday"},
    "2024-07-05": {type: "holiday", description: "Holiday"},
    "2024-07-06": {type: "holiday", description: "Holiday"},
    "2024-07-13": {type: "holiday", description: "Holiday"},
    "2024-07-16": {type: "event",   description: "Muharram"},
    "2024-07-19": {type: "holiday", description: "Holiday"},
    "2024-07-20": {type: "holiday", description: "Holiday"},
    "2024-07-27": {type: "holiday", description: "Holiday"},
    "2024-08-02": {type: "event",   description: "Aadiperukku"},
    "2024-08-03": {type: "holiday", description: "Holiday"},
    "2024-08-10": {type: "holiday", description: "Holiday"},
    "2024-08-14": {type: "event",   description: "Independence Day"},
    "2024-08-16": {type: "holiday", description: "Holiday"},
    "2024-08-17": {type: "holiday", description: "Holiday"},
    "2024-08-24": {type: "holiday", description: "Holiday"},
    "2024-08-25": {type: "event",   description: "Krishna Jayanti"},
    "2024-08-30": {type: "holiday", description: "Holiday"},
    "2024-08-31": {type: "holiday", description: "Holiday"},
    "2024-09-06": {type: "event",   description: "Vinayakar Chaturthi"},
    "2024-09-07": {type: "holiday", description: "Holiday"},
    "2024-09-14": {type: "holiday", description: "Holiday"},
    "2024-09-15": {type: "event",   description: "Milad-un-Nabi"},
    "2024-09-20": {type: "holiday", description: "Holiday"},
    "2024-09-21": {type: "holiday", description: "Holiday"},
    "2024-09-28": {type: "holiday", description: "Holiday"},
    "2024-10-01": {type: "event",   description: "Gandhi Jayanti"},
    "2024-10-04": {type: "holiday", description: "Holiday"},
    "2024-10-05": {type: "holiday", description: "Holiday"},
    "2024-10-10": {type: "event",   description: "Ayutha Pooja"},
    "2024-10-11": {type: "event",   description: "Vijayadashami"},
    "2024-10-12": {type: "holiday", description: "Holiday"},
    "2024-10-19": {type: "holiday", description: "Holiday"},
    "2024-10-26": {type: "holiday", description: "Holiday"},
    "2024-10-30": {type: "event",   description: "Deepavali"},
    "2024-11-02": {type: "holiday", description: "Holiday"},
    "2024-11-09": {type: "holiday", description: "Holiday"},
};

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function generateCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarBody = document.getElementById("calendarBody");
    calendarBody.innerHTML = "";

    let date = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");

            if (i === 0 && j < firstDay) {
                cell.classList.add("empty");
            } else if (date > daysInMonth) {
                break;
            } else {
                const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                const event = events[dateString];

                if (event) {
                    cell.classList.add(event.type);
                    // Add the tooltip
                    cell.setAttribute('title', event.description); // Set the tooltip text
                }

                cell.innerText = date;
                date++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }

    document.getElementById("monthYear").innerText = `${monthNames[month]} ${year}`;
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
    generateCalendar(currentMonth, currentYear);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
    generateCalendar(currentMonth, currentYear);
});

generateCalendar(currentMonth, currentYear);