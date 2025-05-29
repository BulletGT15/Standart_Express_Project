import './Rigging.scss';
import RigMain from './components/RigMain/RigMain';
import RutubePlayer from '../../components/RutubePlayer/RutubePlayer';
import ServicePrice from '../../components/ServicePrice/ServicePrice';
import Calculator from '../../components/Calculator/Calculator';
import PhotoSlide from '../../components/PhotoSlide/PhotoSlide';
import VideoSlide from '../../components/VideoSlide/VideoSlide';
import Feedback from '../../components/Feedback/Feedback';
import Additional_services from '../../components/Additional_services/Additional_services';
import ClientMail from '../../components/ClientMail/ClientMail';

function Rigging() {

  return (
    <>
    <RigMain/>
    <RutubePlayer/>
    <ServicePrice/>
    <Calculator/>
    <PhotoSlide/>
    <VideoSlide/>
    <Feedback/>
    <Additional_services/>
    <ClientMail/>
    </>
  )
}

export default Rigging