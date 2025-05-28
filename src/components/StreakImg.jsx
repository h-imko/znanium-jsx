export default function ({ img }) {
	return (
		<span className="streak-img">
			<svg tabindex="-1">
				<use href={ `/src/assets/static/img/dashed-icons/${img}.svg#self` } tabindex="-1" />
			</svg>
		</span>
	)
}