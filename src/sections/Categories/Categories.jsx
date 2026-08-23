import Section from '@/layouts/Section'
import Grid from '@/layouts/Grid'
import CategoryCard from '@/components/CategoryCard'
import { categories } from './Categories.data'

export default () => {
  return (
    <Section
      title="Categories"
      titleId="categories-title"
      linkLabel="View All Categories"
      mode="with-action"
    >
      <Grid columns="6">
        {categories.map((category) => (
          <CategoryCard {...category} key={category.title} />
        ))}
      </Grid>
    </Section>
  )
}
