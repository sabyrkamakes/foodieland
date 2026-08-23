import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'
import Recipes from '@/sections/Recipes'
import LearnMore from '@/sections/LearnMore'
import InstagramView from '@/sections/InstagramView'
import DailyRecipes from '@/sections/DailyRecipes'
import SubscribeForm from '@/sections/SubscribeBanner'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
      <LearnMore />
      <InstagramView />
      <DailyRecipes />
      <SubscribeForm />
    </>
  )
}
