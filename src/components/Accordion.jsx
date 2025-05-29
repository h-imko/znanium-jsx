export default function ({ title, toggler, children }) {
	function Wrapper() {
		return (
			<div className="accordion__wrapper" data-accordion-wrapper>
				<div className="accordion__content" data-accordion-content>
					{ children }
				</div>
			</div>
		)
	}

	return (
		<div className="accordion" data-accordion>
			<div className="accordion__header">
				{ children && <button className="accordion__toggler" type="button" data-accordion-toggler>{ toggler }</button> }
				{ title }
			</div>
			{ children && <Wrapper /> }
		</div>
	)
}