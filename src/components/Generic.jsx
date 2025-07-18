export default function ({ children, title, p, }) {
	function Header() {
		return (
			<div className="generic__header">
				<h1>{ title }</h1>
				{ p && <div className="generic__header__extra">{ p }</div> }
			</div>
		)
	}

	return (
		<div className="generic">
			{ title && <Header /> }
			{ children }
		</div>
	)
}