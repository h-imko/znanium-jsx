export default function ({ img }) {
	return (
		<span className="streak-img">
			<svg tabindex="-1">
				<use href={ `${img ?? "/src/assets/static/img/collections/1.svg"}#self` } tabindex="-1" />
			</svg>
		</span>
	)
}