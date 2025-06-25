export default function () {
  return (
    <dialog className="cookie-alert">
      <div className="container">
        <div className="cookie-alert__inner">
          <div className="cookie-alert__text">
            <h2 className="cookie-alert__title">
              Мы используем куки
            </h2>
            <p>Для работы с сайтом необходимо ваше разрешение на сбор и использование cookie-файлов. Подробную информацию смотрите на странице <a href="">политика использования персональных данных</a></p>
          </div>
          <div className="cookie-alert__actions">
            <button type="button" className="cookie-alert__accept">Принять</button>
          </div>
        </div>
      </div>
    </dialog>
  )
}