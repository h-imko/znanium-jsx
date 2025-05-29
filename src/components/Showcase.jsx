import clsx from "clsx"
import DocumentsSlider from "../components/DocumentsSlider"

const links = [
	"Все тематики",
	"Архитектура. Искусство",
	"Бизнес. Предпринимательство. Сервис",
	"Биологические науки",
	"Военное дело. Оружие. Спецслужбы",
	"Демография. Статистика",
	"Информатика. Вычислительная техника",
	"История. Исторические науки",
	"Культура. СМИ",
	"Литература для средней школы и абитуриентов",
	"Медицина. Фармакология",
	"Науки о Земле. Экология",
	"Науковедение. Общенаучное знание и теории",
	"Общетехнические дисциплины",
	"Педагогика. Образование",
	"Политика. Социология",
	"Право. Юридические науки",
	"Промышленность. Энергетика",
	"Психология",
	"Радиоэлектроника. Автоматика. Связь",
	"Реклама. Маркетинг. PR",
	"Религия. Теология",
	"Сельское хозяйство",
	"Спорт. Самооборона. Физкультура",
	"Строительство",
	"Транспорт",
	"Управление (менеджмент)",
	"Физико-математические науки",
	"Филологические науки",
	"Философия",
	"Химические науки",
	"Художественная литература. Досуг",
	"Экономика. Бухгалтерский учет. ФинансыВсе тематики"
]

const repeat = [0, 1, 2, 3]

function link(text) {
	return (
		<li>
			<a href="">{ text }</a>
		</li>
	)
}

function tab(index = 0, _, __, empty) {
	return (
		<div className={
			clsx({
				showcase__tab: true,
				"is-active": !index
			})
		}>
			{ empty ? "" : <button type="button" className="showcase__tab__extra" title="Переключить"></button> }
			<button type="button" className="showcase__tab__main">Вкладка{ index } </button>
		</div>
	)
}

function item(index = 0, _, __, empty) {

	function slider() {
		return (
			<div className="showcase__slider">
				<DocumentsSlider />
			</div>
		)
	}

	function extra() {
		return (
			<div className="showcase__item__extra">
				<ul className="showcase__list">
					{ [...links, ...links, ...links].map(link) }
				</ul>
			</div>
		)
	}

	return (
		<div className={ clsx({
			showcase__item: true,
			"is-active": !index
		}) }  >
			<div className="showcase__item__main is-active">
				<h4 className="showcase__item__title">{ empty ? (<>Пожалуйста, выберите интересующие Вас рубрики на странице <a href=""> Мои предпочтения </a></>) : `Заголовок ${index}` } </h4>
				{ empty || slider() }
			</div>
			{ empty || extra() }
		</div>
	)
}

export default function ({ empty }) {
	return (
		<div className="showcase">
			<div className="container-fluid">
				<div className="showcase__inner">
					<div className="showcase__nav">
						{ empty ? tab(0, null, null, true) : repeat.map(tab) }
					</div>
					<div className="showcase__content">
						{ empty ? item(0, null, null, true) : repeat.map(item) }
					</div>
				</div>
			</div>
		</div>
	)
}