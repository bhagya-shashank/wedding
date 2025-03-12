function countdown() {
    const engagementDate = new Date('April 30, 2025 10:16:00').getTime();
    const weddingDate = new Date('June 8, 2025 08:39:00').getTime();

    const now = new Date().getTime();

    const engagementTimeLeft = engagementDate - now;
    const weddingTimeLeft = weddingDate - now;

    if (engagementTimeLeft <= 0) {
        document.getElementById('engagement-days').innerText = 0;
        document.getElementById('engagement-hours').innerText = 0;
        document.getElementById('engagement-minutes').innerText = 0;
        document.getElementById('engagement-seconds').innerText = 0;
    } else {
        const engagementDays = Math.floor(engagementTimeLeft / (1000 * 60 * 60 * 24));
        const engagementHours = Math.floor((engagementTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const engagementMinutes = Math.floor((engagementTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const engagementSeconds = Math.floor((engagementTimeLeft % (1000 * 60)) / 1000);

        document.getElementById('engagement-days').innerText = engagementDays;
        document.getElementById('engagement-hours').innerText = engagementHours.toString().padStart(2, '0');
        document.getElementById('engagement-minutes').innerText = engagementMinutes.toString().padStart(2, '0');
        document.getElementById('engagement-seconds').innerText = engagementSeconds.toString().padStart(2, '0');
    }

    if (weddingTimeLeft <= 0) {
        document.getElementById('wedding-days').innerText = 0;
        document.getElementById('wedding-hours').innerText = 0;
        document.getElementById('wedding-minutes').innerText = 0;
        document.getElementById('wedding-seconds').innerText = 0;
    } else {
        const weddingDays = Math.floor(weddingTimeLeft / (1000 * 60 * 60 * 24));
        const weddingHours = Math.floor((weddingTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const weddingMinutes = Math.floor((weddingTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const weddingSeconds = Math.floor((weddingTimeLeft % (1000 * 60)) / 1000);

        document.getElementById('wedding-days').innerText = weddingDays;
        document.getElementById('wedding-hours').innerText = weddingHours.toString().padStart(2, '0');
        document.getElementById('wedding-minutes').innerText = weddingMinutes.toString().padStart(2, '0');
        document.getElementById('wedding-seconds').innerText = weddingSeconds.toString().padStart(2, '0');
    }

    setTimeout(countdown, 1000);
}

countdown();
