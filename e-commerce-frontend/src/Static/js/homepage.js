export const initializeSlider = () => {
    // Truy vấn các phần tử DOM
    const imgContainer = document.querySelector('.aspect-ratio-169');
    if (!imgContainer) {
        console.error('Không tìm thấy imgContainer');
        return;
    }

    const imgPosition = imgContainer.querySelectorAll('.home-slider-img');
    if (imgPosition.length === 0) {
        console.error('Không tìm thấy hình ảnh trong imgContainer');
        return;
    }

    const dotItem = document.querySelectorAll(".dot");
    if (dotItem.length === 0) {
        console.error('Không tìm thấy dot items');
        return;
    }

    const header = document.querySelector(".header-style");
    if (!header) {
        console.error('Không tìm thấy Header');
    }

    let imgNumber = imgPosition.length;
    let index = 0;

    // Đặt vị trí hình ảnh
    imgPosition.forEach((image, idx) => {
        image.style.left = idx * 100 + "%";
        dotItem[idx].addEventListener("click", () => slider(idx));
    });

    // Hàm để chuyển hình ảnh
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function imgSlide() {
        index++;
        if (index >= imgNumber) {
            index = 0;
        }
        slider(index);
        await delay(100);
    }

    // Hàm để cập nhật slider và dot
    function slider(idx) {
        imgContainer.style.left = "-" + idx * 100 + "%";
        const dotActive = document.querySelector(".dot.active");
        if (dotActive) {
            dotActive.classList.remove("active");
        }
        dotItem[idx].classList.add("active");
    }

    // Chuyển hình ảnh tự động sau mỗi 4 giây
    setInterval(imgSlide, 4000);

    // Xử lý khi cuộn trang
    // window.addEventListener("scroll", () => {
    //     const x = window.pageYOffset;
    //     if (header) {
    //         header.classList.toggle("sticky", x > 0);
    //     }
    // });
};
