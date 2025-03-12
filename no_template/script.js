function countdown() {
    const engagementDate = new Date('April 30, 2025 10:16:00').getTime();
    const weddingDate = new Date('June 8, 2025 08:39:00').getTime();

    const now = new Date().getTime();

    const engagementTimeLeft = engagementDate - now;
    const weddingTimeLeft = weddingDate - now;

    if (engagementTimeLeft <= 0) {
        document.getElementById('engagement-timer').innerText = '0:00:00:00';
    } else {
        const engagementDays = Math.floor(engagementTimeLeft / (1000 * 60 * 60 * 24));
        const engagementHours = Math.floor((engagementTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const engagementMinutes = Math.floor((engagementTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const engagementSeconds = Math.floor((engagementTimeLeft % (1000 * 60)) / 1000);

        document.getElementById('engagement-timer').innerText = `${engagementDays}:${engagementHours.toString().padStart(2, '0')}:${engagementMinutes.toString().padStart(2, '0')}:${engagementSeconds.toString().padStart(2, '0')}`;
    }

    if (weddingTimeLeft <= 0) {
        document.getElementById('wedding-timer').innerText = '0:00:00:00';
    } else {
        const weddingDays = Math.floor(weddingTimeLeft / (1000 * 60 * 60 * 24));
        const weddingHours = Math.floor((weddingTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const weddingMinutes = Math.floor((weddingTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const weddingSeconds = Math.floor((weddingTimeLeft % (1000 * 60)) / 1000);

        document.getElementById('wedding-timer').innerText = `${weddingDays}:${weddingHours.toString().padStart(2, '0')}:${weddingMinutes.toString().padStart(2, '0')}:${weddingSeconds.toString().padStart(2, '0')}`;
    }

    setTimeout(countdown, 1000);
}

countdown();
