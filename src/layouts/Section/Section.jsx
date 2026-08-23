import './Section.scss'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {
  const { className, title, titleId, description, linkLabel, mode, children } =
    props

  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header
        className={clsx('section__header', mode && `section__header--${mode}`)}
      >
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
        {linkLabel && (
          <Button className="section__link" href="/" mode="cyan">
            {linkLabel}
          </Button>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
