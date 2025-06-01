export default function ({ children }) {
	return (
		<div className="bookslist">
			{ children.map(child => <div className="bookslist__item">{ child }</div>) }
		</div>
	)
}