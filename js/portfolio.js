function portfolioSlider() {
    var sliderGrid = document.querySelector(".portfolio__slider__grid");
    var items = Array.from(document.querySelectorAll(".portfolio__slider__item"));

    function moveForward() {
        var firstItem = items.shift();
        items.push(firstItem);
        renderSlider();
    }

    function moveBackward() {
        var lastItem = items.pop();
        items.unshift(lastItem);
        renderSlider();
    }

    function renderSlider() {
        sliderGrid.innerHTML = ''; 
        items.forEach(function(item) { 
            sliderGrid.appendChild(item);
        });
    }

    document.getElementById("portfolio__arrow__prev").addEventListener("click", moveBackward);
    document.getElementById("portfolio__arrow__next").addEventListener("click", moveForward);

    renderSlider();
}

// Вызываем функцию после загрузки DOM
document.addEventListener("DOMContentLoaded", portfolioSlider);

