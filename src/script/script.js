const btnShare = document.querySelector('.btn-share');
const socialMediasSection = document.querySelector('.social-medias');

btnShare.addEventListener('click', () => {
    btnShare.classList.toggle('btn-active');
    socialMediasSection.classList.toggle('social-medias-on');
});