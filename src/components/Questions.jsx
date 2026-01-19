import { useState } from 'react';

const Questions = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Questions form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="questions">
      <div className="container">
        <div className="questions-title">
          <h2 className="title-2">Есть вопросы?</h2>
        </div>
        
        <div className="questions-item">
          <div className="questions-inner">
            <p className="form__privacy">
              *Мы никому не передаем ваши данные. <br />
              И не сохраняем ваш номер в базу.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="questions-form">
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
          </form>

          <button type="submit" className="form__btn" onClick={handleSubmit}>
            Посмотреть район
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;