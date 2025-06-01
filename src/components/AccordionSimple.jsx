export default function ({ toggler, children }) {
	function Wrapper() {
		return (
			<div className="accordion-simple__wrapper" data-accordion-wrapper>
				<div className="accordion-simple__content" data-accordion-content>
					{ children }
				</div>
			</div>
		)
	}

	return (
		<div className="accordion-simple" data-accordion>
			<div className="accordion-simple__header">
				{ children && <button className="accordion-simple__toggler" title="Развернуть/свернуть" type="button" data-accordion-toggler>{ toggler }</button> }
			</div>
			{ children && <Wrapper /> }
		</div>
	)
}