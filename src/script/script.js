const btnShare = document.querySelector('.btn-share');
const socialMediasSection = document.querySelector('.social-medias');

btnShare.addEventListener('click', (event) => {
    event.stopPropagation();
    btnShare.classList.toggle('btn-active');
    socialMediasSection.classList.toggle('social-medias-on');
});

document.addEventListener('click', (event) => {
    const isClickInsideSocialMedias = socialMediasSection.contains(event.target);
    const isClickOnButton = btnShare.contains(event.target);

    // Se a seção estiver aberta e o clique for fora dela e do botão
    if (socialMediasSection.classList.contains('social-medias-on') && 
        !isClickInsideSocialMedias && 
        !isClickOnButton) {
        socialMediasSection.classList.remove('social-medias-on');
        btnShare.classList.remove('btn-active');
    }
});