const Events = {
    "2024-06-21": {type: "Holiday", description: "Holiday"},
    "2024-06-28": {type: "Holiday", description: "Holiday"},
    "2024-06-29": {type: "Holiday", description: "Holiday"},
    "2024-07-05": {type: "Holiday", description: "Holiday"},
    "2024-07-06": {type: "Holiday", description: "Holiday"},
    "2024-07-13": {type: "Holiday", description: "Holiday"},
    "2024-07-16": {type: "Event", description: "Muharram"},
    "2024-07-19": {type: "Holiday", description: "Holiday"},
    "2024-07-20": {type: "Holiday", description: "Holiday"},
    "2024-07-27": {type: "Holiday", description: "Holiday"},
    "2024-08-02": {type: "Event", description: "Aadiperukku"},
    "2024-08-03": {type: "Holiday", description: "Holiday"},
    "2024-08-10": {type: "Holiday", description: "Holiday"},
    "2024-08-14": {type: "Event", description: "Independence Day"},
    "2024-08-16": {type: "Holiday", description: "Holiday"},
    "2024-08-17": {type: "Holiday", description: "Holiday"},
    "2024-08-24": {type: "Holiday", description: "Holiday"},
    "2024-08-25": {type: "Event", description: "Krishna Jayanti"},
    "2024-08-30": {type: "Holiday", description: "Holiday"},
    "2024-08-31": {type: "Holiday", description: "Holiday"},
    "2024-09-06": {type: "Event", description: "Vinayakar Chaturthi"},
    "2024-09-07": {type: "Holiday", description: "Holiday"},
    "2024-09-14": {type: "Holiday", description: "Holiday"},
    "2024-09-15": {type: "Event", description: "Milad-un-Nabi"},
    "2024-09-20": {type: "Holiday", description: "Holiday"},
    "2024-09-21": {type: "Holiday", description: "Holiday"},
    "2024-09-28": {type: "Holiday", description: "Holiday"},
    "2024-10-01": {type: "Event", description: "Gandhi Jayanti"},
    "2024-10-04": {type: "Holiday", description: "Holiday"},
    "2024-10-05": {type: "Holiday", description: "Holiday"},
    "2024-10-10": {type: "Event", description: "Ayutha Pooja"},
    "2024-10-11": {type: "Event", description: "Vijayadashami"},
    "2024-10-12": {type: "Holiday", description: "Holiday"},
    "2024-10-19": {type: "Holiday", description: "Holiday"},
    "2024-10-26": {type: "Holiday", description: "Holiday"},
    "2024-10-30": {type: "Event", description: "Deepavali"},
    "2024-11-02": {type: "Holiday", description: "Holiday"},
    "2024-11-09": {type: "Holiday", description: "Holiday"},
};

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).replace(' ', 'th ').replace(/(\d{1,2})(th|st|nd|rd)/, '$1$2 ');
}

function getNextEvent(events) {
    const today = new Date().toISOString().split('T')[0];
    const upcomingDates = Object.keys(events).filter(date => date >= today).sort();
    
    if (upcomingDates.length > 0) {
        const nextEventDate = upcomingDates[0];
        const event = events[nextEventDate];
        const formattedDate = formatDate(nextEventDate);
        return `${event.type} - ${formattedDate}`;
    } else {
        return "No upcoming events";
    }
}

document.getElementById("event-details").innerHTML = getNextEvent(Events);