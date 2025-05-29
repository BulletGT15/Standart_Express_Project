import React, { useState } from 'react';
import './Calculator.scss';

function Calculator() {
  const [inputs, setInputs] = useState({
    workers: '',
    date: '',
    hours: '',
    extras: '',
    workType: '',
    vehicle: '',
    name: '',
    phone: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!inputs.workers) newErrors.workers = true;
    if (!inputs.date) newErrors.date = true;
    if (!inputs.hours) newErrors.hours = true;
    if (!inputs.phone) newErrors.phone = true;
    if (!inputs.name) newErrors.name = true;
    if (!inputs.workType) newErrors.workType = true;
    if (!inputs.vehicle) newErrors.vehicle = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/calculations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      if (!response.ok) throw new Error('Ошибка сохранения данных');
      
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setInputs({
          workers: '',
          date: '',
          hours: '',
          extras: '',
          workType: '',
          vehicle: '',
          name: '',
          phone: ''
        });
      }, 5000);
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке данных');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className='Calculator'>
        <div>
          <p>ОНЛАЙН КАЛЬКУЛЯТОР</p>
          <p>Введите данные для предварительного расчета стоимости заказа услуги «Грузчики» и получите скидку <span>до 10%</span> на первый заказ.</p>
        </div>

        <div className='calcul'>
          <div style={{ borderColor: errors.workers ? 'red' : '#ff6b00' }}>
            <p>Грузчики</p>
            <img src="src/components/Calculator/images/gruzchiki.png" alt="Грузчики"/>
            <input
              type="number" 
              name="workers"
              value={inputs.workers}
              onChange={handleChange}
              placeholder="Количество грузчиков"
              min="1"
            />
          </div>
          
          <div style={{ borderColor: errors.date ? 'red' : '#ff6b00' }}>
            <p>Дата/время</p>
            <img src="src/components/Calculator/images/calendar.png" alt="Календарь"/>
            <input 
              type="datetime-local" 
              name="date"
              value={inputs.date}
              onChange={handleChange}
            />
          </div>
          
          <div style={{ borderColor: errors.hours ? 'red' : '#ff6b00' }}>
            <p>Кол-во часов</p>
            <img src="src/components/Calculator/images/watch.png" alt="Часы"/>
            <input 
              type="number" 
              name="hours"
              value={inputs.hours}
              onChange={handleChange}
              placeholder="Количество часов"
              min="1"
            />
          </div>
          
          <div style={{ borderColor: errors.extras ? 'red' : '#ff6b00' }}>
            <img src="src/components/Calculator/images/cubes.png" alt="Доп. услуги"/>
            <select
              name="extras"
              value={inputs.extras}
              onChange={handleChange}
            >
              <option value="">Дополнительные услуги</option>
              <option value="packing">Упаковка</option>
              <option value="assembly">Сборка мебели</option>
            </select>
          </div>
          
          <div style={{ borderColor: errors.workType ? 'red' : '#ff6b00' }}>
            <img src="src/components/Calculator/images/work_type.png" alt="Тип работы"/>
            <select 
              name="workType"
              value={inputs.workType}
              onChange={handleChange}
            >
              <option value="">Тип работы</option>
              <option value="standard">Стандартная</option>
              <option value="heavy">Тяжелая</option>
              <option value="fragile">Хрупкие предметы</option>
            </select>
          </div>
          
          <div style={{ borderColor: errors.vehicle ? 'red' : '#ff6b00' }}>
            <img src="src/components/Calculator/images/car.png" alt="Автомобиль"/>
            <select 
              name="vehicle"
              value={inputs.vehicle}
              onChange={handleChange}
            >
              <option value="">Выберите автомобиль</option>
              <option value="small">Газель (до 1.5 тонн)</option>
              <option value="large">Камаз (до 5 тонн)</option>
            </select>
          </div>
          
          <div style={{ borderColor: errors.name ? 'red' : '#ff6b00' }}>
            <input 
              type="text" 
              name="name"
              value={inputs.name}
              onChange={handleChange}
              placeholder="Имя"
            />
          </div>
          
          <div style={{ borderColor: errors.phone ? 'red' : '#ff6b00' }}>
            <input 
              type="tel" 
              name="phone"
              value={inputs.phone}
              onChange={handleChange}
              placeholder="+7"
              required
            />
          </div>
          
          <button 
            className="calculate-btn"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            <img src="src/components/Calculator/images/calculator.png"/>
            {isSubmitting ? 'Отправка...' : 'Рассчитать стоимость'}
          </button>
        </div>
      </section>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Мы вам позвоним по номеру {inputs.phone}</p>
            <p className="callback-message">Мы вам позже перезвоним</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Calculator;