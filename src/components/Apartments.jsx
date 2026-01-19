const Card = ({ image, title, href }) => {
  return (
    <a className="card" href={href}>
      <img src={image} alt={title} />
      <h3 className="card-title">{title}</h3>
    </a>
  );
};

const Apartments = () => {
  const apartments = [
    { image: '/images/01.jpg', title: 'Пентхаус "Loft Олимп"', href: '#' },
    { image: '/images/02.jpg', title: 'Апартаменты "Nice Loft"', href: '#' },
    { image: '/images/03.jpg', title: 'Апартаменты "Loft Studio"', href: '#' },
    { image: '/images/04.jpg', title: 'Loft квартира "Престиж"', href: '#' },
  ];

  return (
    <section className="appartments">
      <div className="container">
        <div className="appartments-title">
          <h2 className="title-2">Наши квартиры</h2>
        </div>

        <div className="appartments-cards">
          {apartments.map((apt, index) => (
            <Card key={index} {...apt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;