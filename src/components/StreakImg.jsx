export default function ({ img }) {
	return (
		<span className="streak-img">
			<svg tabindex="-1">
				<use href={ `/src/assets/static/img/complex-icons/stack.svg#${img}` } tabindex="-1" />
			</svg>
		</span>
	)
}