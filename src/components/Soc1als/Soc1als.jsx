import './Soc1als.scss'
import Icon from '@/components/Icon'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  const socials = [
    {
      label: 'Facebook',
      icon: 'facebook',
    },
    {
      label: 'Twitter',
      icon: 'twitter',
    },
    {
      label: 'Instagram',
      icon: 'instagram',
    },
  ]

  return (
    <div className={clsx('soc1als', className)}>
      <ul className="soc1als__list">
        {socials.map(({ label, icon }) => (
          <li className="soc1als__item" key={label}>
            <a className="soc1als__link" href="/">
              <Icon name={icon} hasFill />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
