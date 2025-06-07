import Simplebook from "./Simplebook"

export default function ({ time, title }) {
  function Group() {
    return (
      <div className="simplebooks__group">
        { title && <h4 class="simplebooks__group__title"><time datetime="">Декабрь 26, 2024</time></h4> }
        <div className="simplebooks__group__books">
          <Simplebook bookmarks time={ time } />
          <Simplebook time={ time } />
          <Simplebook bookmarks time={ time } />
          <Simplebook time={ time } />
        </div>
      </div>
    )
  }
  return (
    <div className="simplebooks">
      <Group />
      <Group />
      <Group />
    </div>
  )
}