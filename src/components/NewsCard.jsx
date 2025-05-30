export default function ({ img, title }) {
	return (
		<a href="" className="news-card">
			<div className="news-card__img" style={ `--img: /src/assets/static/img/${img}.webp` }>
				<img src={ `/src/assets/static/img/${img}.webp` } alt="Заполните меня" />
			</div>
			<div className="news-card__body">
				<span className="news-card__title">{ title ?? "Подписано соглашение о сотрудничестве между факультетом права НИУ ВШЭ и издательским холдингом ИНФРА-М" }</span>
				<span className="news-card__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius a vero recusandae? Officiis animi totam ad voluptate non, sequi et. Quibusdam eaque odio eligendi dolores ullam minus, modi nesciunt alias.</span>
				<span className="date"> 6 декабря 2024 </span>
			</div>
		</a>
	)
}