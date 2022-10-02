const mobileMenu = document.querySelector('.header__mobile')
const menuBtn = document.querySelector('.header__burger')

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__mobile_active')
})

const swiperReviews = new Swiper('.reviews__container', {
  // Initializing Swiper for the Reviews block
  wrapperClass: 'reviews__wrapper',
  slideClass: 'reviews__slide',
  slideActiveClass: 'reviews__slide_type_active',

  spaceBetween: 50,
  // Indent between slides

  slidesPerView: 1,
  // Number of slides displayed

  slidesPerGroup: 1,
  // Number of slides to scroll through

  // Scroll through the arrows endlessly
  loop: true,

  speed: 1000,
  // Switching speed

  centeredSlides: true,
  // Active slide in the center

  initialSlide: 0,
  // Index of the active slide

  navigation: {
    // Arrows
    nextEl: '.reviews__next-button',
    prevEl: '.reviews__prev-button'
  },

  pagination: {
    // Navigation
    // Bullets, current position
    el: '.reviews__pagination',
    bulletClass: 'reviews__bullet',
    bulletActiveClass: 'reviews__bullet_type_active',
    // Bullets
    clickable: true,
    dynamicBullets: false
  },

  slideToClickedSlide: true,
  // Navigate through slides by clicking on the next one

  simulateTouch: true,
  // Enabling /disabling dragging on the desktop
  // (also includes the ability to switch to another slide by clicking on it)

  touchRatio: 1,
  // Swipe sensitivity

  touchAngle: 45,
  // Swipe trigger angle

  breakpoints: {
    // Breakpoints for adaptive
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1
    },
    1440: {
      slidesPerView: 2,
      slidesPerGroup: 1
    }
  }
})

// Initializing Swiper for the Feedback block
const swiperFeedback = new Swiper('.feedback__container', {
  // Initializing Swiper for the Feedback block
  wrapperClass: 'feedback__wrapper',
  slideClass: 'feedback__slide',
  spaceBetween: 30,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  speed: 1000,
  initialSlide: 0,
  slideToClickedSlide: true,
  keyboard: true,
  navigation: {
    nextEl: '.feedback__next-button',
    prevEl: '.feedback__prev-button'
  },
  pagination: {
    el: '.feedback__pagination',
    bulletClass: 'feedback__bullet',
    bulletActiveClass: 'feedback__bullet_type_active',
    clickable: true
  },
  watchOverflow: true,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  }
})

function createCardReviews (cardData) {
  // the function of creating a new slide in the Feedback
  const cardTemplate = document.querySelector('#slideReviews-template').content
  const cardElement = cardTemplate
    .querySelector('.reviews__slide')
    .cloneNode(true)
  // creating a slide in the Reviews block using a template
  cardElement.querySelector('.card__image').src = cardData.image
  cardElement.querySelector('.card__text').textContent = cardData.text

  cardElement
    .querySelector('.card__readmore')
    .addEventListener('click', evt => {
      // creating a listener for the event of clicking on the "Read in full" button in the card
      console.log('just clicked on the "Read more" link!')
    })
  return cardElement
}

function createCardFeedback (cardData) {
  // function for creating a new slide in the Feedback block
  const cardTemplate = document.querySelector('#slideFeedback-template').content
  const cardElement = cardTemplate
    .querySelector('.feedback__slide')
    .cloneNode(true)
  // creating a slide in the Feedback block using a template
  cardElement.querySelector('.card__text').textContent = cardData.text
  cardElement.querySelector('.card__author').textContent = cardData.author

  return cardElement
}

function renderCard (slider, card) {
  // function of adding a slide to the slider
  slider.appendSlide(card)
}

function loadInitialCardsReviews (cards) {
  // function for loading initial slides from a prepared array
  cards.forEach(element => {
    const newCard = createCardReviews(element)
    renderCard(swiperReviews, newCard)
  })
}

function loadInitialCardsFeedback (cards) {
  // function for loading initial slides from a prepared array
  cards.forEach(element => {
    const newCard = createCardFeedback(element)
    renderCard(swiperFeedback, newCard)
  })
}

loadInitialCardsFeedback(initialCardsFeedback)
loadInitialCardsReviews(initialCardsReviews)
swiperFeedback.slideNext(0)
// Start from the first slide after loading from the array
swiperReviews.slideTo(2)
// Start from the first slide after loading from the array
