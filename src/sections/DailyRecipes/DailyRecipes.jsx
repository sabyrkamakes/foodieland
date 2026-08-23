import './DailyRecipes.scss'
import Section from '@/layouts/Section'
import Grid from '@/layouts/Grid'
import RecipeCard from '@/components/RecipeCard'
import firstImg from '@/assets/images/daily-recipes/1.jpg'
import secondImg from '@/assets/images/daily-recipes/2.jpg'
import thirdImg from '@/assets/images/daily-recipes/3.jpg'
import fourthImg from '@/assets/images/daily-recipes/4.jpg'
import fifthImg from '@/assets/images/daily-recipes/5.jpg'
import sixthImg from '@/assets/images/daily-recipes/6.jpg'
import seventhImg from '@/assets/images/daily-recipes/7.jpg'
import eighthImg from '@/assets/images/daily-recipes/8.jpg'

export default () => {
  const dailyRecipes = [
    {
      isFavorite: true,
      imgSrc: firstImg,
      title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
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
      isFavorite: false,
      imgSrc: secondImg,
      title: 'Big and Juicy Wagyu Beef Cheeseburger',
      tags: [
        {
          label: '30 Minutes',
          icon: 'clock',
        },
        {
          label: 'Western',
          icon: 'cutlery',
        },
      ],
    },
    {
      isFavorite: true,
      imgSrc: thirdImg,
      title: 'Healthy Japanese Fried Rice with Asparagus',
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
      isFavorite: false,
      imgSrc: fourthImg,
      title: 'Cauliflower Walnut Vegetarian Taco Meat',
      tags: [
        {
          label: '30 Minutes',
          icon: 'clock',
        },
        {
          label: 'Eastern',
          icon: 'cutlery',
        },
      ],
    },
    {
      isFavorite: true,
      imgSrc: fifthImg,
      title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
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
      isFavorite: false,
      imgSrc: sixthImg,
      title: 'Barbeque Spicy Sandwiches with Chips',
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
      isFavorite: false,
      imgSrc: seventhImg,
      title: 'Firecracker Vegan Lettuce Wraps - Spicy!',
      tags: [
        {
          label: '30 Minutes',
          icon: 'clock',
        },
        {
          label: 'Seafood',
          icon: 'cutlery',
        },
      ],
    },
    {
      isFavorite: true,
      imgSrc: eighthImg,
      title: 'Chicken Ramen Soup with Mushroom',
      tags: [
        {
          label: '30 Minutes',
          icon: 'clock',
        },
        {
          label: 'Japanese',
          icon: 'cutlery',
        },
      ],
    },
  ]

  return (
    <Section
      title="Try this delicious recipe to make your day"
      titleId="daily-recipes-title"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
    >
      <Grid columns={4}>
        {dailyRecipes.map((recipe, index) => (
          <RecipeCard key={index} mode="alt" {...recipe} />
        ))}
      </Grid>
    </Section>
  )
}
