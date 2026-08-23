import './DailyRecipes.scss'
import Section from '@/layouts/Section'
import Grid from '@/layouts/Grid'
import RecipeCard from '@/components/RecipeCard'
import { dailyRecipes } from './DailyRecipes.data'

export default () => {
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
