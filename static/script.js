function updateCountdown() {
    const targetDate = new Date('January 20, 2029 12:00:00 EST');
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.querySelector('.countdown-container').innerHTML = `
            <div class="countdown">he's gone!</div>
            <div class="disclaimer">this website hasn't been updated since jan 21 2025 so it may be inaccurate if the dictator somehow goes again or we get another fascist</div>
            <div class="disclaimer"> i might update this again if there's another in 2029</div>
        `;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const milliseconds = diff % 1000;

    let primaryDisplay = '';
    if (days > 31) {
        primaryDisplay = `${days} days`;
    } else if (days > 0) {
        primaryDisplay = `${days} days ${hours} hours`;
    } else if (hours > 0) {
        primaryDisplay = `${hours} hours ${minutes} minutes`;
    } else if (minutes > 10) {
        primaryDisplay = `${minutes} minutes ${seconds} seconds`;
    } else {
        primaryDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    }

    const secondaryDisplay = `or ${days} days and ${hours} hours`;
    const thirdDisplay = `or ${days} days, ${hours} hours, and ${minutes} minutes`;
    const fourthDisplay = `or ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, and ${milliseconds}ms`;
    document.getElementById('primary').textContent = primaryDisplay;
    document.getElementById('secondary').textContent = secondaryDisplay;
    document.getElementById('third').textContent = thirdDisplay;
    document.getElementById('fourth').textContent = fourthDisplay;

}
updateCountdown();
setInterval(updateCountdown, 10);
// sorry for bad code lol :3