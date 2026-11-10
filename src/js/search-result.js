document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('#search-filter-icon');
    const filterRow = document.querySelector('.filter-row');
    if(toggleBtn && filterRow) {
        filterRow.style.display = 'none'

        toggleBtn.addEventListener('click', () => {
            const isHidden = filterRow.style.display === 'none';

            filterRow.style.display = isHidden ? 'flex' : 'none';
        })
    }

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(box => {
        box.addEventListener('change', (e) => {
            if(e.target.checked) {
                const groupName = e.target.name;
                const group = document.querySelectorAll(`input[name='${groupName}']`);

                group.forEach(item => {
                    if(item !== e.target) item.checked = false;
                })
            }
        })
    })
})