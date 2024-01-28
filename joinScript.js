document.getElementById('joinus').addEventListener('click', function () {
    var joinUsPage = document.querySelector('.join-us-page');
    joinUsPage.style.display = (joinUsPage.style.display === 'none' || joinUsPage.style.display === '') ? 'block' : 'none';
});