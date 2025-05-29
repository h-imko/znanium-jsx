import Accordion from "./Accordion"

export default function () {
	return (
		<div className="accordion-list">
			<div class="accordion-list__header" data-accordion-group>
				<button type="button" class="accordion-list__toggler" title="Развернуть/свернуть все" data-accordion-collapse></button>
			</div>
			<div className="accordion-list__items">
				<Accordion title="Исторические аспекты формирования и развития торговой деятельности">
					<Accordion title="Исторические аспекты формирования и развития торговой деятельности">
						<Accordion title="Исторические аспекты формирования и развития торговой деятельности" />
						<Accordion title="Исторические аспекты формирования и развития торговой деятельности" />
					</Accordion>
					<Accordion title="Исторические аспекты формирования и развития торговой деятельности" />
					<Accordion title="Исторические аспекты формирования и развития торговой деятельности" />
					<Accordion title="Исторические аспекты формирования и развития торговой деятельности">
						<Accordion title="Исторические аспекты формирования и развития торговой деятельности" />
						<Accordion title="Исторические аспекты формирования и развития торговой деятельности" />
					</Accordion>
					<Accordion title="Исторические аспекты формирования и развития торговой деятельности" />
					<Accordion title="Исторические аспекты формирования и развития торговой деятельности" />
				</Accordion>
			</div>
		</div>
	)
}