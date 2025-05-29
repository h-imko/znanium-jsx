export default function ({ children, title, p, }) {
	function Header() {
		return (
			<hgroup className="generic__header">
				<h1>{ title }</h1>
				{ p && <p>{ p }</p> }
			</hgroup>
		)
	}

	return (
		<div className="generic">
			{ title && <Header /> }
			{ children }
		</div>
	)
}