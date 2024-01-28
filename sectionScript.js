document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    function checkScroll() {
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // 종료 지점에 도착하면 모든 section을 in-view 클래스로 설정
            if (scrollTop + window.innerHeight >= document.body.offsetHeight) {
                section.classList.add('in-view');
            } else if (scrollTop >= sectionTop - sectionHeight / 2) {
                section.classList.add('in-view');
            } else {
                section.classList.remove('in-view');
            }
        });
    }

    // 스크롤 이벤트에 따라 checkScroll 함수 호출
    window.addEventListener('scroll', checkScroll);

    // 페이지 로드 시 초기 체크
    checkScroll();
});