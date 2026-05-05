const playBtns = document.querySelectorAll('.play-btn');

playBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const audio = this.nextElementSibling;
        if (audio.paused) {
            audio.play();
            this.textContent = 'Pause';
        } else {
            audio.pause();
            this.textContent = 'Play';
        }
    });
});
