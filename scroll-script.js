
const buttonLeft_kr = document.getElementById('slide_left_kr');
const buttonRight_kr = document.getElementById('slide_right_kr');
const poster_kr = document.getElementById('poster_kr');

const buttonLeft_for = document.getElementById('slide_left_for');
const buttonRight_for = document.getElementById('slide_right_for');
const poster_for = document.getElementById('poster_for');

const slide_interval = 380;


//페이지 로드시 버튼 업데이트
window.onload = function() {
    const right_margin_kr = poster_kr.scrollWidth - poster_kr.clientWidth;
    const right_margin_for = poster_for.scrollWidth - poster_for.clientWidth;

    //왼쪽 스크롤 버튼은 필요 없음
    buttonLeft_kr.style.visibility = "hidden";
    buttonLeft_for.style.visibility = "hidden";

    //오른쪽 스크롤은 오른쪽 남은 공간이 없으면 필요없음
    if (right_margin_kr === 0) {
        buttonRight_kr.style.visibility = "hidden";
    }
    if (right_margin_for === 0) {
        buttonRight_for.style.visibility = "hidden";
    }
}

//페이지 크기 변경시 버튼 업데이트
function updateScrollButtonVisibility() {
    const right_margin_kr = poster_kr.scrollWidth - poster_kr.clientWidth;
    const right_margin_for = poster_for.scrollWidth - poster_for.clientWidth;

    if (poster_kr.scrollLeft === 0) {
        buttonLeft_kr.style.visibility = "hidden";
    } else {
        buttonLeft_kr.style.visibility = "visible";
    }

    if (right_margin_kr === 0) {
        buttonRight_kr.style.visibility = "hidden";
    } else {
        buttonRight_kr.style.visibility = "visible";
    }

    if (poster_for.scrollLeft === 0) {
        buttonLeft_for.style.visibility = "hidden";
    } else {
        buttonLeft_for.style.visibility = "visible";
    }

    if (right_margin_for === 0) {
        buttonRight_for.style.visibility = "hidden";
    } else {
        buttonRight_for.style.visibility = "visible";
    }
}
window.addEventListener('resize', updateScrollButtonVisibility);


// 한국 컨텐츠 좌측 슬라이드
buttonLeft_kr.onclick = function () {

    if (poster_kr.scrollLeft <= slide_interval) {
        buttonLeft_kr.style.visibility = "hidden";
    }
    buttonRight_kr.style.visibility = "visible";

    poster_kr.scrollTo({
        left: poster_kr.scrollLeft - slide_interval,
        behavior: "smooth",
    });
};
// 한국 컨텐츠 우측 슬라이드
buttonRight_kr.onclick = function () {
    const right_margin_kr = poster_kr.scrollWidth - (poster_kr.clientWidth + slide_interval);

    if (right_margin_kr <= slide_interval) {
        buttonRight_kr.style.visibility = "hidden";
    }
    buttonLeft_kr.style.visibility = "visible";

    poster_kr.scrollTo({
        left: poster_kr.scrollLeft + slide_interval,
        behavior: "smooth",
    });
};



// 해외 컨텐츠 좌측 슬라이드
buttonLeft_for.onclick = function () {

    if (poster_for.scrollLeft <= slide_interval) {
        buttonLeft_for.style.visibility = "hidden";
    }
    buttonRight_for.style.visibility = "visible";

    poster_for.scrollTo({
        left: poster_for.scrollLeft - slide_interval,
        behavior: "smooth",
    });

};
// 해외 컨텐츠 우측 슬라이드
buttonRight_for.onclick = function () {
    const right_margin_for = poster_for.scrollWidth - (poster_for.clientWidth + slide_interval);

    if (right_margin_for <= slide_interval) {
        buttonRight_for.style.visibility = "hidden";
    }
    buttonLeft_for.style.visibility = "visible";

    poster_for.scrollTo({
        left: poster_for.scrollLeft + slide_interval,
        behavior: "smooth",
    });
};