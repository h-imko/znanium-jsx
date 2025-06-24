export default function () {
  return (
    <nav className="pagination">
      <a href="#" className="pagination__item pagination__item--first" title="К первой"></a>
      <a href="#" className="pagination__item pagination__item--prev" title="Назад"></a>
      <a href="#" className="pagination__item">1</a>
      <span className="pagination__item is-active">8</span>
      <a href="#" className="pagination__item">9</a>
      <a href="#" className="pagination__item">10</a>
      <a href="#" className="pagination__item">11</a>
      <a href="#" className="pagination__item">1021</a>
      <a href="#" className="pagination__item pagination__item--next" title="Вперед"></a>
      <a href="#" className="pagination__item pagination__item--last" title="К последней"></a>
    </nav>
  )
}