export const initializeSlider = () => {
    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
    const imgContainer = document.querySelector('.aspect-ratio-169');
    const dotItem = document.querySelectorAll(".dot");
    const header = document.querySelector(".header-style");
    let imgNumber = imgPosition.length;
    let index = 0;

    imgPosition.forEach(function (image, idx) {
        image.style.left = idx * 100 + "%";
        dotItem[idx].addEventListener("click", function () {
            slider(idx);
        });
    });

    function imgSlide() {
        index++;
        if (index >= imgNumber) {
            index = 0;
        }
        slider(index);
    }

    function slider(idx) {
        imgContainer.style.left = "-" + idx * 100 + "%";
        const dotActive = document.querySelector(".active");
        dotActive.classList.remove("active");
        dotItem[idx].classList.add("active");
    }

    setInterval(imgSlide, 3000);

    window.addEventListener("scroll", function () {
        const x = window.pageYOffset;
        if (x > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
};
