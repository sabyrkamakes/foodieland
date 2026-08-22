import './Button.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, type = 'button', href, mode, children } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes

  return (
    <Component
      className={clsx(`button`, mode && `button--${mode}`, className)}
      {...attributesByTag}
    >
      {children}
    </Component>
  )
}
