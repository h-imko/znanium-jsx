export default function () {
  return (
    <div className="cookie-alert">
      <div className="container-fluid">
        <div className="cookie-alert__inner">
          <div className="cookie-alert__text">
            <p>Мы используем файлы cookie для вашего удобства. Продолжая пользоваться сайтом, вы соглашаетесь с политикой использования cookie. <a href=""> Подробнее </a> </p>
          </div>
          <div className="cookie-alert__actions">
            <button type="button" className="cookie-alert__accept">Принять</button>
          </div>
        </div>
      </div>
    </div>
  )
}