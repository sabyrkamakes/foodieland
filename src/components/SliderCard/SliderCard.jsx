import './SliderCard.scss'
import clsx from 'clsx'
import { Image } from 'minista'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import AuthorCard from '@/components/AuthorCard'
import Tags from '@/components/Tags'

export default (props) => {
  const { className, slide } = props

  return (
    <article className={clsx('slider-card', className)}>
      <div className="slider-card__body">
        <div className="slider-card__info">
          <div className="slider-card__category">
            <Image src={slide.category.imgSrc} />
            <span className="slider-card__category-label">
              {slide.category.label}
            </span>
          </div>
          <h2 className="slider-card__title h1">{slide.title}</h2>
          <div className="slider-card__description">
            <p>{slide.description}</p>
          </div>
          <Tags tags={slide.tags} />
        </div>
        <div className="slider-card__footer">
          <AuthorCard author={slide.author} />
          <Button className="slider-card__button" href="/">
            <span>View Recipes</span>
            <Icon name="play" hasFill />
          </Button>
        </div>
      </div>
      <Image className="slider-card__image" src={slide.bgImgSrc} />
      <Image className="slider-card__badge" src={slide.badgeImgSrc} />
    </article>
  )
}
