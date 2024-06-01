function calculateLifeExpectancy() {
    const age = parseInt(document.getElementById('ageInput').value);
    const lifespan = parseInt(document.getElementById('lifespanInput').value);

    if (isNaN(age) || age < 0 || isNaN(lifespan) || lifespan <= age) {
        document.getElementById('results').innerHTML = "Please enter valid age and expected lifespan.";
        return;
    }

    const yearsLeft = lifespan - age;
    const daysLeft = yearsLeft * 365;
    const leapDays = Math.floor(yearsLeft / 4);
    const totalDaysLeft = daysLeft + leapDays;
    const weeksLeft = Math.floor(totalDaysLeft / 7);
    const mondaysLeft = weeksLeft;

    document.getElementById('results').innerHTML = `
        <p>Years left: ${yearsLeft}</p>
        <p>Weeks left: ${weeksLeft}</p>
        <p>Days left: ${totalDaysLeft}</p>
        <p>Mondays left: ${mondaysLeft}</p>
    `;
}
