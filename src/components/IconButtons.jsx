/**
 * @typedef {object} item
 * @property {boolean} [isButton]
 * @property {string} icon
 * @property {string} title
 */

/**
 * @param {Object} param0 
 * @param {item[]} param0.items 
 */
export default function ({ items }) {
  /**
   * @param {item} data
   */
  function Item(data) {
    if (data.isButton) {
      return (
        <button type="button" className="icon-buttons__item" title={ data.title }>
          <span className={ `icon icon--${data.icon}` }></span>
        </button>
      )
    } else {
      return (
        <a href="#" className="icon-buttons__item" title={ data.title }>
          <span className={ `icon icon--${data.icon}` }></span>
        </a>
      )
    }
  }
  return (
    <div className="icon-buttons">
      { items.map(Item) }
    </div>
  )
}