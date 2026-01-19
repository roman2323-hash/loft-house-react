const Footer = () => {
  const menu1 = [
    'О комплексе',
    'Район',
    'Каталог квартир',
    'Ипотека',
    'Контакты'
  ];

  const menu2 = [
    'Поселение и переезд',
    'Сервисные услуги',
    'Экологическая устойчивость',
    'Инвестиционные возможности',
    'Программа лояльности'
  ];

  const socials = [
    { icon: '/icons/vk.svg', alt: 'VK', href: '#' },
    { icon: '/icons/facebook.svg', alt: 'Facebook', href: '#' },
    { icon: '/icons/instagram.svg', alt: 'Instagram', href: '#' }
  ];

  return (
    <section className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer__logo-block">
            <img src="/icons/first-screen__logo.svg" alt="LoftHouse Logo" />
          </div>

          <ul className="footer__menu">
            {menu1.map((item, index) => (
              <li key={index}><a href="#">{item}</a></li>
            ))}
          </ul>

          <ul className="footer__menu">
            {menu2.map((item, index) => (
              <li key={index}><a href="#">{item}</a></li>
            ))}
          </ul>

          <div className="footer__contacts">
            <p>Адрес: Наб. реки Фонтанки 10-15</p>
            <p>Телефон: <a href="tel:+78121234567">8 (812) 123-45-67</a></p>
            <p>Отдел продаж: 10:00 - 20:00</p>
            <p>E-mail: <a href="mailto:vip@lofthouse.ru" className="footer__email">vip@lofthouse.ru</a></p>
            <div className="footer__socials">
              {socials.map((social, index) => (
                <a key={index} href={social.href}>
                  <img src={social.icon} alt={social.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;