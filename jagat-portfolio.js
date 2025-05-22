let tabLinks = document.querySelectorAll('.tab-links');
let tabContent = document.querySelectorAll('.tab-content');

tabLinks.forEach((link, i) => {
    link.addEventListener('click', () => {
        /*remove active-link class from each tab*/
        tabLinks.forEach(tab => tab.classList.remove('active-link'));

        /*remove content of each tab-content.*/
        tabContent.forEach(content => content.classList.remove('active-tab'));

        /* apply active property to click link.*/
        link.classList.add('active-link');
        tabContent[i].classList.add('active-tab');
    });
});