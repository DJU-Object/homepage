document.addEventListener('DOMContentLoaded', function () {
    // 버튼 요소들을 선택합니다.
    const characterButton = document.querySelector('.content:nth-child(1) button');
    const objectButton = document.querySelector('.content:nth-child(2) button');

    // 각 버튼에 클릭 이벤트 리스너를 추가합니다.
    characterButton.addEventListener('click', function () {
        window.location.href = 'https://dojang.io/mod/page/view.php?id=61';
    });

    objectButton.addEventListener('click', function () {
        window.location.href = 'https://product.kyobobook.co.kr/detail/S000001766367';
    });
});
