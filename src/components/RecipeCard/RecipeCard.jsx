import './RecipeCard.scss'
import clsx from 'clsx'
import Tags from '@/components/Tags'
import heartFillIcon from '@/assets/icons/heart/heart-fill.svg'
import heartOutlineIcon from '@/assets/icons/heart/heart-outline.svg'

export default (props) => {
  const { mode, isFavorite, imgSrc, title, tags } = props

  return (
    <div className={clsx('recipe-card', mode && `recipe-card--${mode}`)}>
      <div className="recipe-card__image-wrapper">
        <img
          className="recipe-card__image"
          src={imgSrc}
          alt=""
          width={mode === 'alt' ? 290 : 368}
          height={mode === 'alt' ? 200 : 250}
          loading="lazy"
        />
        <button
          className="recipe-card__favorite-wrapper"
          type="button"
          aria-label={isFavorite ? 'Dislike' : 'Like'}
          title={isFavorite ? 'Dislike' : 'Like'}
        >
          <img
            className={clsx(
              'recipe-card__favorite',
              isFavorite && 'is-favorite'
            )}
            src={isFavorite ? heartFillIcon : heartOutlineIcon}
            alt=""
            width={24}
            height={24}
            loading="lazy"
          />
        </button>
      </div>
      <div className="recipe-card__body">
        <h3
          className={clsx('recipe-card__title', mode === 'alt' ? 'h6' : 'h4')}
        >
          {title}
        </h3>
        <Tags tags={tags} mode="transparent" />
      </div>
    </div>
  )
}
