const attendanceData = {
    month: "August 2024",
    daysPresent: 20,
    daysAbsent: 11,
    totalDays: 31,
    monthlyPercentage: 64.52,
    overallPercentage: 80.0,
    periodsAbsent: [1, 0, 2, 1, 0, 0],
    semesterData: {
        totalDaysPresent: 120,
        totalDaysAbsent: 30,
        totalDays: 150,
        totalPercentage: 80.0
    },
    monthlyData: {
        June: {
            daysPresent: 22,
            daysAbsent: 8,
            totalDays: 30,
            monthlyPercentage: 73.33
        },
        July: {
            daysPresent: 25,
            daysAbsent: 6,
            totalDays: 31,
            monthlyPercentage: 80.65
        },
        August: {
            daysPresent: 20,
            daysAbsent: 11,
            totalDays: 31,
            monthlyPercentage: 64.52
        },
        September: {
            daysPresent: 18,
            daysAbsent: 12,
            totalDays: 30,
            monthlyPercentage: 60.00
        },
        October: {
            daysPresent: 21,
            daysAbsent: 10,
            totalDays: 31,
            monthlyPercentage: 67.74
        },
        November: {
            daysPresent: 23,
            daysAbsent: 7,
            totalDays: 30,
            monthlyPercentage: 76.67
        }
    }
};

document.getElementById('days-present-August').textContent = attendanceData.monthlyData.August.daysPresent;
document.getElementById('days-absent-August').textContent = attendanceData.monthlyData.August.daysAbsent;
document.getElementById('total-days-August').textContent = attendanceData.monthlyData.August.totalDays;
document.getElementById('month-percentage-August').textContent = attendanceData.monthlyData.August.monthlyPercentage + '%';

Object.keys(attendanceData.monthlyData).forEach(month => {
    document.getElementById(`days-present-${month}`).textContent = attendanceData.monthlyData[month].daysPresent;
    document.getElementById(`days-absent-${month}`).textContent = attendanceData.monthlyData[month].daysAbsent;
    document.getElementById(`total-days-${month}`).textContent = attendanceData.monthlyData[month].totalDays;
    document.getElementById(`month-percentage-${month}`).textContent = attendanceData.monthlyData[month].monthlyPercentage + '%';
});

document.getElementById('total-present-semester').textContent = attendanceData.semesterData.totalDaysPresent;
document.getElementById('total-absent-semester').textContent = attendanceData.semesterData.totalDaysAbsent;
document.getElementById('total-days-semester').textContent = attendanceData.semesterData.totalDays;
document.getElementById('total-percentage-semester').textContent = attendanceData.semesterData.totalPercentage + '%';

function toggleSemesterReport() {
    const semesterDetails = document.getElementById('semester-details');
    semesterDetails.style.display = semesterDetails.style.display === 'none' ? 'block' : 'none';
    renderSemesterChart();
}

function toggleMonthlyReport(month) {
    const report = document.getElementById(`${month}-report`);
    report.style.display = report.style.display === 'none' ? 'block' : 'none';
    renderMonthlyChart(month);
}

function renderSemesterChart() {
    const ctx = document.getElementById('semester-chart').getContext('2d');
    const totalPresent = attendanceData.semesterData.totalDaysPresent;
    const totalAbsent = attendanceData.semesterData.totalDaysAbsent;

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Days Present', 'Days Absent'],
            datasets: [{
                data: [totalPresent, totalAbsent],
                backgroundColor: ['#16a085', '#e74c3c'],
            }]
        }
    });
}

function renderMonthlyChart(month) {
    const ctx = document.getElementById(`monthly-chart-${month}`).getContext('2d');
    const daysPresent = attendanceData.monthlyData[month].daysPresent;
    const daysAbsent = attendanceData.monthlyData[month].daysAbsent;

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Days Present', 'Days Absent'],
            datasets: [{
                data: [daysPresent, daysAbsent],
                backgroundColor: ['#16a085', '#e74c3c'],
            }]
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSemesterChart();
});
