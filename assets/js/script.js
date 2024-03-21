let navLinks = document.querySelectorAll('a.inner-link');

navLinks.forEach((item) => {
    item.addEventListener('click', function () {
        console.log(item)
        document.querySelector('nav ul li a.active').classList.remove('active')
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active')
        document.querySelector('main > section.active').classList.remove('active')
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
    })
})



document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function () {
    document.querySelector('#sidebar').classList.toggle('open')
})



var options = {
    strings: ['Java Full Stack Developer', 'Front-End developer', 'Back-End developer'],
    loop: true,
    typeSpeed: 70,
    backSpeed: 10
};

new Typed('.field h2', options);




function workFilter() {
    const clickedButton = event.currentTarget;
    const clickedButtonGroup = clickedButton.getAttribute('data-group');
    const activeButton = document.querySelector('#my_work .filters button.active');

    activeButton.classList.remove('active');
    clickedButton.classList.add("active");

    shuffleInstance.filter(clickedButtonGroup)
}

var workModal = new bootstrap.Modal(document.getElementById('workModal'))
const workElements = document.querySelectorAll("#my_work .work-items .wrap");


var workModalElement = document.getElementById('workModal')
workModalElement.addEventListener('show.bs.modal', function (event) {
    document.getElementById('my_work').classList.add('blur');
    document.getElementById('sidebar').classList.add('blur');
})

workModalElement.addEventListener('hide.bs.modal', function (event) {
    document.getElementById('my_work').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
})




let contactFromItems = document.querySelectorAll('#contact_me .form input, #contact_me .form textarea');

contactFromItems.forEach((item) => {
    item.addEventListener('focus', function () {
        item.parentElement.classList.add('focus')
    })

    item.addEventListener('blur', function () {
        if (!item.value) {
            item.parentElement.classList.remove('focus')
        }
    })
})





function toggleMode() {
    let theme = document.querySelector('html').getAttribute('theme');

    if(theme == "dark") {
        theme = "light";
        new Audio('./assets/audio/light.wav').play()
    } else {
        theme = "dark";
        new Audio('./assets/audio/dark.wav').play()
    }

    document.querySelector('html').setAttribute("theme", theme)
}

