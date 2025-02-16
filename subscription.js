document.addEventListener('DOMContentLoaded', () => {
    const subscriptionButtons = document.querySelectorAll('.subscription-button');
    
    subscriptionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Optional: Hier könnte man das gewählte Abo speichern
            window.location.href = 'index.html';
        });
    });
}); 