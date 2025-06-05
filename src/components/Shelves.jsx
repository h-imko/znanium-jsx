export default function () {
  function Shelf() {
    function Book() {
      return (
        <div className="shelf__book">
          <button type="button" class="shelf__book__remove" title="Удалить книгу с полки"></button>
        </div>
      )
    }
    <div className="shelf">
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
      <div className="shelf__main">
        <div className="shelf__main-inner">
          <div className="shelf__content">

          </div>
        </div>
      </div>
    </div>
  }

  return (
    <div className="shelves"></div>
  )
}