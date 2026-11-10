document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains("remove")) {
        const card = e.target.closest('.card');
        if(card) {
            card.style.display = 'none';
        }
    }
})