

const posterSection = document.querySelector('.poster-section');

function updatePosterSectionPosition() {
    const width = window.innerWidth;
    const top = width * 0.41;
    posterSection.style.top = `${top}px`;
}

// 초기 로드시 박스 위치 설정
updatePosterSectionPosition();

// 창 크기 변경 이벤트 감지
window.addEventListener('resize', updatePosterSectionPosition);
