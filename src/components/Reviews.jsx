export default function () {

  function Item({ text, author }) {
    return (
      <div className="reviews__item">
        <blockquote>
          <p> { text } </p>
        </blockquote>
        <p className="reviews__item__author"> { author } </p>
      </div>
    )
  }

  return (
    <div className="reviews">
      <Item text={ "Скорость работы. Удобно пользоваться. Доступные цены." } author={ "Преподаватель экономики. Юлия Авдеева." } />
      <Item text={ "Удобно, быстро, всегда под рукой." } author={ "Инна. Охрана труда, Инженерные сети, Вентиляция зданий." } />
      <Item text={ "Молодцы!" } author={ "Ольга. Налоги и налогообложение, страхование, маркетинг. Экономика и управление предприятием. Управление рисками и страхование. Бюджетирование." } />
    </div>
  )
}