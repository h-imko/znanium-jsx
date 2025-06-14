import clsx from "clsx"
import Simplebook from "./Simplebook"

export default function ({ isAlt }) {

  function Shelf() {

    function Book() {
      return (
        <div className="shelf__book">
          <Simplebook />
          <button type="button" className="shelf__book__remove" title="Удалить книгу с полки"></button>
        </div>
      )
    }

    return (
      <div className="shelf" data-accordion>
        <div className="shelf__header">
          <button type="button" className="shelf__handle" title="Зажмите и перетащите для изменения порядка"></button>
          <button type="button" className="shelf__name" title="Свернуть/развернуть" data-accordion-toggler="">Полка</button>
          <div className="shelf__controls">
            <button className="shelf__control" title="Редактировать полку">
              <span className="icon icon--edit"></span>
            </button>
            <button className="shelf__control" title="Удалить полку">
              <span className="icon icon--delete"></span>
            </button>
          </div>
        </div>
        <div className="shelf__main" data-accordion-wrapper>
          <div className="shelf__main-inner" data-accordion-content>
            <div className="shelf__content">
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={
      clsx({
        shelves: true,
        "is-alt": isAlt,
      })
    }>
      <Shelf />
      <Shelf />
      <Shelf />
    </div>
  )
}