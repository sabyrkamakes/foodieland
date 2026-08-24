import './PromoWidget.scss'
import titleImage from '@/assets/images/promo-widget/title.svg'
import dishImage from '@/assets/images/promo-widget/dish.png'

export default () => {
  return (
    <div className="promo-widget">
      <img
        className="promo-widget__title"
        src={titleImage}
        alt=""
        width={166}
        height={55}
        loading="lazy"
      />
      <img
        className="promo-widget__dish"
        src={dishImage}
        alt=""
        width={198}
        height={199}
        loading="lazy"
      />
      <a className="promo-widget__link" href="/">
        www.foodieland.com
      </a>
    </div>
  )
}
