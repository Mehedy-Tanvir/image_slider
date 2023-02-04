const imageContainer = document.querySelector('.image-container');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const Imgs = document.querySelectorAll('img');
let currentImg = 1;
let timeout;

btnNext.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();

});
btnPrev.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();

});
updateImg();
function updateImg() {
    if (currentImg > Imgs.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = Imgs.length;
    }
    imageContainer.style.transform = `translateX(-${500 * (currentImg - 1)}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();

    }, 3000)
};
