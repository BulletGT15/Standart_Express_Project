import React from 'react';
import { Link } from 'react-router-dom';
import './ModalMenu.scss';

function ModalMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  document.body.style.overflow = 'hidden';

  const handleClose = () => {
    document.body.style.overflow = '';
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-links">
            <Link to="/" className="modal-link" onClick={handleClose}>
            Главная
          </Link>
          <Link to="/AboutUs" className="modal-link" onClick={handleClose}>
            О компании
          </Link>
          <Link to="/Vacancies" className="modal-link" onClick={handleClose}>
            Вакансии
          </Link>
          <Link to="/Blog" className="modal-link" onClick={handleClose}>
            Новости
          </Link>
          <Link to="/Contact" className="modal-link" onClick={handleClose}>
            Контакты
          </Link>
          <Link to="/Rigging" className="modal-link" onClick={handleClose}>
            Такелажные работы
          </Link>
          <Link to="/CarPark" className="modal-link" onClick={handleClose}>
            Грузоперевозки
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModalMenu;