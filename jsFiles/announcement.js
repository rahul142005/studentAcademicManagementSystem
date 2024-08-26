document.querySelectorAll('[data-modal-target]').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.querySelector(btn.dataset.modalTarget);
        modal.style.display = 'block';
    });
});

document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});