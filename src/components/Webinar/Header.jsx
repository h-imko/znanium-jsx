export default function () {
  return (
    <div class={ `webinar__header webinar__header--color-${Math.floor(Math.random() * 3 + 1)} webinar__header--pattern-${Math.floor(Math.random() * 3 + 1)}` }>
      <div class="webinar__header__content">
        <h1 class="webinar__title">Издательский холдинг ИНФРА-М: подводим итоги 2024 года</h1>
        <div class="webinar__info">
          <div class="date"><em>24 декабря 2024</em> </div>
          <div class="time">11:00, 30 минут</div>
        </div>
        <div class="webinar__presenters">
          <div class="webinar__presenter">
            <img src="/src/assets/static/img/15.webp" alt="Заполните меня" class="webinar__presenter__img" />
            <div class="webinar__presenter__info">
              <div class="webinar__presenter__caption">Ведущий</div>
              <div class="webinar__presenter__name">Еманов Алексей Леонидович</div>
              <div class="webinar__presenter__post">Методист образовательных мероприятий</div>
            </div>
          </div>
          <div class="webinar__presenter">
            <img src="/src/assets/static/img/16.webp" alt="Заполните меня" class="webinar__presenter__img" />
            <div class="webinar__presenter__info">
              <div class="webinar__presenter__caption">Ведущий</div>
              <div class="webinar__presenter__name">Нестерова Альбина Николаевна</div>
              <div class="webinar__presenter__post">Методист образовательных мероприятий</div>
            </div>
          </div>
        </div>
        <a href="" class="webinar__button"> Смотреть</a>
      </div>
    </div>
  )
}