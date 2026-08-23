import './Footer.scss'
import Logo from '@/components/Logo'
import Soc1als from '@/components/Soc1als'

export default () => {
  const menuItems = [
    {
      label: 'Recipes',
      href: '/recipes',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
    {
      label: 'About us',
      href: '/about',
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__main">
          <div className="footer__info">
            <Logo />
            <div className="footer__subtitle">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </div>
          </div>
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              {menuItems.map((item) => (
                <li className="footer__menu-item" key={item.label}>
                  <a className="footer__menu-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer__extra">
          <div className="footer__copyright">
            © 2026 Foodieland. Built by{' '}
            <a
              className="footer__copyright-link"
              href="https://github.com/sabyrkamakes"
              target="_blank"
              rel="noreferrer"
            >
              Sabyrka
            </a>
            .
          </div>
          <Soc1als className="footer__soc1als" />
        </div>
      </div>
    </footer>
  )
}
