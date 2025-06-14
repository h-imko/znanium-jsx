import clsx from "clsx"

/**
 * @typedef {object} data
 * @property {th[]} [headers]
 * @property {td[]} [rows]
 * @property {boolean} [reset]
 */

/**
 * @typedef {object} th
 * @property {string} [title]
 * @property {boolean} [sortable]
 * @property {"asc"|"desc"} [sorted]
 */

/**
 * @typedef {object} td
 * @property {string|import("react").JSX.Element} [content] 
 */

/**
 * @param {Object} param0
 * @param {data} param0.data
 */
export default function ({ data }) {

  /**
   * @param {th} thData
   */
  function Th(thData) {
    function Link() {
      return (
        <a href="#" title="Сортировать" data-sort-order={ thData.sorted }>
          { thData.title }
        </a>
      )
    }
    return (
      <th>
        { thData.sortable ? <Link /> : <>{ thData.title }</> }
      </th>
    )
  }

  /**
   * @param {td[]} tdData 
   */
  function Tr(tdData) {
    return (
      <tr>
        { tdData.map(content => <td dangerouslySetInnerHTML={ { __html: content } }></td>) }
      </tr>
    )
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            { data.headers.map(Th) }
          </tr>
        </thead>
        <tbody>
          { data.rows.map(Tr) }
        </tbody>
      </table>
    </div>
  )
}