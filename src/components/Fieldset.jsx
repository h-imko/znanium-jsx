export default function ({ children, legend }) {
	return (
		<fieldset className="form__element-group">
			{ legend && <legend> { legend }</legend> }
			<div className="form__element-group__items">
				{ children }
			</div>
		</fieldset>
	)
}