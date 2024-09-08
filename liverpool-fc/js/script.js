// Example data for key players
const players = [
    "Mohamed Salah",
    "Virgil van Dijk",
    "Alisson Becker",
    "Trent Alexander-Arnold",
    "Jordan Henderson"
];

// Function to dynamically load players
function loadPlayers() {
    const playersList = document.getElementById('players-list');
    if (playersList) {
        players.forEach(player => {
            const listItem = document.createElement('li');
            listItem.textContent = player;
            playersList.appendChild(listItem);
        });
    }
}

// Handle form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        document.getElementById('confirmation').style.display = 'block'; // Show confirmation message
        contactForm.reset(); // Clear form
    });
}

// Call loadPlayers on page load
document.addEventListener('DOMContentLoaded', loadPlayers);
