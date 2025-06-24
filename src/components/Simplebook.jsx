import Labels from "./Labels"

export default function ({ time, bookmarks }) {

  function Time() {
    return (
      <time datetime="" className="simplebook__time">17:46</time>
    )
  }

  function Page() {
    return (
      <a href="#" className="simplebook__page" title="Перейти к странице"> <em> Стр.</em> 321 </a>
    )
  }

  function Bookmark() {
    return (
      <div className="simplebook__bookmark">
        <a href="#" className="simplebook__bookmark__text" title="Перейти к закладке">
          { "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id facere, sit nemo quasi fugiat. Ad consequuntur itaque odio! In possimus dolorem incidunt quibusdam! Architecto tempore molestiae magnam numquam labore?".split("").slice(0, Math.floor(Math.random() * 50 + 5)).join("") }
        </a>
        <div className="simplebook__bookmark__info">
          <a href="#" className="simplebook__bookmark__page" title="Перейти к странице"> <em> Стр.</em> 123 </a>
          <time datetime="" className="date"> 25 декабря 2024 г.</time>
          <time datetime="" className="time">16:17:47</time>
        </div>
        <div className="simplebook__bookmark__actions">
          <button type="button" className="simplebook__bookmark__action" title="Редактировать закладку">
            <span className="icon icon--edit"></span>
          </button>
          <button type="button" className="simplebook__bookmark__action" title="Удалить закладку">
            <span className="icon icon--delete"></span>
          </button>
        </div>
      </div>
    )
  }

  function Bookmarks() {
    return (
      <div className="simplebook__bookmarks">
        { [...Array(Math.floor(Math.random() * 4 + 1))].map(() =>
          <Bookmark />
        ) }
      </div>
    )
  }

  function BookmarksCount() {
    return (
      <a href="#" className="simplebook__bookmark-count">
        <span className="simplebook__bookmark-count__text"> 54 </span>
      </a>
    )
  }

  return (
    <div className="simplebook">
      { time && <> <Time /> <Page /> </> }
      <a href="#" className="simplebook__cover">
        <img src="/src/assets/static/img/6.webp" alt="Книга такая-то" />
      </a>
      <div className="simplebook__author">Дмитриченко Л.И., Дмитриченко Л.А., Головинов О.Н.</div>
      <a href="#" className="simplebook__title">Государственное регулирование торговой деятельности</a>
      <div className="simplebook__labels">
        <Labels items={ [
          {
            color: "alt"
          },
          {
            color: "accent",
            ...(Boolean(Math.round(Math.random())) && { text: <span className="icon icon--cached"> </span>, extraClass: "simplebook__updated" })
          },
        ] } />
      </div>
      { bookmarks && <Bookmarks /> }
      { !time && Boolean(Math.round(Math.random())) && <BookmarksCount /> }
    </div>
  )
}