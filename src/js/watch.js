document.addEventListener('DOMContentLoaded', () => {
    const moreText = document.querySelector('#more');
    const dots = document.querySelector('#dots');
    const readBtn = document.querySelector('#myBtn');
    if(moreText && dots && readBtn) {
        moreText.style.display = 'none'
        dots.style.display = 'inline'

        readBtn.addEventListener('click', () => {
            const isHidden = moreText.style.display === 'none';

            moreText.style.display = isHidden ? 'inline' : 'none';
            dots.style.display = isHidden ? 'none' : 'inline';
            readBtn.textContent = isHidden ? 'عرض عناصر أقل' : 'عرض المزيد';
        })
    }

    document.querySelectorAll('.reply').forEach(btn => {
        const row = btn.closest('.row');
        const repliesCard = row ? row.nextElementSibling : null;
        if(repliesCard) {
            repliesCard.style.display = 'none';

            btn.addEventListener('click', () => {
                repliesCard.style.display = repliesCard.style.display === 'none' ? 'block' : 'none';
            })
        }
    })
})