export default function () {
  return (
    <div className="counter">
      <button type="button" className="counter__control" data-step-multiply="-1" title="Уменьшить">
        <span className="icon icon--remove"></span>
      </button>
      <input type="number" className="counter__input" value="1" min="1" max="5" readonly aria-label="Количество" />
      <button type="button" className="counter__control" data-step-multiply="2" title="Увеличить">
        <span className="icon icon--add"></span>
      </button>
    </div>
  )
}