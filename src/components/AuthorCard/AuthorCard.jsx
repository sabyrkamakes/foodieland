import './AuthorCard.scss'
import clsx from 'clsx'
import { Image } from 'minista'

export default (props) => {
  const { className, author } = props

  return (
    <div className={clsx('author-card', className)}>
      <Image src={author.imgSrc} />
      <div className="author-card__body">
        <h3 className="author-card__name">{author.name}</h3>
        <time
          className="author-card__date"
          dateTime={author.date.dateTime}
        >
          {author.date.label}
        </time>
      </div>
    </div>
  )
}
