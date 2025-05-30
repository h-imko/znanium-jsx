export default function ({ label }) {
	return (
		<label class="select-simple">
			{ label && <span>{ label }</span> }
			<span class="select-simple__select">
				<select aria-label="Какой-то селект">
					<option value="">Все</option>
					<option value="">25</option>
					<option value="">50</option>
					<option value="">100</option>
				</select>
			</span>
		</label>
	)
}