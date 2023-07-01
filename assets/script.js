const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');
const imgBannerElement = document.querySelector('.banner-img');
const pBannerElement = document.querySelector('#banner p');
const dotsContainerElement = document.querySelector('.dots');

let index = 0;

const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

const changeValueElement = () => {
  //   imgBannerElement.src = './assets/images/slideshow/' + slides[index].image;
  imgBannerElement.src = `./assets/images/slideshow/${slides[index].image}`;
  pBannerElement.innerHTML = slides[index].tagLine;
};

const changeCssDotElement = () => {
  const allDots = document.querySelectorAll('.dot');
  allDots.forEach((dot, i) => {
    dot.classList.remove('dot_selected');
    if (index === i) {
      dot.classList.add('dot_selected')
    }
  })
}

// for (i = 0; i < slides.length; i++) {
//   const bulletPoint = document.createElement('span');
//   bulletPoint.classList.add('dot')

//   if (index === i) {
//     bulletPoint.classList.add('dot_selected')
//   }

//   dotsContainerElement.appendChild(bulletPoint)
// }

slides.forEach((item, i) => {
    const bulletPoint = document.createElement('span');
  bulletPoint.classList.add('dot')

    if (index === i) {
    bulletPoint.classList.add('dot_selected')
  }

    bulletPoint.addEventListener('click', () => {
      index = i;
    changeValueElement();
    changeCssDotElement();
  })

  dotsContainerElement.appendChild(bulletPoint)
})


arrowRightElement.addEventListener('click', () => {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }

  document.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[index].image}`;
  pBannerElement.innerHTML = slides[index].tagLine;

  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.remove('dot_selected');
    if (index === i) {
      dot.classList.add('dot_selected')
    }
  })
});

arrowLeftElement.addEventListener('click', () => {
	index--;
	if (index < 0 ) {
	  index = slides.length - 1; 
	}

	document.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[index].image}`;
	pBannerElement.innerHTML = slides[index].tagLine;

	document.querySelectorAll('.dot').forEach((dot, i) => {
	  dot.classList.remove('dot_selected');
	  if (index === i) {
		dot.classList.add('dot_selected')
	  }
	})
  });

  