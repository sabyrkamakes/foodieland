import './Recipes.scss'
import Section from '@/layouts/Section'
import RecipeCard from '@/components/RecipeCard'
import Grid from '@/layouts/Grid'
import PromoWidget from '@/components/PromoWidget'
import { recipes } from './Recipes.data'

export default () => {
  return (
    <Section
      title="Simple and tasty recipes"
      titleId="recipes-title"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      mode="vertical"
    >
      <Grid columns="3">
        {recipes.map((recipe, index) => {
          const { type, ...rest } = recipe

          if (type === 'widget') {
            return <PromoWidget key={index} />
          }

          return <RecipeCard key={index} {...rest} />
        })}
      </Grid>
    </Section>
  )
}
