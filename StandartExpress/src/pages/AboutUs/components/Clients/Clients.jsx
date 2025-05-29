import './Clients.scss';

function Clients() {

  return (
    <>
    <section className='Clients'>
        <p>НАШИ КЛИЕНТЫ</p>
        <p>Наша компания быстро растёт и развивается. За время работы мы расширили спектр услуг, приобрели множество постоянных клиентов.</p>
        <div>
            <p>Коммерческие</p>
            <img src="src/pages/AboutUs/components/Clients/images/cdek.png"/>
            <img src="src/pages/AboutUs/components/Clients/images/megafon.png"/>
            <img src="src/pages/AboutUs/components/Clients/images/rostelecom.png"/>
            <img src="src/pages/AboutUs/components/Clients/images/hhru.png"/>
            <img src="src/pages/AboutUs/components/Clients/images/maria.png"/>
        </div>
        <div>
            <p>Государственные</p>
            <img src="src/pages/AboutUs/components/Clients/images/documents.png"/>
            <img src="src/pages/AboutUs/components/Clients/images/tax.png"/>
            <img src="src/pages/AboutUs/components/Clients/images/rf.png"/>
            <img src="src/pages/AboutUs/components/Clients/images/gosduma.png"/>
        </div>
    </section>
    </>
  )
}

export default Clients