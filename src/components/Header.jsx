const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <img src="/icons/first-screen__logo.svg" alt="LoftHouse Logo" />
          
          <nav className="header-nav">
            <a className="header-nav-a" href="#">О комплексе</a>
            <a className="header-nav-a" href="#">Район</a>
            <a className="header-nav-a" href="#">Каталог квартир</a>
            <a className="header-nav-a" href="#">Ипотека</a>
            <a className="header-nav-a" href="#">Контакты</a>
          </nav>
        </div>

        <div className="header-title">
          <p>Жилой комплекс <br />в историческом центре</p>
          <img src="/icons/mouse.svg" alt="Scroll indicator" />
        </div>

        <div className="header-contacts">
          <div className="header-contacts-left">
            <img src="/icons/placeholder.svg" alt="Address icon" />
            <p>Наб. реки Фонтанки 10-15</p>
          </div>

          <div className="header-contacts-left">
            <img src="/icons/phone-call.svg" alt="Phone icon" />
            <p>8 (812) 123-45-67</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;