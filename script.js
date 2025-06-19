// Инициализация нового экземпляра Swiper для слайдера с классом 'tranding-slider'
var TrandingSlider = new Swiper('.tranding-slider', {
  // Установка эффекта слайдера на 'coverflow'
  effect: 'coverflow',
  // Включение курсора захвата для удобства взаимодействия
  grabCursor: true,
  // Центрирование активного слайда
  centeredSlides: true,
  // Включение зацикливания слайдов
  loop: true,
  // Установка количества слайдов, отображаемых одновременно, на 'auto' (автоматически)
  slidesPerView: 'auto',
  // Настройки эффекта coverflow
  coverflowEffect: {
      // Угол поворота слайдов
      rotate: 0,
      // Растяжение слайдов
      stretch: 0,
      // Глубина эффекта
      depth: 100,
      // Модификатор для изменения эффекта
      modifier: 2.5,
  },
  // Настройки пагинации
  pagination: {
      // Элемент, в который будет добавлена пагинация
      el: '.swiper-pagination',
      // Возможность кликабельности индикаторов пагинации
      clickable: true,
  },
  // Настройки навигации
  navigation: {
      // Элемент для кнопки "Следующий слайд"
      nextEl: '.swiper-button-next',
      // Элемент для кнопки "Предыдущий слайд"
      prevEl: '.swiper-button-prev',
  }
});
