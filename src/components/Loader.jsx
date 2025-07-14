import clsx from "clsx"

export default function ({ center }) {
  return (
    <div class={ clsx({
      loader: true,
      "loader--center": center
    }) } >
      <svg tabindex="-1">
        <use href="/src/assets/static/img/icon/spinner_b.svg#self" tabindex="-1" />
      </svg>
    </div >
  )
}