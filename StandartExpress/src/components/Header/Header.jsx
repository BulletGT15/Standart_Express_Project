import './Header.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalMenu from './Modal_menu/ModalMenu';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header>
        <div>
          <div className='img_menu' onClick={toggleModal}></div>
          <div>
            <Link to="/AboutUs" className='link-butt'>О компании</Link>
            <Link to="/Vacancies" className='link-butt'>Вакансии</Link>
            <Link to="/Blog" className='link-butt'>Новости</Link>
            <Link to="/Contact" className='link-butt'>Контакты</Link>
          </div>
          <div>
            <img src="src/components/Header/images/mail.png"/>
            <p>info@standart-express.ru <br/><span>Выполняем заказы: 24/7</span></p>
          </div>
          <div>
            <img src="src/components/Header/images/phone.png"/>
            <p><span>8 (800) 700-51-53</span><br/> +7 (965) 226-57-90</p>
          </div>
          <img src="src/components/Header/images/whatsapp.png"/>
          <img src="src/components/Header/images/telegram.png"/>
          <button>Перезвоните мне</button>
          <div>
            <img src="src/components/Header/images/arrow.png"/>
            <p>Санкт - Петербург</p>
          </div>
        </div>
        <nav>
          <Link to="/" className='link-butt'><img src="src/components/Header/images/Logo.png"/></Link>
          <p>Грузчики</p>
          <p>Переезды</p>
          <Link to="/Rigging" className='link-butt'>Такелажные работы</Link>
          <Link to="/CarPark" className='link-butt'>Грузоперевозки</Link>
          <Link to="/login" className='link-butt'>Профиль</Link>
          <p>Юридическим лицам</p>
        </nav>
      </header>
      
      <ModalMenu isOpen={isModalOpen} onClose={toggleModal} />
    </>
  )
}

export default Header;