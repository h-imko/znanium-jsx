export default function ({ children }) {
	return (
		<div className="m31">
			<div className="m31__bg">
				<div className="m31__layer"></div>
				<div className="m31__layer"></div>
				<div className="m31__layer"></div>
				<div className="m31__layer"></div>
			</div>
			<div className="m31__content">
				{ children }
			</div>
		</div>
	)
}