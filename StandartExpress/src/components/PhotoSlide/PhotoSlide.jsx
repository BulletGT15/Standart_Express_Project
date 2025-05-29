import classes from './PhotoSlide.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

function PhotoSlide() {

  return (
    <>
    <section className={classes.PhotoSlide}>
        <p>ФОТОГАЛЕРЕЯ</p>
<Swiper
  slidesPerView={3} // Показываем 1 слайд + часть следующего для наглядности
  spaceBetween={15} // Уменьшенное расстояние между слайдами
  modules={[Navigation]}
  loop={true}
  navigation={{
    nextEl: `.${classes.swiperbuttonNext}`,
    prevEl: `.${classes.swiperbuttonPrev}`,
  }}
  className={classes.mySwiper}
  breakpoints={{
    1440:{
      slidesPerView:3,
      spaceBetween: 15
    },
    1024:{
      slidesPerView:3
    },
    768:{
      slidesPerView: 3
    },
    426:{
      slidesPerView: 3
    },
    425: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    }
  }}
>
            <SwiperSlide><img src="src/components/PhotoSlide/images/slider1.png"/></SwiperSlide>
            <SwiperSlide><img src="src/components/PhotoSlide/images/slider2.png"/></SwiperSlide>
            <SwiperSlide><img src="src/components/PhotoSlide/images/slider3.png"/></SwiperSlide>
            <SwiperSlide><img src="src/components/PhotoSlide/images/slider4.png"/></SwiperSlide>
            <SwiperSlide><img src="src/components/PhotoSlide/images/slider1.png"/></SwiperSlide>
            <SwiperSlide><img src="src/components/PhotoSlide/images/slider2.png"/></SwiperSlide>
            <SwiperSlide><img src="src/components/PhotoSlide/images/slider3.png"/></SwiperSlide>
            <SwiperSlide><img src="src/components/PhotoSlide/images/slider4.png"/></SwiperSlide>
        </Swiper>
        <button className={classes.swiperbuttonPrev}>&lt;</button>
        <button className={classes.swiperbuttonNext}>&gt;</button>
    </section>
    </>
  )
}

export default PhotoSlide