import Simplebook from "./Simplebook"

export default function () {

  function Shelf() {

    function Book() {
      return (
        <div className="shelf__book">
          <Simplebook />
          <button type="button" class="shelf__book__remove" title="Удалить книгу с полки"></button>
        </div>
      )
    }

    return (
      <div className="shelf" data-accordion>
        <div class="shelf__header">
          <button type="button" class="shelf__handle" title="Зажмите и перетащите для изменения порядка"></button>
          <button type="button" class="shelf__name" title="Свернуть/развернуть" data-accordion-toggler="">Полка</button>
          <div class="shelf__controls">
            <button class="shelf__control" title="Редактировать полку">
              <span class="icon icon--edit"></span>
            </button>
            <button class="shelf__control" title="Удалить полку">
              <span class="icon icon--delete"></span>
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
    <div className="shelves">
      <Shelf />
      <Shelf />
      <Shelf />
    </div>
  )
}