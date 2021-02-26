
import ScrollReveal from 'scrollreveal';

export default function activateScrollReveal (){
  let reval = {
    // distance: '50%',
    origin: 'right',
    delay: 100,
    duration: 5000,
    easing: 'ease',
  };
  let revalWithDelay = {
    // distance: '50%',
    origin: 'right',
    delay: 1200,
    duration: 5000,
    easing: 'ease',
  };
  let revalWithLongerDelay = {
    // distance: '50%',
    origin: 'right',
    delay: 2200,
    duration: 5000,
    easing: 'ease',
  };
  let revalFromRight = {
    distance: '15%',
    origin: 'right',
    // delay: 1200,
    duration: 3000,
    easing: 'ease',  
  };
  let revalFromLeft = {
    distance: '15%',
    origin: 'left',
    // delay: 1200,
    duration: 3000,
    easing: 'ease',  
  };

  ScrollReveal().reveal('.title', reval)
  ScrollReveal().reveal('.best-sellers', reval)
  ScrollReveal().reveal('.description-text', revalWithDelay)
  ScrollReveal().reveal('.menu-btn', revalWithDelay)
  ScrollReveal().reveal('.button', revalWithDelay)
  ScrollReveal().reveal('.about-description', revalFromRight)
  ScrollReveal().reveal('.about-image', revalFromLeft)
}