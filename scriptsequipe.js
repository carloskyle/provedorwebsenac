// Adiciona um efeito de zoom nas fotos ao passar o mouse
document.querySelectorAll('.membro-equipe img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});