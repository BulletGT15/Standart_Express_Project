import './Homepage.scss';
import './Adaptation.scss'
import FirstScreen from './components/FirstScreen/FirstScreen';
import Dignity from './components/Dignity/Dignity';
import TextSec from './components/TextSec/TextSec';
import Additional_services from '../../components/Additional_services/Additional_services';
import RutubePlayer from '../../components/RutubePlayer/RutubePlayer';
import ServicePrice from '../../components/ServicePrice/ServicePrice';
import Calculator from '../../components/Calculator/Calculator';
import PhotoSlide from '../../components/PhotoSlide/PhotoSlide';
import VideoSlide from '../../components/VideoSlide/VideoSlide';
import Feedback from '../../components/Feedback/Feedback';
import ClientMail from '../../components/ClientMail/ClientMail';
import FAQ from '../../components/FAQ/FAQ';
import Rustam from '../../components/Rustam/Rustam';

function Homepage() {

  return (
    <>
    <FirstScreen/>
    <Dignity/>
    <RutubePlayer/>
    <TextSec/>
    <ServicePrice/>
    <Calculator/>
    <PhotoSlide/>
    <VideoSlide/>
    <Feedback/>
    <Additional_services/>
    <ClientMail/>
    <FAQ/>
    <Rustam/>
    </>
  )
}

export default Homepage