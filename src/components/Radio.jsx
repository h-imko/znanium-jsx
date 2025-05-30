export default function ({ name, label }) {
	return (
		<label className="custom-radio">
			<input type="radio" name={ name } />
			{ label && <span> { label } </span> }
		</label>
	)
}