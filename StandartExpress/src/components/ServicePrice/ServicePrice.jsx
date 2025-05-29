import React, { useState } from 'react';
import './ServicePrice.scss';

function ServicePrice() {
  const [showMore, setShowMore] = useState(false);

  const initialServices = [
    { name: "Услуги грузчиков для юридических лиц", price: "149" },
    { name: "Перевозка мебели и техники", price: "299" },
    { name: "Квартирный переезд под ключ", price: "999" },
    { name: "Офисный переезд", price: "1499" },
    { name: "Разгрузка фур и контейнеров", price: "199" },
    { name: "Погрузочно-разгрузочные работы", price: "249" }
  ];

  const additionalServices = [
    { name: "Такелажные работы", price: "399" },
    { name: "Упаковка вещей и мебели", price: "199" },
    { name: "Хранение вещей на складе", price: "149/день" },
    { name: "Демонтаж мебели и конструкций", price: "299" },
    { name: "Вывоз строительного мусора", price: "349" },
    { name: "Перевозка пианино и роялей", price: "1499" },
    { name: "Услуги разнорабочих", price: "249" },
    { name: "Клининговые услуги после переезда", price: "499" }
  ];

  return (
    <>
      <section className='ServicePrice' style={{ height: showMore ? '200vh' : '100vh' }}>
        <p>ПОПУЛЯРНЫЕ УСЛУГИ С ЦЕНАМИ</p>
        
        {initialServices.map((service, index) => (
          <div key={`initial-${index}`}>
            <p>{service.name}</p>
            <p>от {service.price}₽ <button>Заказать</button></p>
          </div>
        ))}
        
        {showMore && additionalServices.map((service, index) => (
          <div key={`additional-${index}`}>
            <p>{service.name}</p>
            <p>от {service.price}₽ <button>Заказать</button></p>
          </div>
        ))}
        
        <button 
          className="show-more-button" 
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Скрыть' : 'Показать ещё'}
        </button>
      </section>
    </>
  );
};

export default ServicePrice;