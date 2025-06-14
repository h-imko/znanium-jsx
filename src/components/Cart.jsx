export default function () {
  return (
    <div className="cart">
      <div className="cart__main">
        <div class="cart__tabs">
          <a href="" class="cart__tabs__item is-active">
            <span>Коллекции (7)</span>
            <span>3 189 024 ₽</span>
          </a>
          <a href="" class="cart__tabs__item">
            <span>Отдельные документы (7)</span>
            <span>3 189 024 ₽</span>
          </a>
          <a href="" class="cart__tabs__item">
            <span>Журналы (7)</span>
            <span>3 189 024 ₽</span>
          </a>
          <a href="" class="cart__tabs__item">
            <span>Печатные издания (7)</span>
            <span>3 189 024 ₽</span>
          </a>
        </div>
      </div>
      <div class="cart__aside">
        <div class="cart__summary">
          <div class="cart__summary__title">Состав подписки</div>
          <div class="cart__summary__item">
            <em>Коллекции:</em>
            <span>7 шт, 3 189 024 ₽</span>
          </div>
          <div class="cart__summary__item">
            <em>Отдельные документы:</em>
            <span>15 шт, 17 635 ₽</span>
          </div>
          <div class="cart__summary__item">
            <em>Журналы:</em>
            <span>1 шт, 6 300 ₽</span>
          </div>
          <div class="cart__summary__total">
            <span>Итоговая стоимость:</span>
            <em>3 212 959 ₽</em>
          </div>
          <div class="custom-input ">
            <label for="1749927057158" class="custom-input__label"> Кол. учащихся </label>
            <input type="number" id="1749927057158" placeholder=" " value="0" />
          </div>
          <button type="button" class="cart__summary__button">Создать заявку</button>
        </div>
        <div class="cart__summary">
          <div class="cart__summary__total">
            <span>Печатные издания</span>
            <em>41 340 ₽</em>
          </div>
          <button type="button" class="cart__summary__button">Создать заявку</button>
        </div>
      </div>
    </div>
  )
}