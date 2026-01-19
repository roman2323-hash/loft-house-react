import { useState } from 'react';

const CTA = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-title">
          <h2 className="title-2">Хотите посмотреть?</h2>
        </div>

        <div className="cta__wrapper">
          <div className="cta__text">
            <p>
              ЖК LoftHouse – это проект бизнес-класса, расположенный в центре города, на Наб. реки Фонтанки 10-15. 
              Комплекс предлагает своим жильцам квартиры площадью от 40 до 170 кв. м. В здании будет три секции, 
              в которых разместится всего 56 квартир.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="cta__form form">
            <input
              type="text"
              name="name"
              className="form__input"
              placeholder="Ваше имя"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              className="form__input"
              placeholder="Ваш телефон"
              autoComplete="off"
              value={formData.phone}
              onChange={handleChange}
            />
            
            <p className="form__privacy">
              *Мы никому не передаем ваши данные. <br />
              И не сохраняем ваш номер в базу.
            </p>

            <button type="submit" className="form__btn">
              Посмотреть район
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;