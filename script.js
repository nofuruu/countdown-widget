function updateClock(){
    let now = new Date();

    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    let options = {weekday: 'short', day: '2-digit', month: 'short'};
    let formattedDate = now.toLocaleDateString('en-GB', options).split('');
    
    document.getElementById("date").textContent = `${formattedDate[1]} ${formattedDate[2]}`;
    document.getElementById("day").textContent = formattedDate[0];

    let startOfYear = new date(now.getFullYear(), 0, 1);
    let days = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
    let week = Math.cell((days + startOfYear.getDay() + 1) / 7);

    document.getElementById("week").textContent = week;
    document.getElementById("dayNum").textContent = now.getDate()
}

setInterval(updateClock, 1000);
updateClock();