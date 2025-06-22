import clsx from "clsx"

export default function ({ pattern, color, isButtonActive, title }) {
	return (
		<div className={ `webinar-card webinar-card--pattern-${pattern ?? Math.floor(Math.random() * 3 + 1)} webinar-card--color-${color ?? Math.floor(Math.random() * 3 + 1)}` }>
			<div className="webinar-card__body">
				<div className="webinar-card__title">{ title }</div>
				<span className="webinar-card__date">17 декабря 2024 , 11:00, 20 минут</span>
				<div className="webinar-card__presenters">
					<strong>Ведущие:</strong>
					<span>Еманов Алексей Леонидович</span>
					<span>Нестерова Альбина Николаевна</span>
				</div>
				<a href="" className={
					clsx({
						"webinar-card__link": true,
						"webinar-card__link--alt": isButtonActive,
					})
				}>Записаться</a>
			</div>
		</div >
	)
}