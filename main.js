const menu = document.querySelector('.menu')
const list = document.querySelector('.list')
const body = document.querySelector('body')

menu.addEventListener('click', () => {
  list.classList.toggle('active')
  menu.classList.toggle('openmenu')
  body.classList.toggle('hidden')
})

const links = document.querySelectorAll('ul li a')
for (const link of links) {
  link.addEventListener('click', () => {
    list.classList.remove('active')
    menu.classList.remove('openmenu')
    body.classList.remove('hidden')
  })
}


/* typed */

$(document).ready(function () {
  var typed = new Typed('.typing', {
    strings: ['Pro-Player', "Suporte", 'Liquid', 'Streamer', 'YouTuber'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
})


/* swiper */


var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1300: {
      slidesPerView: 3,
      spaceBetween: 20
    }


  }
});


/* buttontop */
const buttonTop = document.querySelector('.buttonTop')


function showButtonTop() {
  if (window.scrollY > 500) {
    buttonTop.classList.add('show')
  } else {
    buttonTop.classList.remove('show')
  }

}

/* scroll */

const header = document.getElementById('header')

window.addEventListener('scroll', () => {
  showButtonTop()
  headerScroll()
})


buttonTop.onclick = () => {
  window.scroll({
    top: 0
  })
}

function headerScroll() {
  if (window.scroll > 0) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}



/* animation scrool */


const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75)
  target.forEach((e) => {
    if (windowTop > e.offsetTop) {
      e.classList.add(animationClass)
    } else {
      e.classList.remove(animationClass)
    }

  })
}



/* form */
/*  */

const form = document.getElementById('form')


form.addEventListener('submit', (event) => {
  event.preventDefault()

  const nome = document.querySelector('.inputNome').value
  const email = document.querySelector('.inputEmail').value
  const title = document.querySelector('.inputTitle').value
  const message = document.querySelector('textarea').value

  const textAlert = document.getElementById('textAlert')

  if (nome === '' || email === "" || title === "" || message === "") {
    textAlert.innerText = "Preencha todos os campos corretamente"
    textAlert.style.color = 'red'
  } else {


    textAlert.innerText = "Mensagem enviada"
    textAlert.style.color = 'green'


    textAlert.style.opacity = 1
    setTimeout(function () {
      textAlert.style.opacity = 0
    }, 5000)


    document.querySelector('.inputNome').value = ''
    document.querySelector('.inputEmail').value = ''
    document.querySelector('.inputTitle').value = ''
    document.querySelector('textarea').value = ''
  }


})


