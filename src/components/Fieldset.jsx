export default function ({ children, legend }) {
	return (
		<fieldset class="form__element-group">
			{ legend && <legend> { legend }</legend> }
			<div class="form__element-group__items">
				{ children }
			</div>
		</fieldset>
	)
}