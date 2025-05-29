import React, { useState } from 'react';
import './Feedback.scss';

function Feedback() {
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!phone.trim()) {
      setError(true);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone.trim(),
          source: 'feedback_component'
        }),
      });

      if (!response.ok) throw new Error('Ошибка сохранения данных');
      
      setShowModal(true);
      setPhone('');
      setTimeout(() => setShowModal(false), 5000);
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке данных');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setPhone(e.target.value);
    if (error) setError(false);
  };

  return (
    <>
      <section className='Feedback'>
        <div>
          <p>У ВАС ЕСТЬ ВОПРОСЫ?</p>
          <p>Оставить телефон и мы вам перезвоним</p>
          <input 
            type="text" 
            placeholder='+7'
            value={phone}
            onChange={handleChange}
            style={{ borderColor: error ? 'red' : '#CECECE' }}
          />
          <button onClick={handleSubmit} disabled={isSubmitting}>
            <img src="src/components/Feedback/images/phone.png"/> 
            {isSubmitting ? 'Отправка...' : 'Перезвоните мне'}
          </button>
          <p>Отправляя заявку, вы соглашаетесь с <span>политикой обработки персональных данных</span></p>
        </div>
        <img src="src/components/Feedback/images/IMG_3107.png"/>
      </section>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Мы вам перезвоним</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Feedback;