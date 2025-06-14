import clsx from "clsx"

/**
 * @param {Object} param0 
 * @param {string[]} param0.items 
 */
export default function ({ items }) {
  return (
    <div className="links">
      { items.map((item, index) => {
        return (
          <a
            href="#"
            className={ clsx({
              links__item: true,
              "is-active": !index
            }) }>
            { item }
          </a>
        )
      }) }
    </div>
  )
}