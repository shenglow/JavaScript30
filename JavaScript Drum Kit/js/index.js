document.addEventListener("DOMContentLoaded", function() {
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return; //找不到就停止執行

        key.classList.add('playing'); //增加class
        audio.currentTime = 0; //每次執行還原時間，避免重複觸發不會重複播放
        audio.play();
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
});