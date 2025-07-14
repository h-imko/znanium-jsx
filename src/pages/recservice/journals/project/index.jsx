import Form from "../../../../components/Form"
import Generic from "../../../../components/Generic"
import Input from "../../../../components/Input"
import Page from "../../../../components/Page"

export default function index() {
	return (
		<Page breadcrumbs>
			<Generic title={ "Какое-то название запроса" } p={ "От  21.04.99  23:49" }>
				<div className="button-group">
					<button type="button" className="button" data-dialog="dialog_123"> Редактировать </button>
					<button type="button" className="button button--secondary" data-dialog="dialog_321"> Удалить </button>
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
			</Generic>
			<dialog className="dialog" id="dialog_123">
				<div className="dialog__body">
					<div className="dialog__header">
						<hgroup className="dialog__hgroup">
							<h2 className="dialog__title">Изменить название</h2>
						</hgroup>
						<button className="dialog__close" type="button" aria-label="Закрыть окно" data-dialog-selfcloser></button>
					</div>
					<div className="dialog__main">
						<Form items={ [[<Input type={ "text" } value={ "Старое название" } required autofocus />]] } controls={ { submit: "Сохранить", reset: "Отменить" } } />
					</div>
				</div>
			</dialog>
			{/* а как удаление будет работать? тоже формой или отдельно слать запрос? */ }
			<dialog className="dialog" id="dialog_321">
				<div className="dialog__body">
					<div className="dialog__header">
						<hgroup className="dialog__hgroup">
							<h2 className="dialog__title">Вы уверены что хотите удалить запрос?</h2>
						</hgroup>
						<button className="dialog__close" type="button" aria-label="Закрыть окно" data-dialog-selfcloser></button>
					</div>
					<div className="dialog__main">
						<Form items={ [] } controls={ { submit: "Удалить", reset: "Отменить" } } />
					</div>
				</div>
			</dialog>
		</Page>

	)
}