export default function ({ checked, required, value, label }) {
	return (
		<label className="checkbox">
			<input type="checkbox" checked={ checked } required={ required } value={ value } />
			{
				label && (<span> { label }</span>)
			}
		</label>
	)
}