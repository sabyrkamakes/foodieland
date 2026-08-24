import './LearnMore.scss'
import Button from '@/components/Button'
import bgImage from '@/assets/images/backgrounds/learn-more-bg.png'

export default () => {
  return (
    <section
      className="learn-more section container"
      aria-labelledby="learn-more-title"
    >
      <div className="learn-more__body">
        <h2 className="learn-more__title" id="learn-more-title">
          Everyone can be a chef in their own kitchen
        </h2>
        <div className="learn-more__description">
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <Button href="/" mode="medium">
          Learn More
        </Button>
      </div>
      <img
        className="learn-more__image"
        src={bgImage}
        alt=""
        width={710}
        height={597}
        loading="lazy"
      />
    </section>
  )
}
