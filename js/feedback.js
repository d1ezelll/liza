let isSwiping = false;
let startX, startY;

const feedbackCardsWrapper = document.querySelector('.feedback__card');

function startSwiping(event) {
    isSwiping = true;
    startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    startY = event.type.includes('touch') ? event.touches[0].clientY : event.clientY;
}

function moveSwiping(event) {
    if (!isSwiping) return;
    let currentX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    let currentY = event.type.includes('touch') ? event.touches[0].clientY : event.clientY;
    const distanceX = currentX - startX;
    const distanceY = currentY - startY;

    // Перелистывание карточек
    if (Math.abs(distanceX) > 100) { // Порог для начала перелистывания
        feedbackCardsWrapper.scrollLeft += distanceX / feedbackCardsWrapper.childElementCount;
    }
}

function endSwiping() {
    isSwiping = false;
}

// Обработчики событий для тач-сенсорных устройств
feedbackCardsWrapper.addEventListener('touchstart', startSwiping, false);
feedbackCardsWrapper.addEventListener('touchmove', moveSwiping, false);
feedbackCardsWrapper.addEventListener('touchend', endSwiping, false);

// Обработчики событий для мыши
feedbackCardsWrapper.addEventListener('mousedown', startSwiping, false);
feedbackCardsWrapper.addEventListener('mousemove', moveSwiping, false);
feedbackCardsWrapper.addEventListener('mouseup', endSwiping, false);
feedbackCardsWrapper.addEventListener('mouseleave', endSwiping, false);
