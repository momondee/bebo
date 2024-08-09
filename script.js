document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const surprise = document.getElementById('surprise');
    
    revealButton.addEventListener('click', function() {
        surprise.classList.toggle('show');
    });
});
