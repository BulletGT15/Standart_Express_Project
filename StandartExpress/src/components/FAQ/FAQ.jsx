import React, { useState } from 'react';
import './FAQ.scss';

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Как узнать стоимость погрузочно-разгрузочных работ?",
      answer: "В онлайн-курс входят 5 тренировок с видео, полезные материалы по основам стретчинга и личный кабинет с трекерами калорий и воды, а также сборник простых и вкусных ПП рецептов"
    },
    {
      question: "Какие люди у Вас работают?",
      answer: "*место для текста*"
    },
    {
      question: "Вы работаете по безналичному расчету?",
      answer: "*место для текста*"
    },
    {
      question: "Вы работаете с НДС?",
      answer: "*место для текста*"
    },
    {
      question: "Как оплачивается заказ?",
      answer: "*место для текста*"
    },
    {
      question: "У вас есть свой типовой договор?",
      answer: "*место для текста*"
    },
    {
      question: "Вы несете материальную ответственность?",
      answer: "*место для текста*"
    }
  ];

  return (
    <>
      <section className='FAQ' style={{ height: expandedIndex !== null ? 'auto' : '80vh' }}>
        <p>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</p>
        {questions.map((item, index) => (
          <div 
            key={index}
            onClick={() => toggleAnswer(index)}
            className={expandedIndex === index ? 'expanded' : ''}
          >
            <p className='question'>{item.question}</p>
            {expandedIndex === index && <p className='answer'>{item.answer}</p>}
          </div>
        ))}
      </section>
    </>
  );
}

export default FAQ;