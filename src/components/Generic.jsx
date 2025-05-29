export default function ({ children, title, p, }) {
	return (
		<div className="generic">
			<hgroup className="generic__header">
				<h1>{ title }</h1>
				{ p && <p>{ p }</p> }
			</hgroup>
			{ children }
		</div>
	)
}