const tabButtons = document.querySelectorAll('.tab-button');
const sectionContents = document.querySelectorAll('.section-content');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        sectionContents.forEach(content => content.style.display = 'none');
        
        button.classList.add('active');
        sectionContents[index].style.display = 'block';
    });
});






document.querySelector('.menu-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('show');
});

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('show');
});
