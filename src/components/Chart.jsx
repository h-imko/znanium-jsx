export default function ({ data, options, title, type }) {
  return (
    <div class="chart" data-data={ data } data-options={ options } data-type={ type }>
      <h5 class="chart__title"> { title } </h5>
      <div class="chart__inner">
        <canvas></canvas>
      </div>
    </div>
  )
}