export default function ({ children }) {
	return (
		<div className="m31">
			<div className="m31__bg">
				<div className="m31__layer m31__layer--1" style="background-image: url(/src/assets/static/img/space/1.webp)"></div>
				<div className="m31__layer m31__layer--2" style="background-image: url(/src/assets/static/img/space/2.webp)"></div>
				<div className="m31__layer m31__layer--3" style="background-image: url(/src/assets/static/img/space/3.webp)"></div>
				<div className="m31__layer m31__layer--4" style="background-image: url(/src/assets/static/img/space/4.webp)"></div>
			</div>
			<div className="m31__content">
				{ children }
			</div>
		</div>
	)
}