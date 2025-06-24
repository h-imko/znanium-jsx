import Input from "./Input"
import Labels from "./Labels"

export default function () {
  function Item() {
    function Link() {
      return (
        <div className="fpl__item__link">
          <div className="fpl__item__link__header">
            {
              (Boolean(Math.floor(Math.random() * 2) - 1)) && <div className="fpl__item__link__comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam in rerum neque. Magni velit earum esse cum voluptatem, eos praesentium quasi modi, dolor iusto, doloremque mollitia culpa natus eius.</div>
            }
            <div className="fpl__item__link__controls">
              <button type="button" className="fpl__item__link__control" title="Редактировать комментарий">
                <span className="icon icon--edit"></span>
              </button>
              <button type="button" className="fpl__item__link__control" title="Удалить ссылку">
                <span className="icon icon--delete"></span>
              </button>
            </div>
          </div>
          <div className="fpl__item__link__field">
            <Input value={ "https://znanium.org/read?id=378335&lms=03570044e37474fab18ad89adbb153f5" } readOnly customButton={ `<span className="icon icon--copy"></span>` } />
          </div>
          <div className="fpl__item__link__footer">
            <a href="#" className="fpl__item__link__pages">Диапазон страниц: с 1 по 7</a>
            <time datetime="" className="fpl__item__link__date">21.01.2022</time>
          </div>
        </div>
      )
    }
    return (
      <div className="fpl__item">
        <div className="fpl__item__doc">
          <a href="#" className="fpl__item__doc__img" title="Перейти">
            <img src="/src/assets/static/img/7.webp" alt="Заполните меня" />
          </a>
          <div className="fpl__item__doc__info">
            <div className="fpl__item__doc__author">Логиновский О. В.</div>
            <a href="#" className="fpl__item__doc__name">Эффективное управление организационными и производственными структурами</a>
          </div>
          <div className="fpl__item__doc__label">
            <Labels />
          </div>
        </div>
        <div className="fpl__item__links">
          <Link />
          <Link />
          <Link />
          <Link />
        </div>
      </div>
    )
  }
  return (
    <div className="fpl">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}