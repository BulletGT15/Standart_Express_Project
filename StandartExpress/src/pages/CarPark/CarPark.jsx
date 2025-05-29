import './CarPark.scss';
import Autos from './components/Autos/Autos';
import InfoMSK from './components/InfoMSK/InfoMSK';
import ServicePrice from '../../components/ServicePrice/ServicePrice';
import PhotoSlide from '../../components/PhotoSlide/PhotoSlide';
import VideoSlide from '../../components/VideoSlide/VideoSlide';
import Feedback from '../../components/Feedback/Feedback';
import ClientMail from '../../components/ClientMail/ClientMail';

function CarPark() {

  return (
    <>
    <section className='CarPark'>
        <div>
            <p>Негабаритные грузоперевозки в Москве <span>от 999₽/час</span></p>
            <p>Предоставим автомобиль любой грузоподъемности в течении 60 минут</p>
            <button><img src="src/pages/CarPark/images/calculator.png"/> Рассчитать стоимость</button>
        </div>
        <img src="src/pages/CarPark/images/busMain.png"/>
    </section>
    <Autos/>
    <ServicePrice/>
    <PhotoSlide/>
    <VideoSlide/>
    <Feedback/>
    <ClientMail/>
    <InfoMSK/>
    </>
  )
}

export default CarPark