const MainAdvantages = () => {
  const advantages = [
    { icon: '/icons/bench.svg', text: 'Рядом исторические парки и скверы' },
    { icon: '/icons/building.svg', text: 'Полностью обустроенный' },
    { icon: '/icons/fountain.svg', text: '10 фонтанов на территории' },
    { icon: '/icons/bicycle.svg', text: '6 км велодорожек' },
  ];

  return (
    <section className="main">
      <h2 className="visually-hidden">Преимущества ЖК</h2>
      <div className="container container-sm">
        <div className="main-inner">
          {advantages.map((item, index) => (
            <div className="main-item" key={index}>
              <img className="main_item-img" src={item.icon} alt={item.text} />
              <p className="main_item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainAdvantages;