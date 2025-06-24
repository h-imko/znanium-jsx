import clsx from "clsx"
import IconButtons from "./IconButtons"

/**
 * @param {Object} param0
 * @param {boolean} param0.titleLink
 * @param {boolean} param0.actions
 * @param {boolean} param0.pack
 * @param {boolean} param0.text
 * @param {boolean} param0.books
 * @param {boolean} param0.links
 */
export default function ({ titleLink, actions, pack, text, books, links }) {

  function Item({ title, textString, manyBooks }) {
    const itemClassName = clsx({
      reflist__item: true,
      "reflist__item--pack": pack,
      "reflist__item--author": !pack,
    })

    function Actions() {
      return (
        <div className="reflist__item__actions">
          <IconButtons items={ [
            {
              icon: "edit",
              isButton: true,
              title: "Переименовать"
            },
            {
              icon: "delete",
              isButton: true,
              title: "Удалить"
            },
          ] } />
        </div>
      )
    }

    function Title() {
      return (
        titleLink ?
          <a href="#" className="reflist__item__title"> { title } </a> :
          <div className="reflist__item__title"> { title } </div>
      )
    }

    function Text() {
      return (
        <div className="reflist__item__text">
          { textString }
        </div>)
    }

    function Links() {
      return (
        <div className="reflist__item__links">
          <a href="#" className="reflist__item__link">Наименований — 33</a>
          <div className="reflist__item__link">Нет Аффилиаций</div>
        </div>
      )
    }

    function Books() {
      return (
        <div className="reflist__item__books">
          <a href="#" className="reflist__item__book">
            <img src="/src/assets/static/img/6.webp" alt="Книга такая-то" />
          </a>
          { manyBooks && <>
            <a href="#" className="reflist__item__book">
              <img src="/src/assets/static/img/7.webp" alt="Книга такая-то" />
            </a>
            <a href="#" className="reflist__item__book">
              <img src="/src/assets/static/img/6.webp" alt="Книга такая-то" />
            </a>
            <a href="#" className="reflist__item__book">
              <img src="/src/assets/static/img/7.webp" alt="Книга такая-то" />
            </a>
            <a href="#" className="reflist__item__book">
              <img src="/src/assets/static/img/6.webp" alt="Книга такая-то" />
            </a>
            <a href="#" className="reflist__item__books__link">Перейти к списку</a>
          </> }
        </div>
      )
    }

    return (
      <div className={ itemClassName }>
        <Title />
        { text && <Text /> }
        { actions && <Actions /> }
        { links && <Links /> }
        { books && <Books /> }
      </div>
    )
  }

  return (
    <div className="reflist">
      <Item title={ "Голованов Николай Николаевич" } textString={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore sint aspernatur adipisci nesciunt eaque tempora dicta odio amet, fugit minima quas aliquid, repudiandae ad sapiente nihil laudantium expedita et?" } />
      <Item title={ "12 Центральный научно-исследовательский институт Министерства обороны Российской Федерации" } manyBooks />
    </div>
  )
}