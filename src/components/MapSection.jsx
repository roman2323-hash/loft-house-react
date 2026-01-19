// src/components/MapSection.jsx - ИСПРАВЛЕННАЯ ВЕРСИЯ
import { useEffect, useRef } from 'react';

const MapSection = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Создаем скрипт карты
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A17582a4c4d89207cbee2501c090eaa17868afd47e90f35343ccfc3f0a5ade95a&width=100%25&height=500&lang=ru_RU&scroll=true';
    
    // Удаляем старые скрипты
    if (mapContainerRef.current) {
      // Очищаем контейнер от предыдущих скриптов
      mapContainerRef.current.innerHTML = '';
      
      // Добавляем новый скрипт
      mapContainerRef.current.appendChild(script);
      
      // Проверяем загрузку карты
      const checkMap = setInterval(() => {
        if (mapContainerRef.current.querySelector('iframe') || mapContainerRef.current.querySelector('ymaps')) {
          mapContainerRef.current.classList.add('loaded');
          clearInterval(checkMap);
        }
      }, 500);
    }

    return () => {
      // Очистка при размонтировании
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Очищаем контейнер
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="map">
      <div className="container">
        <div className="map-title">
          <h2 className="title-2">Район на карте</h2>
        </div>

        <div className="section-map__map" ref={mapContainerRef}>
          {/* Карта будет вставлена сюда скриптом */}
        </div>
      </div>
    </section>
  );
};

export default MapSection;