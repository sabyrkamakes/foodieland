import './Hero.scss'
import Slider from '@/components/Slider/index'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 className="visually-hidden" id="hero-title">
        Foodieland — Delicious Recipes & Cooking Inspiration for Every Kitchen
      </h1>
      <Slider />
    </section>
  )
}
