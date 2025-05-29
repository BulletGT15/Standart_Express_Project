import './AboutUs.scss';
import AboutUsMain from './components/AboutUsMain/AboutUsMain'
import AUDignity from './components/AUDignity/AUDignity'
import Clients from './components/Clients/Clients'
import Values from './components/Values/Values';
import ClientMail from '../../components/ClientMail/ClientMail';

function AboutUs() {

  return (
    <>
    <AboutUsMain/>
    <AUDignity/>
    <Values/>
    <ClientMail/>
    <Clients/>
    </>
  )
}

export default AboutUs