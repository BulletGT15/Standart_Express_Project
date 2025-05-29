import classes from './ClientMail.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';

function ClientMail() {
  const swiperRef = useRef();

  return (
    <>
    <section className={classes.ClientMail}>
        <p>РЕКОМЕНДАТЕЛЬНЫЕ ПИСЬМА ОТ КРУПНЫХ КЛИЕНТОВ</p>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation]}
        loop={true}
        onSwiper={(swiper) => swiperRef.current = swiper}
        className={classes.mySwiper}
        breakpoints={{
    1440:{
      slidesPerView: 4
    },
    1024:{
      slidesPerView: 4
    },
    768:{
      slidesPerView: 4
    },
    426:{
      slidesPerView: 1.7
    },
    425: {
      slidesPerView: 1.5
    },
    375: {
      slidesPerView: 1.5
    },
    320: {
      slidesPerView: 1.5
    }
  }}
        >
            <SwiperSlide><img src="src/components/ClientMail/images/mts.png" alt="MTS"/></SwiperSlide>
            <SwiperSlide><img src="src/components/ClientMail/images/pek.png" alt="PEK"/></SwiperSlide>
            <SwiperSlide><img src="src/components/ClientMail/images/avito.png" alt="Avito"/></SwiperSlide>
            <SwiperSlide><img src="src/components/ClientMail/images/delovielinii.png" alt="Delovye Linii"/></SwiperSlide>
            <SwiperSlide><img src="src/components/ClientMail/images/mts.png" alt="MTS"/></SwiperSlide>
            <SwiperSlide><img src="src/components/ClientMail/images/pek.png" alt="PEK"/></SwiperSlide>
            <SwiperSlide><img src="src/components/ClientMail/images/avito.png" alt="Avito"/></SwiperSlide>
            <SwiperSlide><img src="src/components/ClientMail/images/delovielinii.png" alt="Delovye Linii"/></SwiperSlide>
        </Swiper>
        <div className={classes.navigationButtons}>
            <button 
              className={classes.swiperbuttonPrev}
              onClick={() => swiperRef.current?.slidePrev()}
            >&lt;</button>
            <button 
              className={classes.swiperbuttonNext}
              onClick={() => swiperRef.current?.slideNext()}
            >&gt;</button>
        </div>
    </section>
    </>
  )
}

export default ClientMail