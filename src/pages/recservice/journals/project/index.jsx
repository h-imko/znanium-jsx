import Generic from "../../../../components/Generic"
import Page from "../../../../components/Page"

export default function index() {
	return (
		<Page breadcrumbs  >
			<Generic title={ "Какое-то название запроса" } p={ "От  21.04.99  23:49" }>
				<div className="button-group">
					<button type="button" className="button" > Редактировать </button>
					<button type="button" className="button button--secondary" > Удалить </button>
				</div>
				<h2>Результаты</h2>
				<div className="recservice">
					<div className="recservice__item">
						<span className="recservice__item__name">Журналы</span>
						<button type="button" className="recservice__item__action">Выполнить</button>
					</div>
					<div className="recservice__item">
						<a href="#" className="recservice__item__name">Технологии</a>
						<time className="recservice__item__date">21.04.2016</time>
						<button type="button" className="recservice__item__action">Обновить</button>
					</div>
					<div className="recservice__item">
						<span className="recservice__item__name">Авторы</span>
						<button type="button" className="recservice__item__action">Выполнить</button>
					</div>
				</div>
			</Generic >
		</Page>
	)
}