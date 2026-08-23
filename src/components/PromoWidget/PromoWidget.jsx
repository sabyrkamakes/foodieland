import './PromoWidget.scss'
import { Image } from 'minista'
import titleImage from '@/assets/images/promo-widget/title.svg'
import dishImage from '@/assets/images/promo-widget/dish.png'

export default () => {
  return (
    <div className="promo-widget">
      <Image className="promo-widget__title" src={titleImage} />
      <Image className="promo-widget__dish" src={dishImage} />
      <a className="promo-widget__link" href="/">
        www.foodieland.com
      </a>
    </div>
  )
}
