import './RecipeCard.scss'
import clsx from 'clsx'
import { Image } from 'minista'
import Tags from '@/components/Tags'
import heartFillIcon from '@/assets/icons/heart/heart-fill.svg'
import heartOutlineIcon from '@/assets/icons/heart/heart-outline.svg'

export default (props) => {
  const { isFavorite, imgSrc, title, tags } = props

  return (
    <div className="recipe-card">
      <div className="recipe-card__image-wrapper">
        <Image className="recipe-card__image" src={imgSrc} />
        <button
          className="recipe-card__favorite-wrapper"
          type="button"
          aria-label={isFavorite ? 'Dislike' : 'Like'}
          title={isFavorite ? 'Dislike' : 'Like'}
        >
          <Image
            className={clsx(
              'recipe-card__favorite',
              isFavorite && 'is-favorite'
            )}
            src={isFavorite ? heartFillIcon : heartOutlineIcon}
          />
        </button>
      </div>
      <div className="recipe-card__body">
        <h3 className="recipe-card__title h4">{title}</h3>
        <Tags tags={tags} mode="transparent" />
      </div>
    </div>
  )
}
