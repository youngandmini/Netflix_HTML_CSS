
const buttonLeft_kr = document.getElementById('slide_left_kr');
const buttonRight_kr = document.getElementById('slide_right_kr');
const poster_kr = document.getElementById('poster_kr');

const buttonLeft_for = document.getElementById('slide_left_for');
const buttonRight_for = document.getElementById('slide_right_for');
const poster_for = document.getElementById('poster_for');

const slide_interval = 380;

// 페이지 로드 시 left 버튼은 안보이게
window.onload = function() {
    buttonLeft_kr.style.display = "none";
    buttonLeft_for.style.display = "none";
}


// 한국 컨텐츠 슬라이드
buttonLeft_kr.onclick = function () {

    if (poster_kr.scrollLeft - slide_interval <= 0) {
        buttonLeft_kr.style.display = "none";
    }
    buttonRight_kr.style.display = "";

    poster_kr.scrollTo({
        left: poster_kr.scrollLeft - slide_interval,
        behavior: "smooth",
    });
};

buttonRight_kr.onclick = function () {
    const maxScrollLeft = poster_kr.scrollWidth - poster_kr.clientWidth;

    if (poster_kr.scrollLeft + slide_interval >= maxScrollLeft) {
        buttonRight_kr.style.display = "none";
    }
    buttonLeft_kr.style.display = "";

    poster_kr.scrollTo({
        left: poster_kr.scrollLeft + slide_interval,
        behavior: "smooth",
    });
};



// 해외 컨텐츠 슬라이드
buttonLeft_for.onclick = function () {

    if (poster_for.scrollLeft - slide_interval <= 0) {
        buttonLeft_for.style.display = "none";
    }
    buttonRight_for.style.display = "";

    poster_for.scrollTo({
        left: poster_for.scrollLeft - slide_interval,
        behavior: "smooth",
    });

};

buttonRight_for.onclick = function () {
    const maxScrollLeft = poster_for.scrollWidth - poster_for.clientWidth;

    if (poster_for.scrollLeft + slide_interval >= maxScrollLeft) {
        buttonRight_for.style.display = "none";
    }
    buttonLeft_for.style.display = "";

    poster_for.scrollTo({
        left: poster_for.scrollLeft + slide_interval,
        behavior: "smooth",
    });
};