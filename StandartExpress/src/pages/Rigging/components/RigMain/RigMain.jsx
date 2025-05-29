import './RigMain.scss';

function RigMain() {

  return (
    <>
    <section className='RigMain'>
        <div>
            <p>Такелажные работы в Москве <span>от 1000₽/час</span></p>
            <p>Выполняем любые виды работ. Приедем за 60 минут</p>
            <button><img src="src/pages/Rigging/components/RigMain/images/calculator.png"/> Рассчитать стоимость</button>
        </div>
        <img src="src/pages/Rigging/components/RigMain/images/rigging.png"/>
    </section>
    <section className='RigDignities'>
        <div>
            <p><img src="src/pages/Rigging/components/RigMain/images/rig1.png"/> Переносим грузы от 100 кг до 50 тонн</p>
            <p><img src="src/pages/Rigging/components/RigMain/images/rig2.png"/> Используем специальное оборудование</p>
            <p><img src="src/pages/Rigging/components/RigMain/images/rig3.png"/> Предоставляем спецтехнику</p>
        </div>
    </section>
    </>
  )
}

export default RigMain