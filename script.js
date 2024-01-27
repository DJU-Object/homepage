document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;
    let scrollingUp = false;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 스크롤 방향 확인
        scrollingUp = scrollTop < lastScrollTop;

        // 스크롤 다운 시 네비게이션 숨김
        if (scrollingUp) {
            nav.classList.remove('hidden');
        } else {
            nav.classList.add('hidden');
        }

        // 현재 섹션 식별 및 네비게이션 업데이트
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollTop >= sectionTop - sectionHeight / 2) {
                const currentSection = section.getAttribute('id');
                updateNavLinks(currentSection);
            }
        });

        // 스크롤이 최상단에 도달하면 fixed 상태로 변경
        if (scrollTop <= 0) {
            nav.style.position = 'fixed';
        } else {
            nav.style.position = scrollingUp ? 'fixed' : 'absolute';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    function updateNavLinks(currentSection) {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }
});