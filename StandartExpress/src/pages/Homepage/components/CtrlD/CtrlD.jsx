import './CtrlD.scss';

function CtrlD() {

  return (
    <>
    <section className='CtrlD'>
        <p>Чтобы не потерять наш сайтдобавьте его в избранное (закладки) или сохраните</p>
        <div>
            <p>Нажмите сочетание клавиш в браузере</p>
            <p>Ctrl + D</p>
        </div>
    </section>
    <footer>
        <div>
            <img src="src/pages/Homepage/components/CtrlD/images/Logo.png"/>
            <p>О компании</p>
            <p>Вакансии</p>
            <p>Новости</p>
            <p>Контакты</p>
            <div>
                <img src="src/pages/Homepage/components/CtrlD/images/phone.png"/>
                <p><span>8 (800) 700-51-53</span>
                <br/>+7 (965) 226-57-90
                <br/><span>Принимаем звонки ежедневно
                с 8:00 до 20:00 (по МСК)</span></p>
            </div>
            <div>
                <img src="src/pages/Homepage/components/CtrlD/images/mail.png"/>
                <p>info@standart-express.ru 
                <span> Выполняем заказы: 24/7</span></p>
            </div>
            <button>Заказать консультацию</button>
        </div>
        <div>
            <p>© 2024 Стандарт Экспресс. Все права защищены</p>
            <p>Политика конфидециальности</p>
            <p>Пользовательское соглашение</p>
            <p>ООО «Стандарт Экспресс» <br/>ОГРН 1141690046871 <br/>ИНН 1657143487</p>
        </div>
    </footer>
    </>
  )
}

export default CtrlD