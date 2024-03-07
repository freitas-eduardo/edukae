import Slider from 'react-slick'
import styles from './style.module.css'

import { ArrowCircleRight, ArrowCircleLeft } from '@phosphor-icons/react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function HomeSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowCircleRight color='#3166B3' />,
    prevArrow: <ArrowCircleLeft color='#3166B3' />
  }

  return (
    <section className={styles.container}>
      <Slider {...settings}>
        <div className={styles['slider-item']}
        >
          <img
            className={styles['slider-item__image']}
            src='imagem_2.jpg'
            alt=''
            width={'100%'}
            style={{ objectFit: 'fill' }}
          />
        </div>
        <div className={styles['slider-item']}>
          <img
            className={styles['slider-item__image']}
            src='imagem_2.jpg'
            alt=''
            width={'100%'}
          />
        </div>

      </Slider>
    </section>
  )
}
