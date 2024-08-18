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

const currentDate = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function renderCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    document.getElementById("calendarHeader").innerHTML = `
        <button id="prev-month" class="nav-button">Previous</button>
        <span id="calendarMonth">${monthNames[month]} ${year}</span>
        <button id="next-month" class="nav-button">Next</button>
    `;

    const calendarBody = document.getElementById("calendarBody");
    calendarBody.innerHTML = "";

    for (let i = 0; i < daysInWeek.length; i++) {
        const dayNameDiv = document.createElement("div");
        dayNameDiv.classList.add("calendarDay");
        dayNameDiv.textContent = daysInWeek[i];
        dayNameDiv.style.fontWeight = "bold";

        calendarBody.appendChild(dayNameDiv);
    }

    for (let i = 0; i < firstDay; i++) {
        const blankDiv = document.createElement("div");
        blankDiv.classList.add("calendarDay");
        calendarBody.appendChild(blankDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dateStr = date.toISOString().split('T')[0];

        // Debugging: Check the dateStr
        console.log(`Rendering date: ${dateStr}`);

        const dayDiv = document.createElement("div");
        dayDiv.classList.add("calendarDay");
        dayDiv.textContent = day;

        if (events[dateStr]) {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add(events[dateStr].type); // Add type as class
            eventDiv.textContent = "!";

            const tooltipDiv = document.createElement("div");
            tooltipDiv.classList.add("event-tooltip");
            tooltipDiv.textContent = events[dateStr].description;

            dayDiv.appendChild(eventDiv);
            dayDiv.appendChild(tooltipDiv);
        }

        calendarBody.appendChild(dayDiv);
    }

    document.getElementById("prev-month").addEventListener("click", () => {
        renderCalendar((month === 0 ? 11 : month - 1), (month === 0 ? year - 1 : year));
    });

    document.getElementById("next-month").addEventListener("click", () => {
        renderCalendar((month === 11 ? 0 : month + 1), (month === 11 ? year + 1 : year));
    });
}


renderCalendar(currentDate.getMonth(), currentDate.getFullYear());

/* const events = {
    "2024-06-22": {type: "holiday", description: "Holiday"},
    "2024-06-29": {type: "holiday", description: "Holiday"},
    "2024-06-30": {type: "holiday", description: "Holiday"},
    "2024-07-06": {type: "holiday", description: "Holiday"},
    "2024-07-07": {type: "holiday", description: "Holiday"},
    "2024-07-14": {type: "holiday", description: "Holiday"},
    "2024-07-17": {type: "event", description: "Muharram"},
    "2024-07-20": {type: "holiday", description: "Holiday"},
    "2024-07-21": {type: "holiday", description: "Holiday"},
    "2024-07-28": {type: "holiday", description: "Holiday"},
    "2024-08-03": {type: "event", description: "Aadiperukku"},
    "2024-08-04": {type: "holiday", description: "Holiday"},
    "2024-08-11": {type: "holiday", description: "Holiday"},
    "2024-08-15": {type: "event", description: "Independence Day"},
    "2024-08-17": {type: "holiday", description: "Holiday"},
    "2024-08-18": {type: "holiday", description: "Holiday"},
    "2024-08-25": {type: "holiday", description: "Holiday"},
    "2024-08-26": {type: "event", description: "Krishna Jayanti"},
    "2024-08-31": {type: "holiday", description: "Holiday"},
    "2024-09-01": {type: "holiday", description: "Holiday"},
    "2024-09-07": {type: "event", description: "Vinayakar Chaturthi"},
    "2024-09-08": {type: "holiday", description: "Holiday"},
    "2024-09-15": {type: "holiday", description: "Holiday"},
    "2024-09-16": {type: "event", description: "Milad-un-Nabi"},
    "2024-09-21": {type: "holiday", description: "Holiday"},
    "2024-09-22": {type: "holiday", description: "Holiday"},
    "2024-09-29": {type: "holiday", description: "Holiday"},
    "2024-10-02": {type: "event", description: "Gandhi Jayanti"},
    "2024-10-05": {type: "holiday", description: "Holiday"},
    "2024-10-06": {type: "holiday", description: "Holiday"},
    "2024-10-11": {type: "event", description: "Ayutha Pooja"},
    "2024-10-12": {type: "event", description: "Vijayadashami"},
    "2024-10-13": {type: "holiday", description: "Holiday"},
    "2024-10-20": {type: "holiday", description: "Holiday"},
    "2024-10-27": {type: "holiday", description: "Holiday"},
    "2024-10-31": {type: "event", description: "Deepavali"},
    "2024-11-03": {type: "holiday", description: "Holiday"},
    "2024-11-10": {type: "holiday", description: "Holiday"},
}; */