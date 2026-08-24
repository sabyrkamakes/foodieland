import './Slider.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import clsx from 'clsx'
import SliderCard from '@/components/SliderCard'
import { sliderConfig, slides } from './Slider.data'

export default (props) => {
  const { className } = props

  return (
    <div
      className={clsx('slider swiper', className)}
      data-js-slider={sliderConfig}
    >
      <ul className="slider__list swiper-wrapper">
        {slides.map((slide, index) => (
          <li className="slider__item swiper-slide" key={index}>
            <SliderCard slide={slide} />
          </li>
        ))}
      </ul>
    </div>
  )
}
