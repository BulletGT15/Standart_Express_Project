import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import CtrlD from './pages/Homepage/components/CtrlD/CtrlD';
import AboutUs from './pages/AboutUs/AboutUs';
import Blog from './pages/Blog/Blog';
import CarPark from './pages/CarPark/CarPark';
import Contact from './pages/Contact/Contact';
import Rigging from './pages/Rigging/Rigging';
import Vacancies from './pages/Vacancies/Vacancies'
import Auth from './components/Auth/Auth';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/CarPark' element={<CarPark/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Rigging' element={<Rigging/>}/>
      <Route path='/Vacancies' element={<Vacancies/>}/>
      <Route path="/login" element={<Auth/>} />
    </Routes>
    <CtrlD/>
    </>
  )
}

export default App