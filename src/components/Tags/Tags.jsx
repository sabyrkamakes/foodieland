import './Tags.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const { className, tags } = props

  return (
    <div className={clsx('tags', className)}>
      <ul className="tags__list">
        {tags.map((tag) => (
          <li className="tags__item" key={tag.label}>
            <Icon name={tag.icon} hasFill />
            <span className="tags__label">{tag.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
