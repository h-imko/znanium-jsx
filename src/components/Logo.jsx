export default function ({ compact }) {
	return (
		compact ?
			<svg className="logo" tabindex="-1" >
				<use href="/src/assets/static/img/logo-compact.svg#self" tabindex="-1" />
			</svg>
			:
			<svg viewBox="0 0 503 127" className="logo" tabindex="-1">
				<use href="/src/assets/static/img/logo.svg#logo" tabindex="-1" />
			</svg>
	)
}