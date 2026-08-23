import firstImg from '@/assets/images/recipes/1.jpg'
import secondImg from '@/assets/images/recipes/2.jpg'
import thirdImg from '@/assets/images/recipes/3.jpg'
import fourthImg from '@/assets/images/recipes/4.jpg'
import fifthImg from '@/assets/images/recipes/5.jpg'
import seventhImg from '@/assets/images/recipes/7.jpg'
import eighthImg from '@/assets/images/recipes/8.jpg'
import ninthImg from '@/assets/images/recipes/9.jpg'

export const recipes = [
  {
    type: 'recipe',
    isFavorite: true,
    imgSrc: firstImg,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    tags: [
      {
        label: '30 Minutes',
        icon: 'clock',
      },
      {
        label: 'Snack',
        icon: 'cutlery',
      },
    ],
  },
  {
    type: 'recipe',
    isFavorite: false,
    imgSrc: secondImg,
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    tags: [
      {
        label: '30 Minutes',
        icon: 'clock',
      },
      {
        label: 'Fish',
        icon: 'cutlery',
      },
    ],
  },
  {
    type: 'recipe',
    isFavorite: false,
    imgSrc: thirdImg,
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    tags: [
      {
        label: '30 Minutes',
        icon: 'clock',
      },
      {
        label: 'Breakfast',
        icon: 'cutlery',
      },
    ],
  },
  {
    type: 'recipe',
    isFavorite: true,
    imgSrc: fourthImg,
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    tags: [
      {
        label: '30 Minutes',
        icon: 'clock',
      },
      {
        label: 'Healthy',
        icon: 'cutlery',
      },
    ],
  },
  {
    type: 'recipe',
    isFavorite: false,
    imgSrc: fifthImg,
    title: 'Chicken Meatballs with Cream Cheese',
    tags: [
      {
        label: '30 Minutes',
        icon: 'clock',
      },
      {
        label: 'Meat',
        icon: 'cutlery',
      },
    ],
  },
  {
    type: 'widget',
  },
  {
    type: 'recipe',
    isFavorite: true,
    imgSrc: seventhImg,
    title: 'Fruity Pancake with Orange & Blueberry',
    tags: [
      {
        label: '30 Minutes',
        icon: 'clock',
      },
      {
        label: 'Sweet',
        icon: 'cutlery',
      },
    ],
  },
  {
    type: 'recipe',
    isFavorite: false,
    imgSrc: eighthImg,
    title: 'The Best Easy One Pot Chicken and Rice',
    tags: [
      {
        label: '30 Minutes',
        icon: 'clock',
      },
      {
        label: 'Snack',
        icon: 'cutlery',
      },
    ],
  },
  {
    type: 'recipe',
    isFavorite: false,
    imgSrc: ninthImg,
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    tags: [
      {
        label: '30 Minutes',
        icon: 'clock',
      },
      {
        label: 'Noodles',
        icon: 'cutlery',
      },
    ],
  },
]
