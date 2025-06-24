export default function ({ data, options, title, type }) {
  return (
    <div className="chart" data-data={ data } data-options={ options } data-type={ type }>
      <h5 className="chart__title"> { title } </h5>
      <div className="chart__inner">
        <canvas></canvas>
      </div>
    </div>
  )
}