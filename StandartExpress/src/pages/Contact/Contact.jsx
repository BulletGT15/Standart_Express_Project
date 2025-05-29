import './Contact.scss';

function Contact() {

  return (
    <>
    <section className='Contact'>
        <div>
            <p>Контакты</p>
            <div>
                <p>Адрес</p>
                <img src="src/pages/Contact/images/map.png"/>
                <p>127018, Россия, г. Москва, Сущевский вал 5 стр 19</p>
            </div>
            <div>
                <p>Телефон</p>
                <img src="src/pages/Contact/images/phone.png"/> 
                <p>8 (800) 700-51-53, +7 (965) 226-57-90
                    <br/><span>Принимаем звонки ежедневно с 8:00 до 20:00 (по МСК)</span>
                </p>
            </div>
            <div>
                <p>Почта</p>
                <img src="src/pages/Contact/images/mail.png"/> 
                <p> info@standart-express.ru
                    <br/><span>Выполняем заказы: 24/7</span>
                </p>
            </div>
            <div>
                <img src="src/pages/Contact/images/vk.png"/>
                <img src="src/pages/Contact/images/yt.png"/>
                <img src="src/pages/Contact/images/whatsapp.png"/>
                <img src="src/pages/Contact/images/tg.png"/>
            </div>
        </div>
        <div>
            <div>
                <p>Заказать консультацию</p>
                <input type="text" placeholder='Имя'/>
                <input type="text" placeholder='Телефон'/>
                <button>Отправить</button>
            </div>
        </div>
        <iframe className='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac0fd61847a432ae1e686a0e67c70b9104b0ced92bee1461ca1ecbe1b0a2b884f&amp;source=constructor" width="600" height="400" frameborder="0"></iframe>
        <div>
            <p>Заказать услугу «Грузчики» Вы можете круглосуточно по всей территории Москвы и Московской области</p>
            <p>Балашиха, Бронницы, Видное, Волоколамск, Воскресенск, Дзержинский, Дмитров, Долгопрудный, Домодедово, Дубна, Егорьевск, Жуковский, Зарайск, Истра, Кашира, Клин, Коломна, Королёв, Котельники, Красногорск, Лобня, Лосино-Петровский, Лотошино, Луховицы, Лыткарино, Люберцы, Можайск, Мытищи, Наро-Фоминск, Ногинск, Одинцово, Орехово-Зуево, Павловский Посад, Подольск, Пушкино, Раменское, Реутов, Руза, Сергиев Посад, Серебряные Пруды, Серпухов, Солнечногорск, Ступино, Талдом, Фрязино, Химки, Черноголовка, Чехов, Шатура, Шаховская, Щёлково, Электросталь, Боброво, Бутово, Горки Ленинские, Дрожжино, Лопатино, Измайлово, Новодрожжино, Сычёво</p>
        </div>
    </section>
    </>
  )
}

export default Contact