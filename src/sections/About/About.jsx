import './About.scss'
import Section from '@/layouts/Section'

export default () => {
  return (
    <Section
      title="About section title"
      titleId="about-title"
      description="About section description"
    >
      <p>About section content</p>
      <img
        src="/src/assets/images/cat.jpg"
        alt=""
        width={400}
        height={398}
        loading="lazy"
      />
    </Section>
  )
}
