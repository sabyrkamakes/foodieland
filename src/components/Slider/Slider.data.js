import scrollImage from '@/assets/images/scroll.png'
import authorImage from '@/assets/images/author.png'
import slideBgImage from '@/assets/images/backgrounds/slide-bg.jpg'
import badgeImage from '@/assets/images/badge.svg'

export const sliderConfig = JSON.stringify({
  spaceBetween: 40,
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: 1,
  effect: 'coverflow',
})

export const slides = [
  {
    category: {
      imgSrc: scrollImage,
      label: 'Hot Recipes',
    },
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Chicken',
      },
    ],
    author: {
      imgSrc: authorImage,
      name: 'John Smith',
      date: {
        label: '15 March 2022',
        dateTime: '2022-03-15',
      },
    },
    bgImgSrc: slideBgImage,
    badgeImgSrc: badgeImage,
  },
  {
    category: {
      imgSrc: scrollImage,
      label: 'Hot Recipes',
    },
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Chicken',
      },
    ],
    author: {
      imgSrc: authorImage,
      name: 'John Smith',
      date: {
        label: '15 March 2022',
        dateTime: '2022-03-15',
      },
    },
    bgImgSrc: slideBgImage,
    badgeImgSrc: badgeImage,
  },
  {
    category: {
      imgSrc: scrollImage,
      label: 'Hot Recipes',
    },
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: [
      {
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        icon: 'cutlery',
        label: 'Chicken',
      },
    ],
    author: {
      imgSrc: authorImage,
      name: 'John Smith',
      date: {
        label: '15 March 2022',
        dateTime: '2022-03-15',
      },
    },
    bgImgSrc: slideBgImage,
    badgeImgSrc: badgeImage,
  },
]
