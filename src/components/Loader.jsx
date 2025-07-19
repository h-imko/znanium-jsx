import clsx from "clsx"

export default function ({ center }) {
  return (
    <div class={ clsx({
      loader: true,
      "loader--center": center
    }) } >
      <svg tabindex="-1">
        <use href="/src/assets/static/img/complex-icons/stack.svg#spinner_b" tabindex="-1" />
      </svg>
    </div >
  )
}