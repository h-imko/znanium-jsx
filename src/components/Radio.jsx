export default function ({ name, label }) {
	return (
		<label class="custom-radio">
			<input type="radio" name={ name } />
			{ label && <span> { label } </span> }
		</label>
	)
}