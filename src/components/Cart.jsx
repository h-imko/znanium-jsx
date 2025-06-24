import Input from "./Input"

export default function ({ children }) {
  return (
    <div className="cart">
      <div className="cart__main">
        <div className="cart__tabs">
          <a href="#" className="cart__tabs__item is-active">
            <span>Коллекции (7)</span>
            <span>3 189 024 ₽</span>
          </a>
          <a href="#" className="cart__tabs__item">
            <span>Отдельные документы (7)</span>
            <span>3 189 024 ₽</span>
          </a>
          <a href="#" className="cart__tabs__item">
            <span>Журналы (7)</span>
            <span>3 189 024 ₽</span>
          </a>
          <a href="#" className="cart__tabs__item">
            <span>Печатные издания (7)</span>
            <span>3 189 024 ₽</span>
          </a>
        </div>
        <div className="cart__table">
          { children }
          <button type="button" className="cart__table__clear">Очистить список</button>
        </div>
      </div>
      <div className="cart__aside">
        <div className="cart__summary">
          <div className="cart__summary__title">Состав подписки</div>
          <div className="cart__summary__item">
            <em>Коллекции:</em>
            <span>7 шт, 3 189 024 ₽</span>
          </div>
          <div className="cart__summary__item">
            <em>Отдельные документы:</em>
            <span>15 шт, 17 635 ₽</span>
          </div>
          <div className="cart__summary__item">
            <em>Журналы:</em>
            <span>1 шт, 6 300 ₽</span>
          </div>
          <div className="cart__summary__total">
            <span>Итоговая стоимость:</span>
            <em>3 212 959 ₽</em>
          </div>
          <Input label={ "Кол. учащихся" } type={ "number" } value={ 0 } />
          <button type="button" className="cart__summary__button">Создать заявку</button>
        </div>
        <div className="cart__summary">
          <div className="cart__summary__total">
            <span>Печатные издания</span>
            <em>41 340 ₽</em>
          </div>
          <button type="button" className="cart__summary__button">Создать заявку</button>
        </div>
      </div>
    </div>
  )
}