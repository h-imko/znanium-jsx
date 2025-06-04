export default function ({ title, toggler, headerButton, children }) {
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
				{ children && <button className="accordion__toggler" title="Развернуть/свернуть" type="button" data-accordion-toggler>{ toggler }</button> }
				{ title && <a className="accordion__title" href=""> { title }</a> }
			</div>
			{ children && <Wrapper /> }
		</div>
	)
}