export default function () {
  return (
    <div className="firstvisit">
      <div className="firstvisit__item">
        <div className="firstvisit__item__text">
          <h4>Частное лицо</h4>
          <p>Чтобы читать найденную книгу, положите её в корзину, выберите удобный способ оплаты и сразу же получите полный доступ</p>
        </div>
        <img src="/src/assets/static/img/firstvisit/1.webp" alt="Заполните меня" className="firstvisit__item__img" />
      </div>
      <div className="firstvisit__item">
        <div className="firstvisit__item__text">
          <h4>Студент или преподаватель</h4>
          <p>Чтобы получить бесплатный доступ к книге, запросите ключ доступа в библиотеке Вашего учебного заведения при регистрации в Znanium или в кабинете</p>
        </div>
        <img src="/src/assets/static/img/firstvisit/2.webp" alt="Заполните меня" className="firstvisit__item__img" />
      </div>
      <div className="firstvisit__item">
        <div className="firstvisit__item__text">
          <h4>Представитель организации</h4>
          <p>Для того, чтобы понять, нужна ли Вам подписка, <a href="/site/request-for-connect">отправьте заявку на тестовое подключение к ЭБС Znanium</a></p>
        </div>
        <img src="/src/assets/static/img/firstvisit/3.webp" alt="Заполните меня" className="firstvisit__item__img" />
      </div>
    </div>
  )
}