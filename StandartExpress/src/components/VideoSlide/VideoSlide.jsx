import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import classes from './VideoSlide.module.scss';
import video1 from './videos/3.mp4';
import video2 from './videos/6.mp4';
import video3 from './videos/7.mp4';

function VideoSlide() {
  const videos = [
    { id: 1, src: video1 },
    { id: 2, src: video2 },
    { id: 3, src: video3 },
    { id: 4, src: video1 },
    { id: 5, src: video2 },
    { id: 6, src: video3 }
  ];

  return (
    <section className={classes.VideoSlide}>
      <p>ОТЗЫВЫ</p>
      <p>Грузчики от компании с опытом работы в Москве с 2013 года. Для нас ценно, что за это время у нас сформировалась большая база постоянных клиентов, рекомендующих нас другим.</p>
      <p><img src="src/components/VideoSlide/images/star.png"/> 338 оценок средняя 4,37 из 5</p>
      <Swiper
        slidesPerView={2.7}
        spaceBetween={150}
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: `.${classes.swiperbuttonNext}`,
          prevEl: `.${classes.swiperbuttonPrev}`,
        }}
        className={classes.mySwiper}
          breakpoints={{
    1440:{
      slidesPerView:2.6,
      spaceBetween: 15
    },
    1024:{
      slidesPerView:2.5
    },
    768:{
      slidesPerView: 2.5
    },
    426:{
      slidesPerView: 2.25
    },
    425: {
      slidesPerView: 2.5
    },
    375: {
      slidesPerView: 2.3
    },
    320: {
      slidesPerView: 2.3
    }
  }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className={classes.videoContainer}>
              <video 
                controls
                muted
                loop
                playsInline
                className={classes.videoPlayer}
              >
                <source src={video.src} type={`video/${video.src.split('.').pop()}`} />
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={classes.swiperbuttonPrev}>&lt;</button>
      <button className={classes.swiperbuttonNext}>&gt;</button>
    </section>
  );
}

export default VideoSlide;