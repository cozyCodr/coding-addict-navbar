const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


//Event Listeners
navToggle.addEventListener('click', function () {
    console.clear()
    links.classList.toggle('show-links');
    console.log(links.classList)

})
