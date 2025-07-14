import clsx from "clsx"

/**
 * @typedef {object} data
 * @property {th[]} [headers]
 * @property {(string|import("react").JSX.Element)[]} rows
 */

/**
 * @typedef {object} th
 * @property {string} [title]
 * @property {boolean} [sortable]
 * @property {"asc"|"desc"} [sorted]
 * @property {number} [colspan]
 */

/**
 * @param {Object} param0
 * @param {data} param0.data
 * @param {boolean} param0.small
 * @param {boolean} param0.slim
 * @param {boolean} param0.bordered
 */
export default function ({ data, small, slim, bordered, }) {

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
      <th colSpan={ thData.colspan }>
        { thData.sortable ? <Link /> : <>{ thData.title }</> }
      </th>
    )
  }

  /**
   * @param {(string|import("react").JSX.Element)[]} tdData 
   */
  function Tr(tdData) {
    return (
      <tr>
        { tdData.map(content => {
          if (typeof content === "string") {
            return <td dangerouslySetInnerHTML={ { __html: content } }></td>
          } else {
            return <td> { content }</td>
          }
        }) }
      </tr>
    )
  }

  return (
    <div className="table-wrapper">
      <table className={
        clsx({
          table: true,
          "table--small": small,
          "table--slim": slim,
          "table--bordered": bordered
        })
      }>
        { data.headers && <thead>
          <tr>
            { data.headers.map(Th) }
          </tr>
        </thead> }
        <tbody>
          { data.rows.map(Tr) }
        </tbody>
      </table>
    </div>
  )
}