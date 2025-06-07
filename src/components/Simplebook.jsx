import Labels from "./Labels"

export default function ({ time, bookmarks }) {

  function Time() {
    return (
      <time datetime="" class="simplebook__time">17:46</time>
    )
  }

  function Page() {
    return (
      <a href="" class="simplebook__page" title="Перейти к странице"> <em> Стр.</em> 321 </a>
    )
  }

  function Bookmark() {
    return (
      <div class="simplebook__bookmark">
        <a href="" class="simplebook__bookmark__text" title="Перейти к закладке">
          { "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id facere, sit nemo quasi fugiat. Ad consequuntur itaque odio! In possimus dolorem incidunt quibusdam! Architecto tempore molestiae magnam numquam labore?".split("").slice(0, Math.floor(Math.random() * 50 + 5)).join("") }
        </a>
        <div class="simplebook__bookmark__info">
          <a href="" class="simplebook__bookmark__page" title="Перейти к странице"> <em> Стр.</em> 123 </a>
          <time datetime="" class="date"> 25 декабря 2024 г.</time>
          <time datetime="" class="time">16:17:47</time>
        </div>
        <div class="simplebook__bookmark__actions">
          <button type="button" class="simplebook__bookmark__action" title="Редактировать закладку">
            <span class="icon icon--edit"></span>
          </button>
          <button type="button" class="simplebook__bookmark__action" title="Удалить закладку">
            <span class="icon icon--delete"></span>
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
      <a href="#" class="simplebook__bookmark-count">
        <span class="simplebook__bookmark-count__text"> 54 </span>
      </a>
    )
  }

  return (
    <div className="simplebook">
      { time && <> <Time /> <Page /> </> }
      <a href="" class="simplebook__cover">
        <img src="/src/assets/static/img/6.webp" alt="Книга такая-то" />
      </a>
      <div class="simplebook__author">Дмитриченко Л.И., Дмитриченко Л.А., Головинов О.Н.</div>
      <a href="" class="simplebook__title">Государственное регулирование торговой деятельности</a>
      <div className="simplebook__labels">
        <Labels items={ [
          {
            color: "alt"
          },
          {
            color: "accent",
            ...(Boolean(Math.round(Math.random())) && { text: <span class="icon icon--cached"> </span>, extraClass: "simplebook__updated" })
          },
        ] } />
      </div>
      { bookmarks && <Bookmarks /> }
      { !time && Boolean(Math.round(Math.random())) && <BookmarksCount /> }
    </div>
  )
}