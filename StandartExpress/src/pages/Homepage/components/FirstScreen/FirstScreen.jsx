import './FirstScreen.scss';

function FirstScreen() {

  return (
    <>
    <main>
        <div>
            <p>Услуги грузчиков в Москве <span>от 249₽/час</span></p>
            <p>Ваш заказ будет курировать персональный менеджер</p>
            <button><img src="src/pages/Homepage/components/FirstScreen/images/calculator.png"/> Рассчитать стоимость</button>
        </div>
        <img className='rabotiaga' src="src/pages/Homepage/components/FirstScreen/images/rabotiaga.png"/>
    </main>
    </>
  )
}

export default FirstScreen