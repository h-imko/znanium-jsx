export default function () {
	return (
		<div className="toasts">
			<div className="toasts__list">
			</div>
			<template id="toast-template">
				<div className="toasts__item">
					<div className="toasts__item__content">
						<div className="toasts__item__header">
							<div className="toasts__item__title" data-data="title"></div>
							<button type="button" className="toasts__item__closer" title="Закрыть"></button>
						</div>
						<div className="toasts__item__body">
							<div className="toasts__item__text" data-data="text"></div>
						</div>
					</div>
				</div>
			</template>
		</div>
	)
}